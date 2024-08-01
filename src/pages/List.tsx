import { useLocation, useNavigate } from "react-router-dom";
import "../App.css";
import { images } from "../images";

interface DataItem {
  id: string;
  nama: string;
}

export function List() {
  const location = useLocation();
  const navigate = useNavigate();
  const { items, konten } =
    (location.state as { items: DataItem[]; konten: string }) || {};

  if (!items || items.length === 0) {
    return <div className="area">No data available</div>;
  }

  const handleBackClick = () => {
    navigate(-1); // Navigasi kembali ke halaman sebelumnya
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
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              fugit voluptas libero iste quo natus blanditiis. In eum beatae
              quaerat, iste eligendi obcaecati fugit soluta a maiores minima,
              rem ullam.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
