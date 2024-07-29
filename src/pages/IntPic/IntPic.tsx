import style from "./IntPicPage.module.css";
import { useFullscreen } from "../../utils/FullscreenUtils";
import { supabase } from "../../supabaseClient";
import { images } from "../../images";
import { useEffect, useState } from "react";

interface IntPic {
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
}

export function IntPic() {
  const { isFullscreen, toggleFullscreen } = useFullscreen();
  const [intPics, setIntPics] = useState<IntPic[]>([]);

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

  return (
    <div>
      <div className={style.fullImage}></div>
      {intPics.map((intPic, index) => (
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
        >
          <img
            src={images[intPic.nama]}
            alt={intPic.nama}
            className={`${style.smallImage} ${style.blink}`}
            data-popup="mobil"
            style={{
              width: isFullscreen ? `${intPic.w_ful}vw` : `${intPic.w_win}vw`,
              height: isFullscreen ? `${intPic.h_ful}vw` : `${intPic.h_win}vw`,
            }}
          />
        </div>
      ))}
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
