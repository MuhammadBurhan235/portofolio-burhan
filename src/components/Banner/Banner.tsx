import { Slider } from "../Slider/Slider";
import style from "./Banner.module.css";

interface BannerProps {
  banners: { id: string; nama: string }[];
}

export function Banner({ banners }: BannerProps) {
  return (
    <div className={style.banner}>
      <Slider sliders={banners} />
    </div>
  );
}
