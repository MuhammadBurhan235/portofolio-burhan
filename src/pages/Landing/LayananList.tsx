import { Accordion } from "react-bootstrap";

interface layanan {
  id: number;
  image_url: string;
  nama: string;
  link: string;
  deskripsi: string;
}

interface LayananListProps {
  layananData: layanan[];
}

const LayananList: React.FC<LayananListProps> = ({ layananData }) => {
  return (
    <div>
      <h5>LAYANAN KAMI</h5>
      <p>Temukan layanan yang kami tawarkan di sini</p>
      <div
        className="overflow-auto"
        style={{
          maxHeight: "400px",
          border: "1px solid #ccc",
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <Accordion defaultActiveKey={["0"]} flush>
          {layananData.map((layanan, index) => (
            <Accordion.Item eventKey={String(index)} key={index}>
              <Accordion.Header>
                {/* Image for the service */}
                <img
                  src={layanan.image_url}
                  alt={layanan.nama}
                  style={{
                    width: "40px",
                    height: "40px",
                    marginRight: "15px",
                    borderRadius: "5px",
                  }}
                />
                <span style={{ marginRight: "10px" }}>{layanan.nama}</span>
                <a
                  href={layanan.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    paddingInline: "20px",
                    paddingBlock: "5px",
                    backgroundColor: "#CFE2FF",
                    border: "1px solid #ccc",
                    borderRadius: "15px",
                    textDecoration: "none",
                    color: "#000",
                  }}
                >
                  Kunjungi Layanan
                </a>
              </Accordion.Header>
              <Accordion.Body>{layanan.deskripsi}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default LayananList;
