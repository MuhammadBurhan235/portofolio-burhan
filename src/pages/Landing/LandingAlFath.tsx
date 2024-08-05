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

export function LandingAlFath() {
  return (
    <div>
      <div className="area">
        <div
          className="kontenArea"
          style={{ padding: "0px", height: "auto", border: "none" }}
        >
          <div
            className="cardContainer"
            style={{
              marginLeft: "-745px",
              padding: "0px",
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
            className="kontenArea"
            style={{
              top: "100%",
              height: "auto",
              backgroundColor: "rgba(255, 255, 255, 0.179)",
            }}
          >
            <div className="cardContainer" style={{ padding: "30px" }}>
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
                  <div
                    className="cardList2"
                    style={{
                      width: "210px",
                      padding: "6.5px",
                      backgroundColor: "#c04545",
                      color: "white",
                      fontSize: "12px",
                    }}
                  >
                    <div
                      className="cardContainer"
                      style={{
                        gap: "0px",
                      }}
                    >
                      <h4 style={{ width: "200px" }}>
                        <FontAwesomeIcon icon={faGreaterThan} /> Interaction
                        Picture <FontAwesomeIcon icon={faLessThan} />
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
                  </div>
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
                  <div
                    className="cardList2"
                    style={{
                      width: "210px",
                      padding: "6.5px",
                      backgroundColor: "#c04545",
                      color: "white",
                      fontSize: "12px",
                    }}
                  >
                    <div
                      className="cardContainer"
                      style={{
                        gap: "0px",
                      }}
                    >
                      <h4 style={{ width: "200px" }}>
                        <FontAwesomeIcon icon={faGreaterThan} /> Interaction
                        Picture <FontAwesomeIcon icon={faLessThan} />
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
                        paddingTop: "6.5px",
                      }}
                    >
                      <img
                        src={images["YT Logo"]}
                        alt=""
                        style={{ width: "35px", height: "auto" }}
                      />
                      <img
                        src={images["FB Logo"]}
                        alt=""
                        style={{ width: "35px", height: "auto" }}
                      />
                      <img
                        src={images["IG Logo"]}
                        alt=""
                        style={{ width: "35px", height: "auto" }}
                      />
                      <img
                        src={images["LINE Logo"]}
                        alt=""
                        style={{ width: "35px", height: "auto" }}
                      />
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
                  <div
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
                      Penerimaan Mahasiswa Baru Islamic Festival - 28 Agustus
                      2024
                    </h3>
                    <p style={{ fontSize: "11px", textAlign: "left" }}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Animi ullam deserunt perferendis ipsam? Iure accusamus
                      voluptatum perspiciatis? Debitis repudiandae, aperiam,
                      nobis sunt laboriosam consectetur fugit rerum earum fuga,
                      quia alias.
                    </p>
                  </div>
                  <div
                    className="cardContainer"
                    style={{
                      width: "650px",
                      borderTopLeftRadius: "0px",
                      borderBottomLeftRadius: "0px",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
