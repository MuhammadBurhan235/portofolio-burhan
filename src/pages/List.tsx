import { useLocation, useNavigate } from "react-router-dom";
import "../App.css";
import { images } from "../images";

interface PortoItem {
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
  keterangan2: string;
}

interface AlFathItem {
  id: number;
  nama: string;
}

export function List() {
  const location = useLocation();
  const navigate = useNavigate();
  const { items, konten } =
    (location.state as { items: PortoItem[] | AlFathItem[]; konten: string }) ||
    {};

  if (!items || items.length === 0) {
    return <div className="area">No data available</div>;
  }

  const handleBackClick = () => {
    navigate(-1); // Navigasi kembali ke halaman sebelumnya
  };

  const processImages = (list_gambar: string): string[] => {
    if (!list_gambar) {
      return [];
    }
    return list_gambar.split(";");
  };

  const processLogos = (keterangan: string): string[] => {
    if (!keterangan) {
      return [];
    }
    return keterangan.split(";");
  };

  return (
    <div className="area">
      <div className="kontenArea2" style={{ paddingTop: "70px" }}>
        <button
          onClick={handleBackClick}
          className="backButton"
          style={{
            position: "absolute",
            marginTop: "-53px",
            marginLeft: "-999px",
          }}
        >
          &lt; Kembali
        </button>
        <h3 style={{ position: "absolute", marginTop: "-45px" }}>{konten}</h3>
        {items.map((item, index) => (
          <>
            {"list_gambar" in item ? (
              <>
                {item.keterangan2 === "Software" ? (
                  <>
                    <div
                      key={index}
                      className="cardList1"
                      style={{ width: "540px" }}
                      // style={{ width: datas.length === 2 ? "550px" : "270px" }}
                    >
                      <h3 style={{ paddingBottom: "10px", fontSize: "20px" }}>
                        {item.nama}
                      </h3>
                      {item.periode} {" | "} {item.jenis}
                      <div
                        className="listGambarContainer"
                        style={{ paddingTop: "20px" }}
                      >
                        {processImages(item.list_gambar).map((imgSrc, idx) => (
                          <img
                            key={idx}
                            className="smallGambar"
                            src={images[imgSrc]}
                            alt={`Image ${idx}`}
                            style={{
                              width:
                                imgSrc === "elo1" ||
                                imgSrc === "elo2" ||
                                imgSrc === "elo3"
                                  ? "130px"
                                  : "200px",
                              height:
                                imgSrc === "elo1" ||
                                imgSrc === "elo2" ||
                                imgSrc === "elo3"
                                  ? "250px"
                                  : "115px",
                            }}
                          />
                        ))}
                      </div>
                      <p
                        className="cardDescription"
                        style={{ fontWeight: "normal", textAlign: "left" }}
                      >
                        {item.dekripsi}
                      </p>
                      <div
                        style={{
                          display: "flex",
                          gap: "5px",
                        }}
                      >
                        <h4>Go to:</h4>
                        <a href={item.link}>
                          {[
                            "LMS Developer (BE < FE)",
                            "Kenal Al-Fath Web Dev (Fullstack)",
                          ].includes(item.nama)
                            ? "Website"
                            : [
                                "TVent Web Dev (BE = FE)",
                                "E-Lon Mobile App Dev (BE = FE)",
                              ].includes(item.nama)
                            ? "GitHub"
                            : "Website"}
                        </a>
                        <div
                          className="listLogoContainer"
                          style={{ marginLeft: "10%" }}
                        >
                          {processLogos(item.keterangan).map((logoSrc, idx) => (
                            <img
                              key={idx}
                              className="smallLogo"
                              src={images[logoSrc]}
                              alt={`Logo ${idx}`}
                            />
                          ))}
                        </div>
                      </div>
                      <a className="detail" href="">
                        Detail
                      </a>
                    </div>
                  </>
                ) : (
                  <>
                    <div
                      key={index}
                      className="cardList1"
                      style={{ width: "270px" }}
                      // style={{ width: datas.length === 2 ? "550px" : "270px" }}
                    >
                      <h3>{item.nama}</h3>
                      <p style={{ paddingBottom: "20px" }}>
                        {item.periode} {" | "} {item.keterangan}
                      </p>
                      <a href={item.link}>Lihat</a>
                    </div>
                  </>
                )}
              </>
            ) : (
              <div
                key={index}
                className="cardList1"
                // style={{ width: datas.length === 2 ? "550px" : "270px" }}
              >
                <h3 style={{ paddingBottom: "10px", fontSize: "12px" }}>
                  {item.nama}
                </h3>
                <img
                  src={images[item.nama]}
                  alt=""
                  style={{
                    width: "200px",
                    height: "200px",
                    paddingBottom: "20px",
                  }}
                />
                <p
                  className="cardDescription"
                  style={{ fontWeight: "normal", textAlign: "left" }}
                ></p>
              </div>
            )}
          </>
        ))}
      </div>
    </div>
  );
}
