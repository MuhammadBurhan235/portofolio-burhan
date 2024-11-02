// LoadingSpinner.tsx
import { Spinner } from "react-bootstrap";

const LoadingSpinner: React.FC = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
    }}
  >
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  </div>
);

export default LoadingSpinner;
