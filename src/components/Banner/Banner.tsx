import { Slider } from "../Slider/Slider";
import style from "./Banner.module.css";

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

interface BannerProps {
  banners: (DepPusat | Kab | IntPicData)[];
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
