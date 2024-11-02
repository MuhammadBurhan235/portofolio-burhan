import { Navbar, Button } from "react-bootstrap";
import { Session } from "@supabase/supabase-js";

interface NavbarProps {
  user: Session | null;
  handleLogout: () => void;
  handleButtonClick: (button: string) => void;
  selectedButton: string | null;
}

const CustomNavbar: React.FC<NavbarProps> = ({
  user,
  handleLogout,
  handleButtonClick,
  selectedButton,
}) => {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      style={{ paddingInline: "30px", borderRadius: "15px" }}
    >
      <Navbar.Brand href="#home">Brand</Navbar.Brand>
      <div className="ms-auto">
        {user ? (
          <Button variant="outline-light" onClick={handleLogout}>
            Logout
          </Button>
        ) : (
          <Button
            variant={selectedButton === "signin" ? "primary" : "outline-light"}
            onClick={() => handleButtonClick("signin")}
            className="me-2"
          >
            Login
          </Button>
        )}
      </div>
    </Navbar>
  );
};

export default CustomNavbar;
