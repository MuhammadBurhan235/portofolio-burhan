import { useEffect, useState, useRef } from "react";
import { supabase } from "../supabaseClient";

interface Deppusat {
  id: string;
  nama: string;
}

interface Kab {
  id: string;
  nama: string;
}

export function Home() {
  const [depPusatInfoList, setDepPusatInfoList] = useState<Deppusat[]>([]);
  const [kabInfoList, setKabInfoList] = useState<Kab[]>([]);

  useEffect(() => {
    const fetchDepPusatInfoList = async () => {
      const { data, error } = await supabase.from("deppusat_info").select("*");
      if (error) {
        console.error(error);
      } else {
        setDepPusatInfoList(data || []);
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
        setKabInfoList(data || []);
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
      <button onClick={scrollToDepPusat}>Scroll to Dep Pusat</button>
      <button onClick={scrollToKabInfo}>Scroll to Kab Info</button>
      <button onClick={scrollNewArea}>Scroll to New Area</button>

      <div ref={depPusatRef}>
        <h2>Dep Pusat Info</h2>
        <ul>
          {depPusatInfoList.map((dep) => (
            <li key={dep.id}>{dep.nama}</li>
          ))}
        </ul>
      </div>

      <div ref={kabInfoRef}>
        <h2>Kab Info</h2>
        <ul>
          {kabInfoList.map((kab) => (
            <li key={kab.id}>{kab.nama}</li>
          ))}
        </ul>
      </div>

      <div ref={newAreaRef}>
        <h2>New Area</h2>
        <p>This is the new area you can scroll to.</p>
      </div>
    </div>
  );
}
