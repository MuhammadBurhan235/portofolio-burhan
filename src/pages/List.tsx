import { useLocation } from "react-router-dom";
import "../App.css";

interface DataItem {
  id: string;
  nama: string;
}

export function List() {
  const location = useLocation();
  const datas = (location.state as { items: DataItem[] })?.items;

  if (!datas || datas.length === 0) {
    return <div className="area">No data available</div>;
  }

  return (
    <div className="area">
      <div className="kontenArea2">
        {datas.map((data, index) => (
          <div key={index} className="cardList">
            <h3>{data.nama}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
