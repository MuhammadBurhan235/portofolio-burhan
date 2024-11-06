import { Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import {
  FaHeadset,
  FaQuestionCircle,
  FaPencilAlt,
  FaMoneyBillWave,
} from "react-icons/fa";
import { Session } from "@supabase/supabase-js";
import "../../App.css";

interface NavbarProps {
  user: Session | null;
  handleIconClick: (icon: string) => void;
  selectedIcon: string | null;
}

export const CustomIconbar: React.FC<NavbarProps> = ({
  user,
  handleIconClick,
  selectedIcon,
}) => {
  return (
    <Nav className="flex-column">
      {user ? (
        <>
          <Nav.Link
            href="#tulis"
            className={`text-light iconbar ${
              selectedIcon === "tulis" ? "active" : ""
            }`}
            title="Tulis"
            onClick={() => handleIconClick("tulis")}
            style={{ order: 1 }}
          >
            <FaPencilAlt size={24} />
          </Nav.Link>
          <Nav.Link
            href="#faq"
            className={`text-light iconbar ${
              selectedIcon === "faq" ? "active" : ""
            }`}
            title="FAQ"
            onClick={() => handleIconClick("faq")}
            style={{ order: user ? 2 : 1 }}
          >
            <FaQuestionCircle size={24} />
          </Nav.Link>
          <Nav.Link
            href="#layanan"
            className={`text-light iconbar ${
              selectedIcon === "layanan" ? "active" : ""
            }`}
            title="Layanan"
            onClick={() => handleIconClick("layanan")}
            style={{ order: user ? 3 : 2 }}
          >
            <FaHeadset size={24} />
          </Nav.Link>
        </>
      ) : (
        <>
          <Nav.Link
            href="#faq"
            className={`text-light iconbar ${
              selectedIcon === "faq" ? "active" : ""
            }`}
            title="FAQ"
            onClick={() => handleIconClick("faq")}
            style={{ order: user ? 2 : 1 }}
          >
            <FaQuestionCircle size={24} />
          </Nav.Link>
          <Nav.Link
            href="#layanan"
            className={`text-light iconbar ${
              selectedIcon === "layanan" ? "active" : ""
            }`}
            title="Layanan"
            onClick={() => handleIconClick("layanan")}
            style={{ order: user ? 3 : 2 }}
          >
            <FaHeadset size={24} />
          </Nav.Link>
          <Nav.Link
            href="#chartpengeluaran"
            className={`text-light iconbar ${
              selectedIcon === "chart" ? "active" : ""
            }`}
            title="Chart Pengeluaran"
            onClick={() => handleIconClick("chart")}
            style={{ order: user ? 4 : 3 }}
          >
            <FaMoneyBillWave size={24} />
          </Nav.Link>
        </>
      )}
    </Nav>
  );
};
