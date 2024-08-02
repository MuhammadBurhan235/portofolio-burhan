import { useState } from "react";
import { ModalTriDi } from "../Modal/ModalTriDi";
import style from "./Slider.module.css";
import { images } from "../../images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay, faList } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

interface DepPusat {
  id: number;
  nama: string;
}

interface Kab {
  id: number;
  nama: string;
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

interface SliderProps {
  sliders: (DepPusat | Kab | IntPicData)[];
  konten: string;
}

export function Slider({ sliders, konten }: SliderProps) {
  const [isPaused, setIsPaused] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [selectedCard, setSelectedCard] = useState<
    DepPusat | Kab | IntPicData | null
  >(null);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const toggleAnimation = () => {
    setIsPaused(!isPaused);
  };

  const handleItemClick = (data: string) => {
    setSelectedItem(data);
    setSelectedCard(null); // Ensure only one type of content is selected
    setShowModal(true);
  };

  const goToListItemPage = () => {
    navigate("/portofolio-burhan/list", { state: { items: sliders, konten } });
  };

  const handleCardClick = (data: DepPusat | Kab | IntPicData) => {
    setSelectedCard(data);
    setSelectedItem(null); // Ensure only one type of content is selected
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

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
      <div
        className={style.slider}
        style={
          {
            "--quantity": sliders.length,
            animationPlayState: isPaused ? "paused" : "running",
          } as React.CSSProperties
        } // Ensuring CSS properties type safety
        data-quantity={sliders.length}
      >
        {sliders
          .sort((a, b) => a.id - b.id)
          .map((slider, index) => (
            <>
              {"list_gambar" in slider ? (
                <div
                  key={index}
                  className={style.item}
                  style={
                    {
                      "--position": index + 1,
                      paddingTop: "50px",
                    } as React.CSSProperties
                  }
                  data-position={index + 1}
                >
                  <div
                    className={style.card}
                    style={{
                      right: "-25px",
                      borderRadius: "7px",
                      borderTopLeftRadius: "0px",
                      borderBottomLeftRadius: "0px",
                      borderLeft: "none",
                      width: "225px",
                      overflow: "none",
                    }}
                  >
                    <div className="listGambarContainer">
                      {processImages(slider.list_gambar).map((imgSrc, idx) => (
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
                                ? "60px"
                                : "95px",
                            height:
                              imgSrc === "elo1" ||
                              imgSrc === "elo2" ||
                              imgSrc === "elo3"
                                ? "130px"
                                : "60px",
                          }}
                        />
                      ))}
                    </div>
                    <div className="listLogoContainer">
                      {processLogos(slider.keterangan).map((logoSrc, idx) => (
                        <img
                          key={idx}
                          className="smallLogo"
                          style={{ width: "25px", height: "25px" }}
                          src={images[logoSrc]}
                          alt={`Logo ${idx}`}
                        />
                      ))}
                    </div>
                  </div>
                  <div
                    className={style.card}
                    style={{ zIndex: "-1", borderRight: "none" }}
                    onClick={() => handleCardClick(slider)}
                  >
                    <div className={style.cardTitle}>{slider.nama}</div>
                    <div className={style.cardBody}>{slider.dekripsi}</div>
                    <div className={style.cardFooter}></div>
                  </div>
                </div>
              ) : (
                <div
                  key={index}
                  className={style.item}
                  style={{ "--position": index + 1 } as React.CSSProperties}
                  data-position={index + 1}
                >
                  <img
                    className={style.img}
                    src={images[slider.nama]}
                    onClick={() => handleItemClick(images[slider.nama])}
                    alt={slider.nama}
                  />
                  <div
                    className={style.card}
                    onClick={() => handleCardClick(slider)}
                  >
                    <div className={style.cardTitle}>{slider.nama}</div>
                    <div className={style.cardBody}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ex suscipit fuga perferendis dolor cumque tempora
                      doloremque, odit sit asperiores nisi excepturi molestias!
                      Blanditiis dicta sequi omnis unde voluptatum porro
                      similique.
                    </div>
                    <div className={style.cardFooter}></div>
                  </div>
                </div>
              )}
            </>
          ))}
      </div>
      <ModalTriDi show={showModal} onClose={handleCloseModal}>
        {selectedItem ? (
          <img className={style.modalImage} src={selectedItem} alt="Selected" />
        ) : selectedCard ? (
          <>
            <h2 className={style.modalTitle}>{selectedCard.nama}</h2>
            <p className={style.modalBody}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor,
              qui. Aliquid sit optio, officia dolores ipsa deserunt, iusto
              minima ratione, quam doloremque sapiente numquam ut nisi ab quos
              deleniti accusamus.
            </p>
          </>
        ) : null}
      </ModalTriDi>
      <div className={style.navigasi1}>
        <button onClick={toggleAnimation}>
          <FontAwesomeIcon icon={isPaused ? faPlay : faPause} />
        </button>
        <button onClick={goToListItemPage}>
          <FontAwesomeIcon icon={faList} />
        </button>
      </div>
    </div>
  );
}
