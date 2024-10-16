import { useEffect, useState, useRef } from "react";
import { supabase } from "../../supabaseClient";
import { Banner } from "../../components/Banner/Banner";
import styleS from "../../components/Slider/Slider.module.css";
import "../../App.css";

interface Porto {
  id: number;
  nama: string;
  dekripsi: string;
  periode: string;
  link: string;
  jenis: string;
  lokasi: string;
  tipe: string;
  width: string;
  height: string;
  list_gambar: string;
  keterangan: string;
  keterangan2: string;
}

export function TriDIPorto() {
  const [porto, setPorto] = useState<Porto[]>([]);

  useEffect(() => {
    const fetchPorto = async () => {
      const { data, error } = await supabase.from("intpic_data").select("*");
      if (error) {
        console.error(error);
      } else {
        setPorto(data);
      }
    };

    fetchPorto();
  }, []);

  const newAreaRef = useRef<HTMLDivElement>(null);
  const iDevelopRef = useRef<HTMLDivElement>(null);
  const supFilespRef = useRef<HTMLDivElement>(null);

  const scrollToNewArea = () => {
    newAreaRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToIDevelop = () => {
    iDevelopRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToSupFiles = () => {
    supFilespRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="container">
      <div ref={newAreaRef}>
        <div className="area">
          <div className="kontenArea">
            <div className="cardContainer">
              <div className="cardList2"></div>
            </div>
          </div>
        </div>
      </div>
      <div ref={iDevelopRef}>
        <Banner
          banners={porto.filter((item) => item.keterangan2 === "Software")}
          konten1="Developed"
          konten2="Software that I"
        />
      </div>
      <div ref={supFilespRef}>
        <Banner
          banners={porto.filter((item) => item.keterangan2 === "File")}
          konten1="Files"
          konten2="Support"
        />
      </div>
      <div className="blur"></div>
      <div className={styleS.navigasi2}>
        <button onClick={scrollToNewArea}>New Area</button>
        <button onClick={scrollToIDevelop}>Software Developed</button>
        <button onClick={scrollToSupFiles}>Support Files</button>
      </div>
    </div>
  );
}
