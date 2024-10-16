import React, { useEffect, useState } from "react";
import { supabase } from "../../supabaseClient";

type Pin = {
  id?: number;
  x?: number;
  y?: number;
  tag: string;
};

export const ImageGallery: React.FC = () => {
  const [images, setImages] = useState<string[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [pins, setPins] = useState<Pin[]>([]);
  const [newTag, setNewTag] = useState<string>(""); // For user input of pin tags
  const [selectedPin, setSelectedPin] = useState<Pin | null>(null); // For pinning an existing pin

  useEffect(() => {
    const fetchImages = async () => {
      const user = await supabase.auth.getUser();

      if (!user.data) throw new Error("User not authenticated");

      const { data, error } = await supabase
        .from("mosque_images")
        .select("image_url")
        .eq("user_id", user.data.user?.id);

      if (error) {
        console.error(error.message);
        return;
      }

      setImages(data.map((img: { image_url: string }) => img.image_url));
      if (data.length > 0) {
        await fetchPins(data[0].image_url); // Fetch pins for the first image
      }
    };

    fetchImages();
  }, []);

  // Fetch pins from the database for the current image
  const fetchPins = async (imageUrl: string) => {
    const { data, error } = await supabase
      .from("image_pins")
      .select("*")
      .eq("image_url", imageUrl);

    if (error) {
      console.error(error.message);
      return;
    }

    setPins(
      data.map((pin: { id: number; x: number; y: number; tag: string }) => ({
        id: pin.id,
        x: pin.x,
        y: pin.y,
        tag: pin.tag,
      }))
    );
  };

  // Save or update the selected pin to the database after setting the coordinates
  const savePin = async (pin: Pin, x: number, y: number) => {
    const imageUrl = images[currentImageIndex];

    const user = await supabase.auth.getUser();
    if (!user.data?.user) {
      console.error("User not authenticated");
      return;
    }

    if (pin.id) {
      // If pin exists (has an ID), update it
      const { error } = await supabase
        .from("image_pins")
        .update({ x, y })
        .eq("id", pin.id);

      if (error) {
        console.error(error.message);
      } else {
        // Refresh the pins list after updating
        await fetchPins(imageUrl);
        setSelectedPin(null); // Reset selected pin
      }
    } else {
      // If pin doesn't exist (no ID), create a new one
      const { error } = await supabase.from("image_pins").insert([
        {
          image_url: imageUrl,
          x,
          y,
          tag: pin.tag,
          user_id: user.data.user.id,
        },
      ]);

      if (error) {
        console.error(error.message);
      } else {
        // After saving the new pin, refresh the pins list
        await fetchPins(imageUrl);
        setSelectedPin(null); // Reset selected pin
      }
    }
  };

  const deletePin = async (pinId: number | undefined) => {
    if (!pinId) return;

    const { error } = await supabase
      .from("image_pins")
      .delete()
      .eq("id", pinId);

    if (error) {
      console.error("Error deleting pin:", error.message);
    } else {
      // After deleting the pin, refresh the pins list
      const imageUrl = images[currentImageIndex];
      await fetchPins(imageUrl);
    }
  };

  // Add a new pin entry in the list
  const addPin = () => {
    setPins([...pins, { tag: newTag }]);
    setNewTag(""); // Clear the input field after adding
  };

  // Set the coordinates of the selected pin
  const handleImageClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (!selectedPin) return;

    const imgElement = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - imgElement.left;
    const y = e.clientY - imgElement.top;

    const xPercent = (x / imgElement.width) * 100;
    const yPercent = (y / imgElement.height) * 100;

    // Save or update the pin with the new coordinates
    savePin(selectedPin, xPercent, yPercent);
  };

  const handleNext = async () => {
    const nextIndex =
      currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1;
    setCurrentImageIndex(nextIndex);
    setPins([]); // Clear current pins
    await fetchPins(images[nextIndex]); // Fetch pins for the next image
  };

  const handlePrevious = async () => {
    const prevIndex =
      currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(prevIndex);
    setPins([]); // Clear current pins
    await fetchPins(images[prevIndex]); // Fetch pins for the previous image
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Your Uploaded Images</h2>

      {images.length > 0 ? (
        <div>
          <div
            style={{
              position: "relative",
              display: "inline-block",
              marginBottom: "20px",
              cursor: "pointer",
            }}
            onClick={handleImageClick}
          >
            <img
              src={images[currentImageIndex]}
              alt={`Uploaded ${currentImageIndex}`}
              style={{
                width: "100%",
                maxWidth: "800px",
                height: "auto",
              }}
            />
            {pins.map((pin, index) =>
              pin.x && pin.y ? (
                <div
                  key={index}
                  style={{
                    position: "absolute",
                    top: `${pin.y}%`,
                    left: `${pin.x}%`,
                    transform: "translate(-50%, -50%)",
                    width: "20px",
                    height: "20px",
                    backgroundColor: "red",
                    borderRadius: "50%",
                    animation: "blink 1s infinite",
                    cursor: "pointer",
                  }}
                >
                  {/* Display the tag next to the pin */}
                  {pin.tag && (
                    <span
                      style={{
                        position: "absolute",
                        top: "25px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        backgroundColor: "white",
                        padding: "2px 5px",
                        borderRadius: "4px",
                        fontSize: "12px",
                        fontWeight: "bold",
                        color: "black",
                      }}
                    >
                      {pin.tag}
                    </span>
                  )}
                </div>
              ) : null
            )}
          </div>

          <div>
            <button onClick={handlePrevious} style={buttonStyle}>
              Previous
            </button>
            <button onClick={handleNext} style={buttonStyle}>
              Next
            </button>
          </div>

          <p>
            Image {currentImageIndex + 1} of {images.length}
          </p>

          {/* Input field for pin tag */}
          <input
            type="text"
            placeholder="Enter tag for pin"
            value={newTag}
            onChange={(e) => setNewTag(e.target.value)}
            style={{ padding: "10px", marginTop: "10px" }}
          />
          <button onClick={addPin} style={buttonStyle}>
            Add Pin
          </button>

          {/* Pin List Table */}
          <h3>Pin List for Current Image</h3>
          <table
            style={{
              width: "80%",
              margin: "20px auto",
              border: "1px solid black",
            }}
          >
            <thead>
              <tr>
                <th>ID</th>
                <th>Tag</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {pins.map((pin) => (
                <tr key={pin.id}>
                  <td>{pin.id}</td>
                  <td>{pin.tag}</td>
                  <td>
                    <button
                      onClick={() => setSelectedPin(pin)}
                      style={{
                        padding: "5px 10px",
                        backgroundColor: "blue",
                        color: "white",
                        border: "none",
                        cursor: "pointer",
                      }}
                    >
                      Select for Pinning
                    </button>
                    <button
                      onClick={() => deletePin(pin.id)}
                      style={{
                        padding: "5px 10px",
                        backgroundColor: "red",
                        color: "white",
                        border: "none",
                        cursor: "pointer",
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>No images uploaded yet.</p>
      )}
    </div>
  );
};

const buttonStyle = {
  padding: "10px 20px",
  margin: "10px",
  fontSize: "16px",
  cursor: "pointer",
};

// Add a CSS animation for the blinking effect
const blinkStyle = document.createElement("style");
blinkStyle.innerHTML = `
  @keyframes blink {
    0% { opacity: 1; }
    50% { opacity: 0; }
    100% { opacity: 1; }
  }
`;
document.head.appendChild(blinkStyle);
