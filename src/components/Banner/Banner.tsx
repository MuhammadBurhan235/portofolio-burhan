import { Slider } from "../Slider/Slider";
import style from "./Banner.module.css";

interface BannerProps {
  banners: { id: string; nama: string }[];
  konten1: string;
  konten2: string;
}

export function Banner({ banners, konten1, konten2 }: BannerProps) {
  return (
    <div className={style.banner}>
      <Slider sliders={banners} konten={konten2 + " " + konten1} />
      <div className={style.content}>
        <h1 data-content={konten1} className={style.contenth1}>
          {konten2}
        </h1>
      </div>
    </div>
  );
}
