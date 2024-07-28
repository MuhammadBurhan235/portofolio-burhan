import { useEffect, useState, useRef } from "react";
import { supabase } from "../supabaseClient";
import { Banner } from "../components/Banner/Banner";
import styleS from "../components/Slider/Slider.module.css";
import "../App.css";

interface DepPusat {
  id: string;
  nama: string;
}

interface Kab {
  id: string;
  nama: string;
}

export function Home() {
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

  const scrollNewArea = () => {
    newAreaRef.current?.scrollIntoView({ behavior: "smooth" });
    // setTimeout(() => {
    //   navigate("/list", { state: { items: kabInfoList } });
    // }, 500);
  };

  return (
    <div>
      <div ref={newAreaRef}>
        <div className="area">
          <div className="kontenArea">aaa</div>
        </div>
      </div>
      <div ref={depPusatRef}>
        <Banner banners={depPusatInfoList} />
      </div>
      <div ref={kabInfoRef}>
        <Banner banners={kabInfoList} />
      </div>
      <div className="blur"></div>
      <div className={styleS.navigasi2}>
        <button onClick={scrollNewArea}>New Area</button>
        <button onClick={scrollToDepPusat}>Dep Pusat Banner</button>
        <button onClick={scrollToKabInfo}>Kabinet Info Banner</button>
      </div>
    </div>
  );
}
