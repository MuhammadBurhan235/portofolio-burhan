import { Worker, Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

// Import stylesheet
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

interface PdfProps {
  namaPdf: string;
}

export function Pdf({ namaPdf }: PdfProps) {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <div style={{ height: "750px" }}>
      <Worker
        workerUrl={`https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js`}
      >
        <Viewer
          fileUrl={`../../assets/${namaPdf}`}
          plugins={[defaultLayoutPluginInstance]}
        />
      </Worker>
    </div>
  );
}
