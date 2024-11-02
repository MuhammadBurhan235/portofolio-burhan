import { images } from "../../images";
import triDiVideoMp4 from "../../assets/tridialfath.mp4";
import triDiVideoWebM from "../../assets/tridialfath.webm";
import intPicVideoMp4 from "../../assets/intpicalfath.mp4";
import intPicVideoWebM from "../../assets/intpicalfath.webm";
import {
  faCheck,
  faClose,
  faGreaterThan,
  faLessThan,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../App.css";
import { useEffect, useState } from "react";
import { supabase } from "../../supabaseClient";

interface Slide {
  src: string; // Image source
}

interface DaysToEvent {
  id: number;
  nama: string;
  list_gambar: string; // Assuming this is a comma-separated string
}

export default function LandingAlFath() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [daysToEvents, setDaysToEvents] = useState<DaysToEvent[]>([]);
  const [slides, setSlides] = useState<Slide[]>([]); // Initialize slides state

  const handleNodeClick = (index: number) => {
    const newIndex = index * 3; // Multiply the index by 3 to shift by three slides
    // Ensure the new index does not exceed the slides length
    setCurrentIndex(Math.min(newIndex, slides.length - 3));
  };

  useEffect(() => {
    const fetchDaysToEvents = async () => {
      const { data, error } = await supabase.from("days_to_event").select("*");
      if (error) {
        console.error(error);
      } else {
        setDaysToEvents(data);

        // Create slides from list_gambar after data is fetched
        const allSlides: Slide[] = [];
        data.forEach((event: DaysToEvent) => {
          const imagesArray = event.list_gambar.split(";"); // Split the string into an array
          imagesArray.forEach((src) => {
            allSlides.push({ src: src.trim() }); // Trim any whitespace
          });
        });
        setSlides(allSlides); // Update slides state
      }
    };

    fetchDaysToEvents();
  }, []);

  // Automatically move to the next slide every 5 seconds
  // Automatically move to the next slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + 3;
        if (nextIndex >= slides.length) {
          return 0; // Reset to the first slide
        }
        return nextIndex; // Move to the next slide
      });
    }, 5000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [slides]);

  // Calculate the visible slides based on the current index
  const visibleSlides = slides.slice(currentIndex, currentIndex + 3);

  return (
    <div>
      <div className="area">
        <div
          className="kontenArea"
          style={{
            padding: "0px",
            height: "auto",
            border: "none",
            display: "flex", // Tambahkan flexbox
            justifyContent: "center", // Pusatkan secara horizontal
            alignItems: "center",
          }}
        >
          <div
            className="cardContainer"
            style={{
              padding: "0px",
              color: "#333",
            }}
          >
            <h3
              style={{
                fontSize: "3em",
              }}
            >
              Kenal
            </h3>
            <h3 style={{ WebkitTextStroke: "1px #d2d2d2", fontSize: "3em" }}>
              Al-Fath
            </h3>
          </div>

          <div
            className="kontenArea areaMobile"
            style={{
              top: "100%",
              backgroundColor: "rgba(255, 255, 255, 0.179)",
              display: "flex", // Tambahkan flexbox
              justifyContent: "center", // Pusatkan secara horizontal
              alignItems: "center",
            }}
          >
            <div
              className="cardContainer mobile"
              style={{
                padding: "30px",
              }}
            >
              <div
                className="cardList2"
                style={{
                  width: "1030px",
                  height: "130px",
                  padding: "0px",
                  backgroundColor: "transparent",
                }}
              >
                <div
                  className="cardContainer"
                  style={{
                    width: "1030px",
                    height: "130px",
                    padding: "0px",
                    gap: "0px",
                  }}
                >
                  {daysToEvents.map((daysToEvent, index) => (
                    <>
                      {daysToEvent.nama ===
                      "Penerimaan Mahasiswa Baru Islamic Festival 2024" ? (
                        <>
                          <div
                            key={index}
                            className="cardList2"
                            style={{
                              width: "380px",
                              borderTopRightRadius: "0px",
                              borderBottomRightRadius: "0px",
                              padding: "10px",
                            }}
                          >
                            <h4 style={{ textAlign: "left", color: "#c04545" }}>
                              Days to Big Event
                            </h4>
                            <h3 style={{ fontSize: "11px", textAlign: "left" }}>
                              {daysToEvent.nama}
                            </h3>
                            <p style={{ fontSize: "11px", textAlign: "left" }}>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Animi ullam deserunt perferendis ipsam? Iure
                              accusamus voluptatum perspiciatis? Debitis
                              repudiandae, aperiam, nobis sunt laboriosam
                              consectetur fugit rerum earum fuga, quia alias.
                            </p>
                          </div>
                        </>
                      ) : null}
                    </>
                  ))}
                  <div
                    className="slideContainer"
                    style={{
                      width: "648px",
                      height: "128.5px",
                      borderTopRightRadius: "15px",
                      borderBottomRightRadius: "15px",
                      padding: "0px",
                      gap: "0px",
                      overflow: "hidden",
                      display: "flex",
                      position: "relative",
                    }}
                  >
                    {visibleSlides.map((slide, index) => (
                      <img
                        key={index}
                        src={images[slide.src]} // Use the image source from the slide
                        alt={`Slide ${index}`}
                        style={{
                          width: "215px",
                          height: "128.6px",
                        }} // Adjust size and spacing
                      />
                    ))}

                    {/* Navigation nodes */}
                    <div
                      style={{
                        padding: "5px",
                        borderRadius: "5px",
                        position: "absolute",
                        marginTop: "3px",
                        backgroundColor: "rgba(255, 255, 255, 0.150)",
                      }}
                    >
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        {slides
                          .slice(0, Math.ceil(slides.length / 3))
                          .map((_, index) => (
                            <div
                              key={index}
                              onClick={() => handleNodeClick(index)}
                              style={{
                                width: "10px",
                                height: "10px",
                                backgroundColor:
                                  currentIndex === index * 3
                                    ? "#c04545"
                                    : "lightgray",
                                borderRadius: "50%",
                                margin: "0 5px",
                                cursor: "pointer",
                              }}
                            />
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="cardList2"
                style={{
                  padding: "0px",
                  width: "270px",
                  height: "200px",
                  backgroundColor: "transparent",
                  border: "none",
                }}
              >
                <div
                  className="cardContainer"
                  style={{
                    width: "270px",
                    padding: "0px",
                  }}
                >
                  <div
                    className="cardList2"
                    style={{
                      width: "270px",
                      height: "37px",
                      padding: "0px",
                      border: "none",
                      alignContent: "center",
                    }}
                  >
                    <h3
                      style={{
                        color: "#c04545",
                      }}
                    >
                      CURRENTLY ACTIVE
                    </h3>
                  </div>
                  <div
                    className="cardList2"
                    style={{
                      width: "130px",
                      height: "153px",
                      padding: "0px",
                      paddingTop: "10px",
                      border: "none",
                    }}
                  >
                    <img
                      src={images["Al-Fath Logo"]}
                      alt=""
                      style={{ width: "110px", height: "auto" }}
                    />
                  </div>
                  <div
                    className="cardList2"
                    style={{
                      width: "130px",
                      height: "153px",
                      padding: "0px",
                      paddingTop: "7px",
                      border: "none",
                    }}
                  >
                    <img
                      src={images["Rinai Logo"]}
                      alt=""
                      style={{ width: "100px", height: "auto" }}
                    />
                  </div>
                </div>
              </div>
              <div
                className="cardList2"
                style={{
                  width: "230px",
                  height: "200px",
                  padding: "10px",
                }}
              >
                <div className="cardContainer" style={{ padding: "0px" }}>
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{
                      width: "210px",
                      height: "auto",
                      borderRadius: "15px",
                    }}
                  >
                    <source src={triDiVideoMp4} type="video/mp4" />
                    <source src={triDiVideoWebM} type="video/webm" />
                    Your browser does not support the video tag.
                  </video>
                  <a href="https://muhammadburhan235.github.io/portofolio-burhan/tridialfath">
                    <button
                      className="button1"
                      style={{
                        width: "210px",
                        padding: "9px",
                        backgroundColor: "#c04545",
                        color: "white",
                        fontSize: "12px",
                        textTransform: "unset",
                        borderRadius: "15px",
                      }}
                    >
                      <div
                        className="cardContainer"
                        style={{
                          gap: "0px",
                          fontWeight: "normal",
                        }}
                      >
                        <h4 style={{ width: "200px" }}>
                          <FontAwesomeIcon
                            icon={faGreaterThan}
                            style={{ animation: "blink 1s infinite" }}
                          />{" "}
                          Interaction Picture{" "}
                          <FontAwesomeIcon
                            icon={faLessThan}
                            style={{ animation: "blink 1s infinite" }}
                          />
                        </h4>
                        <div className="cardContainer">
                          <p>
                            Dekstop <FontAwesomeIcon icon={faCheck} />
                          </p>
                          <p>
                            Mobile <FontAwesomeIcon icon={faCheck} />
                          </p>
                        </div>
                      </div>
                    </button>
                  </a>
                </div>
              </div>
              <div
                className="cardList2"
                style={{ width: "230px", height: "200px", padding: "10px" }}
              >
                <div className="cardContainer" style={{ padding: "0px" }}>
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{
                      width: "210px",
                      height: "auto",
                      borderRadius: "15px",
                    }}
                  >
                    <source src={intPicVideoMp4} type="video/mp4" />
                    <source src={intPicVideoWebM} type="video/webm" />
                    Your browser does not support the video tag.
                  </video>
                  <a href="https://muhammadburhan235.github.io/portofolio-burhan/intpicalfath">
                    <button
                      className="button1"
                      style={{
                        width: "210px",
                        padding: "9px",
                        backgroundColor: "#c04545",
                        color: "white",
                        fontSize: "12px",
                        textTransform: "unset",
                        borderRadius: "15px",
                      }}
                    >
                      <div
                        className="cardContainer"
                        style={{
                          gap: "0px",
                          fontWeight: "normal",
                        }}
                      >
                        <h4 style={{ width: "200px" }}>
                          <FontAwesomeIcon
                            icon={faGreaterThan}
                            style={{ animation: "blink 1s infinite" }}
                          />{" "}
                          Interaction Picture{" "}
                          <FontAwesomeIcon
                            icon={faLessThan}
                            style={{ animation: "blink 1s infinite" }}
                          />
                        </h4>
                        <div className="cardContainer">
                          <p>
                            Dekstop <FontAwesomeIcon icon={faCheck} />
                          </p>
                          <p>
                            Mobile <FontAwesomeIcon icon={faClose} />
                          </p>
                        </div>
                      </div>
                    </button>
                  </a>
                </div>
              </div>
              <div
                className="cardList2"
                style={{
                  padding: "0px",
                  width: "270px",
                  height: "200px",
                  backgroundColor: "transparent",
                  border: "none",
                }}
              >
                <div
                  className="cardContainer"
                  style={{
                    width: "270px",
                    padding: "0px",
                  }}
                >
                  <div
                    className="cardList2"
                    style={{
                      width: "145px",
                      height: "95px",
                      padding: "0px",
                      border: "none",
                    }}
                  >
                    <div
                      className="cardContainer"
                      style={{
                        width: "145px",
                        padding: "0px",
                        paddingTop: "10px",
                      }}
                    >
                      <img
                        src={images["Telkom Logo"]}
                        alt=""
                        style={{ width: "56px", height: "auto" }}
                      />
                      <img
                        src={images["FSLDK Logo"]}
                        alt=""
                        style={{ width: "56px", height: "auto" }}
                      />
                    </div>
                  </div>
                  <div
                    className="cardList2"
                    style={{
                      width: "115px",
                      height: "95px",
                      padding: "0px",
                      border: "none",
                    }}
                  >
                    <div
                      className="cardContainer"
                      style={{
                        width: "115px",
                        padding: "0px",
                        paddingTop: "4.5px",
                      }}
                    >
                      <a href="https://youtube.com/@al-fathuniversitastelkom8769?si=VJqU37TKGnLIQdJe">
                        <img
                          src={images["YT Logo"]}
                          alt=""
                          style={{ width: "35px", height: "auto" }}
                        />
                      </a>
                      <a href="https://www.facebook.com/ALFATHUniversitasTelkom">
                        <img
                          src={images["FB Logo"]}
                          alt=""
                          style={{ width: "35px", height: "auto" }}
                        />
                      </a>
                      <a href="https://www.instagram.com/alfathtelu">
                        <img
                          src={images["IG Logo"]}
                          alt=""
                          style={{ width: "35px", height: "auto" }}
                        />
                      </a>
                      <a href="">
                        <img
                          src={images["LINE Logo"]}
                          alt=""
                          style={{ width: "35px", height: "auto" }}
                        />
                      </a>
                    </div>
                  </div>
                  <div
                    className="cardList2"
                    style={{
                      width: "270px",
                      height: "95px",
                      padding: "20px",
                      paddingTop: "19px",
                      border: "none",
                    }}
                  >
                    <h3 style={{ textAlign: "left", color: "#c04545" }}>
                      # Rangkai Cerita, Inspirasi untuk Semua
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const blinkStyle = document.createElement("style");
blinkStyle.innerHTML = `
  @keyframes blink {
    0% { opacity: 1; }
    50% { opacity: 0.5; }
    100% { opacity: 1; }
  }
`;
document.head.appendChild(blinkStyle);
