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

interface IntPicData {
  id: number;
  tipe: string;
  nama: string;
  dekripsi: string;
  periode: string;
  link: string;
  jenis: string;
  lokasi: string;
  width: string;
  height: string;
  list_gambar: string;
  keterangan: string;
}

export function IntPic() {
  const { isFullscreen, toggleFullscreen } = useFullscreen();
  const [intPics, setIntPics] = useState<IntPic[]>([]);
  const [intPicDatas, setIntPicDatas] = useState<IntPicData[]>([]);
  const [selectedImage, setSelectedImage] = useState<{
    nama: string;
    keterangan: string;
  } | null>(null);
  const [selectedListPic, setselectedListPic] = useState<IntPic[] | null>(null);
  const [showModal, setShowModal] = useState(false);

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
    const fetchIntPicData = async () => {
      const { data, error } = await supabase.from("intpic_data").select("*");
      if (error) {
        console.error(error);
      } else {
        setIntPicDatas(data);
      }
    };

    fetchIntPicData();
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

  // const processImages = (list_gambar: string): string[] => {
  //   const result = [];
  //   for (let i = 0; i < list_gambar.length; i += 4) {
  //     result.push(list_gambar.slice(i, i + 4));
  //   }
  //   return result;
  // };
  const processImages = (list_gambar: string): string[] => {
    if (!list_gambar) {
      return [];
    }
    return list_gambar.split(";");
  };
  const processLogos = (keterangan: string): string[] => {
    if (!keterangan) {
      return [];
    }
    return keterangan.split(";");
  };

  return (
    <div>
      <div className={style.fullImage}>
        <div
          className="triangleDown"
          style={{
            position: "relative",
            top: isFullscreen ? "7vw" : "2.5vw",
          }}
        ></div>
        {intPics.map((intPic, index) => (
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
          <div>
            {selectedImage.nama === "TV PB" ? (
              <>
                <h3 style={{ color: "white" }}>{selectedImage.keterangan}</h3>
                <div className="cardContainer">
                  {intPicDatas
                    .sort((a, b) => a.id - b.id)
                    .filter(
                      (intPicData) => intPicData.tipe === selectedImage.nama
                    )
                    .map((intPicData, index) => (
                      <div
                        key={index}
                        className="cardList2"
                        style={{
                          width: `${intPicData.width}px`,
                          height: `${intPicData.height}px`,
                        }}
                      >
                        <h3>{intPicData.nama}</h3>
                        <p style={{ paddingBottom: "20px" }}>
                          {intPicData.periode} {" | "} {intPicData.jenis}
                        </p>
                        <div className="listGambarContainer">
                          {processImages(intPicData.list_gambar).map(
                            (imgSrc, idx) => (
                              <img
                                key={idx}
                                className="smallGambar"
                                src={images[imgSrc]}
                                alt={`Image ${idx}`}
                                style={{
                                  width:
                                    imgSrc === "elo1" ||
                                    imgSrc === "elo2" ||
                                    imgSrc === "elo3"
                                      ? "130px"
                                      : "200px",
                                  height:
                                    imgSrc === "elo1" ||
                                    imgSrc === "elo2" ||
                                    imgSrc === "elo3"
                                      ? "250px"
                                      : "115px",
                                }}
                              />
                            )
                          )}
                        </div>
                        <p className="cardDescription">{intPicData.dekripsi}</p>
                        <div
                          style={{
                            display: "flex",
                            gap: "5px",
                          }}
                        >
                          <h4>Go to:</h4>
                          <a href={intPicData.link}>
                            {[
                              "LMS Developer (BE < FE)",
                              "Kenal Al-Fath Web Dev (Fullstack)",
                            ].includes(intPicData.nama)
                              ? "Website"
                              : [
                                  "TVent Web Dev (BE = FE)",
                                  "E-Lon Mobile App Dev (BE = FE)",
                                ].includes(intPicData.nama)
                              ? "GitHub"
                              : "Website"}
                          </a>
                          <div className="listLogoContainer">
                            {processLogos(intPicData.keterangan).map(
                              (logoSrc, idx) => (
                                <img
                                  key={idx}
                                  className="smallLogo"
                                  src={images[logoSrc]}
                                  alt={`Logo ${idx}`}
                                />
                              )
                            )}
                          </div>
                        </div>
                        <a className="detail" href="">
                          Detail
                        </a>
                      </div>
                    ))}
                </div>
              </>
            ) : selectedImage.nama === "Files" ? (
              <>
                <h3 style={{ color: "white" }}>{selectedImage.keterangan}</h3>
                <div className="cardContainer">
                  {intPicDatas
                    .sort((a, b) => a.id - b.id)
                    .filter(
                      (intPicData) => intPicData.tipe === selectedImage.nama
                    )
                    .map((intPicData, index) => (
                      <div
                        key={index}
                        className="cardList2"
                        style={{
                          width: `${intPicData.width}px`,
                          height: `${intPicData.height}px`,
                        }}
                      >
                        <h3>{intPicData.nama}</h3>
                        <p style={{ paddingBottom: "20px" }}>
                          {intPicData.periode} {" | "} {intPicData.keterangan}
                        </p>
                        <a href={intPicData.link}>Lihat</a>
                      </div>
                    ))}
                </div>
              </>
            ) : null}
          </div>
        ) : (
          selectedListPic && (
            <>
              <h3>Ada apa aja sih...</h3>
              <div className="cardContainer">
                {selectedListPic
                  .sort((a, b) => a.id - b.id)
                  .map((pic, index) => (
                    <div
                      key={index}
                      className="cardList2"
                      style={{
                        width: "350px",
                        height: "300px",
                      }}
                    >
                      <h3 style={{ paddingBottom: "20px" }}>
                        {pic.keterangan}
                      </h3>
                      <img
                        style={{
                          position: "relative",
                          width: "170px",
                          height: "132px",
                        }}
                        src={images[pic.nama]}
                        alt=""
                      />
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
          onClick={handleListModal}
          style={{
            width: "9vw",
            height: "3vw",
            position: "absolute",
            top: "1vw",
            right: "11vw",
            padding: "10px 20px",
            cursor: "pointer",
            background: "blue",
            color: "white",
            border: "none",
            borderRadius: "5px",
            fontSize: "1vw",
          }}
        >
          Lihat
        </button>
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
