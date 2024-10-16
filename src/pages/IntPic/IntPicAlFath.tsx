import style from "./IntPicPage.module.css";
import { useFullscreen } from "../../utils/FullscreenUtils";
import { supabase } from "../../supabaseClient";
import { images } from "../../images";
import { useEffect, useState } from "react";
import { Modal } from "../../components/Modal/Modal";

interface IntPic {
  id: number;
  tipe: string;
  nama: string;
  w_win: string;
  h_win: string;
  w_ful: string;
  h_ful: string;
  bot_win: string;
  left_win: string;
  bot_ful: string;
  left_ful: string;
  keterangan: string;
}

interface DepPusat {
  id: number;
  nama: string;
}

interface Kab {
  id: number;
  nama: string;
}

export function IntPicAlFath() {
  const { isFullscreen, toggleFullscreen } = useFullscreen();
  const [intPics, setIntPics] = useState<IntPic[]>([]);
  const [selectedImage, setSelectedImage] = useState<{
    nama: string;
    keterangan: string;
  } | null>(null);
  const [selectedListPic, setselectedListPic] = useState<IntPic[] | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [depPusatInfoList, setDepPusatInfoList] = useState<DepPusat[]>([]);
  const [kabInfoList, setKabInfoList] = useState<Kab[]>([]);

  useEffect(() => {
    const fetchIntPic = async () => {
      const { data, error } = await supabase.from("intpic").select("*");
      if (error) {
        console.error(error);
      } else {
        setIntPics(data);
      }
    };

    fetchIntPic();
  }, []);

  useEffect(() => {
    const fetchDepPusatInfoList = async () => {
      const { data, error } = await supabase.from("deppusat_info").select("*");
      if (error) {
        console.error(error);
      } else {
        setDepPusatInfoList(data);
      }
    };

    fetchDepPusatInfoList();
  }, []);

  useEffect(() => {
    const fetchKabInfoList = async () => {
      const { data, error } = await supabase.from("kabinet_info").select("*");
      if (error) {
        console.error(error);
      } else {
        setKabInfoList(data);
      }
    };

    fetchKabInfoList();
  }, []);

  const handleImageClick = (nama: string, keterangan: string) => {
    setSelectedImage({ nama, keterangan });
    setselectedListPic(null);
    setShowModal(true);
  };

  const handleListModal = () => {
    setselectedListPic(intPics);
    setSelectedImage(null); // Set the concatenated string
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <div className="container">
      <div className={style.fullImageAlFath} style={{ overflow: "hidden" }}>
        {intPics
          .filter((intPic) => intPic.tipe === "ldkaf")
          .map((intPic, index) => (
            <div>
              <div
                key={index}
                className={style.smallImageContainer}
                style={{
                  bottom: isFullscreen
                    ? `${intPic.bot_ful}vw`
                    : `${intPic.bot_win}vw`,
                  left: isFullscreen
                    ? `${intPic.left_ful}vw`
                    : `${intPic.left_win}vw`,
                }}
                onClick={() => handleImageClick(intPic.nama, intPic.keterangan)}
              >
                <img
                  src={images[intPic.nama]}
                  alt={intPic.nama}
                  className={`${style.smallImage} ${style.blink}`}
                  style={{
                    width: isFullscreen
                      ? `${intPic.w_ful}vw`
                      : `${intPic.w_win}vw`,
                    height: isFullscreen
                      ? `${intPic.h_ful}vw`
                      : `${intPic.h_win}vw`,
                  }}
                />
              </div>
            </div>
          ))}
      </div>
      <Modal show={showModal} onClose={handleCloseModal}>
        {selectedImage ? (
          <>
            {selectedImage.nama === "Toa" ? (
              <>
                <div
                  className="cardContainer"
                  style={{
                    height: "35px",
                    padding: "0px",
                    marginTop: "-50px",
                  }}
                >
                  <h3 style={{ color: "white" }}>{selectedImage.keterangan}</h3>
                </div>
                <div
                  className="cardContainer"
                  style={{
                    padding: "0px",
                  }}
                >
                  {kabInfoList
                    .sort((a, b) => a.id - b.id)
                    .map((kabInfo, index) => (
                      <div
                        key={index}
                        className="cardList2"
                        style={{ width: "260px", padding: "15px" }}
                      >
                        <div
                          className="cardContainer"
                          style={{
                            height: "60px",
                            padding: "0px",
                            alignContent: "center",
                            paddingBottom: "10px",
                          }}
                        >
                          <h3>{kabInfo.nama}</h3>
                        </div>
                        <div
                          className="cardContainer"
                          style={{
                            height: "200px",
                            padding: "0px",
                            paddingBottom: "10px",
                          }}
                        >
                          <img src={images[kabInfo.nama]} alt="" />
                        </div>
                        <div
                          className="cardContainer"
                          style={{
                            height: "100px",
                            padding: "0px",
                            paddingBottom: "10px",
                          }}
                        >
                          <p className="cardDescription">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Tempora deleniti provident cumque doloribus
                            inventore, animi perspiciatis non quidem obcaecati
                            maiores deserunt odit sunt rerum aut tenetur
                            voluptatum a sequi minus!
                          </p>
                        </div>
                        <p style={{ textAlign: "right" }}>
                          <a href="">Detail</a>
                        </p>
                      </div>
                    ))}
                </div>
              </>
            ) : selectedImage.nama === "Kursi Meja" ? (
              <>
                <div
                  className="cardContainer"
                  style={{
                    height: "35px",
                    padding: "0px",
                    marginTop: "-50px",
                  }}
                >
                  <h3 style={{ color: "white" }}>{selectedImage.keterangan}</h3>
                </div>
                <div
                  className="cardContainer"
                  style={{
                    padding: "0px",
                  }}
                >
                  {depPusatInfoList
                    .sort((a, b) => a.id - b.id)
                    .map((depPusatInfo, index) => (
                      <div
                        key={index}
                        className="cardList2"
                        style={{ width: "260px", padding: "20px" }}
                      >
                        <div
                          className="cardContainer"
                          style={{
                            height: "60px",
                            padding: "0px",
                            alignContent: "center",
                            paddingBottom: "10px",
                          }}
                        >
                          <h3>{depPusatInfo.nama}</h3>
                        </div>
                        <div
                          className="cardContainer"
                          style={{
                            height: "200px",
                            padding: "0px",
                            paddingBottom: "10px",
                          }}
                        >
                          <img src={images[depPusatInfo.nama]} alt="" />
                        </div>
                        <div
                          className="cardContainer"
                          style={{
                            height: "100px",
                            padding: "0px",
                            paddingBottom: "10px",
                          }}
                        >
                          <p className="cardDescription">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Tempora deleniti provident cumque doloribus
                            inventore, animi perspiciatis non quidem obcaecati
                            maiores deserunt odit sunt rerum aut tenetur
                            voluptatum a sequi minus!
                          </p>
                        </div>
                        <p style={{ textAlign: "right" }}>
                          <a href="">Detail</a>
                        </p>
                      </div>
                    ))}
                </div>
              </>
            ) : null}
          </>
        ) : (
          selectedListPic && (
            <>
              <div
                className="cardContainer"
                style={{
                  height: "35px",
                  padding: "0px",
                  marginTop: "-50px",
                }}
              >
                <h3 style={{ color: "white" }}>Ada apa aja sih...</h3>
              </div>
              <div
                className="cardContainer"
                style={{
                  padding: "0px",
                }}
              >
                {selectedListPic
                  .sort((a, b) => a.id - b.id)
                  .filter((pic) => pic.tipe === "ldkaf")
                  .map((pic, index) => (
                    <div
                      key={index}
                      className="cardList2"
                      style={{ width: "260px", padding: "20px" }}
                    >
                      <div
                        className="cardContainer"
                        style={{
                          height: "60px",
                          padding: "0px",
                          alignContent: "center",
                          paddingBottom: "10px",
                        }}
                      >
                        <h3>{pic.keterangan}</h3>
                      </div>
                      <div
                        className="cardContainer"
                        style={{
                          height: "200px",
                          padding: "0px",
                          paddingBottom: "10px",
                        }}
                      >
                        <img src={images[pic.nama]} alt="" />
                      </div>
                    </div>
                  ))}
              </div>
            </>
          )
        )}
      </Modal>
      <div
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <button
          className={style.button1}
          onClick={handleListModal}
          style={{
            width: "9vw",
            position: "absolute",
            top: "1vw",
            right: "11vw",
            padding: "10px",
            cursor: "pointer",
            color: "white",
            borderRadius: "5px",
            fontSize: "1vw",
          }}
        >
          Lihat
        </button>
        <button
          className={style.button1}
          onClick={toggleFullscreen}
          style={{
            width: "9vw",
            position: "absolute",
            top: "1vw",
            right: "1vw",
            padding: "10px",
            cursor: "pointer",
            color: "white",
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
