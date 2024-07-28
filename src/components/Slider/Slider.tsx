import { useState } from "react";
import { Modal } from "../Modal/Modal";
import style from "./Slider.module.css";
import { images } from "../../images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";

interface SliderProps {
  sliders: { id: string; nama: string }[];
}

interface BannerItem {
  id: string;
  nama: string;
}

export function Slider({ sliders }: SliderProps) {
  const [isPaused, setIsPaused] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [selectedCard, setSelectedCard] = useState<BannerItem | null>(null);
  const [showModal, setShowModal] = useState(false);

  const toggleAnimation = () => {
    setIsPaused(!isPaused);
  };

  const handleItemClick = (data: string) => {
    setSelectedItem(data);
    setSelectedCard(null); // Ensure only one type of content is selected
    setShowModal(true);
  };

  const handleCardClick = (data: BannerItem) => {
    setSelectedCard(data);
    setSelectedItem(null); // Ensure only one type of content is selected
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
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
        {sliders.map((slider, index) => (
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
            <div className={style.card} onClick={() => handleCardClick(slider)}>
              <div className={style.cardTitle}>{slider.nama}</div>
              <div className={style.cardBody}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                suscipit fuga perferendis dolor cumque tempora doloremque, odit
                sit asperiores nisi excepturi molestias! Blanditiis dicta sequi
                omnis unde voluptatum porro similique.
              </div>
              <div className={style.cardFooter}></div>
            </div>
          </div>
        ))}
      </div>
      <Modal show={showModal} onClose={handleCloseModal}>
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
      </Modal>
      <div className={style.navigasi1}>
        <button onClick={toggleAnimation}>
          <FontAwesomeIcon icon={isPaused ? faPlay : faPause} />
        </button>
        {/* <button onClick={}>
          <FontAwesomeIcon icon={faList} />
        </button> */}
      </div>
    </div>
  );
}
