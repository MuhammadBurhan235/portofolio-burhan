import React, { useEffect, useState } from "react";
import { supabase } from "../../supabaseClient";

type Pin = {
  id?: number;
  x?: number;
  y?: number;
  tag: string;
};

export const MasjidMap: React.FC = () => {
  const [images, setImages] = useState<string[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [pins, setPins] = useState<Pin[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      const { data, error } = await supabase
        .from("mosque_images")
        .select("image_url");

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
      {images.length > 0 ? (
        <div>
          <div
            style={{
              position: "relative",
              display: "inline-block",
              marginBottom: "20px",
              cursor: "pointer",
            }}
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

          {/* Pin List Table */}
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
