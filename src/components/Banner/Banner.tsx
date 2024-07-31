import { Slider } from "../Slider/Slider";
import style from "./Banner.module.css";

interface BannerProps {
  banners: { id: string; nama: string }[];
  konten: string;
  kontenh1: string;
}

export function Banner({ banners, konten, kontenh1 }: BannerProps) {
  return (
    <div className={style.banner}>
      <Slider sliders={banners} />
      <div className={style.content}>
        <h1 data-content={konten} className={style.contenth1}>
          {kontenh1}
        </h1>
      </div>
    </div>
  );
}
