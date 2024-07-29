import style from "./IntPicPage.module.css";
import { useFullscreen } from "../../utils/FullscreenUtils";
import { images } from "../../images";

export function CheckPosi() {
  const { isFullscreen, toggleFullscreen } = useFullscreen();
  return (
    <div>
      <div className={style.fullImage}></div>
      <div
        className={style.smallImageContainer}
        style={{
          bottom: isFullscreen ? "20vw" : "15.3vw",
          left: isFullscreen ? "11vw" : "11vw",
        }}
      >
        <img
          src={images["TV PB"]}
          alt="Small Image 1"
          className={`${style.smallImage} ${style.blink}`}
          data-popup="mobil"
          style={{
            width: isFullscreen ? "32vw" : "31.5vw",
            height: isFullscreen ? "25vw" : "24.6vw",
          }}
        />
      </div>
      <div
        className={style.smallImageContainer}
        style={{
          bottom: isFullscreen ? "3.4vw" : "-1.3vw",
          left: isFullscreen ? "0.2vw" : "0vw",
        }}
      >
        <img
          src={images["Laptop PB"]}
          alt="Small Image 1"
          className={`${style.smallImage} ${style.blink}`}
          data-popup="mobil"
          style={{ width: "21.5vw", height: "24vw" }}
        />
      </div>

      {/* {popup === "mobil" && (
        <Popup
          id="mobil"
          onClose={handleClosePopup}
          backgroundColor="transparent"
        >
          <div className="card-container">
            {[woman, man, woman, man, woman, man, woman, man, woman].map(
              (image, index) => (
                <div className="card" key={index}>
                  <img
                    src={image}
                    style={{ width: "30%" }}
                    alt={`Image ${index + 1}`}
                  />
                </div>
              )
            )}
          </div>
        </Popup>
      )}
      {popup === "restoran" && (
        <Popup id="restoran" onClose={handleClosePopup}>
          <Slideshow images={[slide1, slide2, slide3]} />
        </Popup>
      )} */}
      <div
        style={{
          background: isFullscreen ? "black" : "white",
          color: isFullscreen ? "white" : "black",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <button
          onClick={toggleFullscreen}
          style={{
            width: "9vw",
            height: "3vw",
            position: "absolute",
            top: "1vw",
            right: "1vw",
            padding: "10px 20px",
            cursor: "pointer",
            background: "blue",
            color: "white",
            border: "none",
            borderRadius: "5px",
            fontSize: "1vw",
          }}
        >
          {isFullscreen ? "Window" : "Fullscreen"}
        </button>
      </div>
    </div>
  );
}
