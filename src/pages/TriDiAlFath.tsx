import { useEffect, useState, useRef } from "react";
import { supabase } from "../supabaseClient";
import { Banner } from "../components/Banner/Banner";
import styleS from "../components/Slider/Slider.module.css";
import "../App.css";

interface DepPusat {
  id: number;
  nama: string;
}

interface Kab {
  id: number;
  nama: string;
}

export default function TriDiAlFath() {
  const [depPusatInfoList, setDepPusatInfoList] = useState<DepPusat[]>([]);
  const [kabInfoList, setKabInfoList] = useState<Kab[]>([]);

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

  const depPusatRef = useRef<HTMLDivElement>(null);
  const kabInfoRef = useRef<HTMLDivElement>(null);
  const newAreaRef = useRef<HTMLDivElement>(null);

  const scrollToDepPusat = () => {
    depPusatRef.current?.scrollIntoView({ behavior: "smooth" });
    // setTimeout(() => {
    //   navigate("/list", { state: { items: depPusatInfoList } });
    // }, 500);
  };

  const scrollToKabInfo = () => {
    kabInfoRef.current?.scrollIntoView({ behavior: "smooth" });
    // setTimeout(() => {
    //   navigate("/list", { state: { items: kabInfoList } });
    // }, 500);
  };

  const scrollToNewArea = () => {
    newAreaRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <div ref={newAreaRef}>
        <div className="area">
          <div className="kontenArea">
            <div className="cardContainer">
              <div className="cardList2"></div>
              <div className="cardList2"></div>
            </div>
          </div>
        </div>
      </div>
      <div ref={depPusatRef}>
        <Banner
          banners={depPusatInfoList}
          konten1="PUSAT"
          konten2="DEPARTEMEN"
        />
      </div>
      <div ref={kabInfoRef}>
        <Banner banners={kabInfoList} konten1="INFO" konten2="KABINET" />
      </div>
      <div className="blur"></div>
      <div className={styleS.navigasi2}>
        <button onClick={scrollToNewArea}>Ahlan Wa Sahlan</button>
        <button onClick={scrollToDepPusat}>Dept. Pusat Info</button>
        <button onClick={scrollToKabInfo}>Kabinet Info </button>
      </div>
    </div>
  );
}
