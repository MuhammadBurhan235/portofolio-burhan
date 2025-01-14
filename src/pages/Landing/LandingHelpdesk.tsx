import { Container, Row, Col, Button, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";
import { SigninForm } from "./SigninForm";
import { SignupForm } from "./SignupForm";
import { supabase } from "../../supabaseClient";
import FaqList from "./FaqList"; // Import komponen FAQ
import LayananList from "./LayananList";
import { Session } from "@supabase/supabase-js";
import CustomNavbar from "./Navbar";
import { CustomIconbar } from "./Iconbar";
import ChartPengeluaran from "./ChartPengeluaran";

interface faq {
  id: number;
  category: string;
  question: string;
  answer: string;
  likes: number;
}

interface layanan {
  id: number;
  image_url: string;
  nama: string;
  link: string;
  deskripsi: string;
}

const LandingHelpdesk: React.FC = () => {
  const [sidebarLData, setSidebarLData] = useState<string[]>([]);
  const [sidebarRContent, setSidebarRContent] = useState<JSX.Element | null>(
    null
  );
  const [mainbarContent, setMainbarContent] = useState<JSX.Element | null>(
    null
  );
  const [selectedIcon, setSelectedIcon] = useState<string | null>(null);
  const [selectedButton, setSelectedButton] = useState<string | null>(null);
  const [faqs, setFaqs] = useState<faq[]>([]);
  const [layanans, setLayanans] = useState<layanan[]>([]);
  const [faqCategory, setFaqCategory] = useState<string[]>([]);
  const [user, setUser] = useState<Session | null>(null);

  // const [isSigningUp, setIsSigningUp] = useState(false);

  useEffect(() => {
    const checkSession = async () => {
      const { data: sessionData } = await supabase.auth.getSession();
      setUser(sessionData?.session);
    };

    checkSession();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (event === "SIGNED_IN" || event === "SIGNED_OUT") {
          setUser(session);
        }
      }
    );

    return () => {
      authListener?.subscription.unsubscribe();
    };
  }, []);

  const handleButtonClick = (button: string) => {
    setSelectedButton(button);

    if (button === "signin") {
      setSidebarRContent(<SigninForm switchToSignup={showSignupForm} />);
    } else if (button === "signup") {
      setSidebarRContent(<SignupForm switchToLogin={showLoginForm} />);
    } else {
      setSidebarRContent(null);
    }
  };

  // Show Signup Form
  const showSignupForm = () => {
    setSidebarRContent(<SignupForm switchToLogin={showLoginForm} />);
  };

  // Show Login Form
  const showLoginForm = () => {
    setSidebarRContent(<SigninForm switchToSignup={showSignupForm} />);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setSidebarRContent(null);
    setSelectedButton(null);
    window.location.replace("/portofolio-burhan/lphelpdesk");
  };

  useEffect(() => {
    const fetchFaqs = async () => {
      const { data, error } = await supabase.from("faq").select("*");
      if (error) {
        console.error(error);
      } else {
        setFaqs(data);

        // Hitung jumlah likes per kategori
        const categoryLikes: Record<string, number> = {};
        data.forEach((faq: faq) => {
          if (!categoryLikes[faq.category]) {
            categoryLikes[faq.category] = 0;
          }
          categoryLikes[faq.category] += faq.likes;
        });

        // Urutkan kategori berdasarkan jumlah likes
        const sortedCategories = Object.entries(categoryLikes)
          .sort(([, likesA], [, likesB]) => likesB - likesA) // Urutkan dari yang terbesar
          .map(([category]) => category);

        const categories = ["All Category", ...sortedCategories]; // Tambahkan "All Category" ke daftar
        setFaqCategory(categories);
        setSidebarLData(categories); // Set sidebarLData dengan kategori
        setMainbarContent(
          <FaqList faqs={data} selectedCategory="All Category" />
        ); // Set mainbarContent dengan FAQ default
        setSelectedIcon("faq"); // Set FAQ icon as active by default
      }
    };

    fetchFaqs();
  }, []);

  useEffect(() => {
    const fetchLayanans = async () => {
      const { data, error } = await supabase.from("layanan").select("*");
      if (error) {
        console.error(error);
      } else {
        setLayanans(data);
      }
    };

    fetchLayanans();
  }, []);

  // Icon click handler for left sidebar
  const handleIconClick = (icon: string) => {
    setSelectedIcon(icon);

    if (icon === "faq") {
      setSidebarLData(faqCategory);
      setMainbarContent(
        <FaqList faqs={faqs} selectedCategory="All Category" />
      );
    } else if (icon === "layanan") {
      setSidebarLData([]);
      // setMainbarContent(<LayananList layananData={layanans} />);
      setMainbarContent(<LayananList layananData={layanans} />);
    } else if (icon === "chart") {
      setSidebarLData([]);
      setMainbarContent(<ChartPengeluaran />);
    }
  };

  // Handler untuk memilih kategori dari sidebar
  const handleCategoryClick = (category: string) => {
    setMainbarContent(<FaqList faqs={faqs} selectedCategory={category} />); // Perbarui mainbar content
  };

  // Button click handler for right sidebar (login)
  // const handleButtonClick = (button: string) => {
  //   setSelectedButton(button);

  //   if (button === "signin") {
  //     setSidebarRContent(<SigninForm switchToSignup={showSignupForm} />);
  //   } else {
  //     setSidebarRContent(null);
  //   }
  // };

  // // Show Signup Form
  // const showSignupForm = () => {
  //   setSidebarRContent(<SignupForm switchToLogin={showLoginForm} />);
  // };

  // // Show Login Form
  // const showLoginForm = () => {
  //   setSidebarRContent(<SigninForm switchToSignup={showSignupForm} />);
  // };

  // Close handler for both sidebars

  const handleCloseSidebar = (sidebar: string) => {
    if (sidebar === "left") {
      setSidebarLData([]);
    } else if (sidebar === "right") {
      setSidebarRContent(null);
    }
  };

  return (
    <Container
      fluid
      className="vh-100 d-flex flex-column"
      style={{ padding: "12px" }}
    >
      <CustomNavbar
        user={user}
        handleLogout={handleLogout}
        handleButtonClick={handleButtonClick}
        selectedButton={selectedButton}
      />

      {/* Row with Gap using Bootstrap g-3 */}
      <Row className="flex-grow-1" style={{ padding: "12px" }}>
        {/* New Smaller Sidebar with Close Icon */}
        <Col
          className="bg-secondary p-3 d-flex flex-column align-items-center"
          style={{
            borderRadius: "15px",
            minWidth: "56px",
            maxWidth: "56px",
          }}
        >
          <CustomIconbar
            user={user}
            handleIconClick={handleIconClick}
            selectedIcon={selectedIcon}
          />
        </Col>

        {/* Sidebar */}
        <Col
          className="bg-light p-3"
          style={{
            borderRadius: "15px",
            marginRight: "12px",
            maxWidth: sidebarLData.length > 0 ? "210px" : "0px",
            minWidth: sidebarLData.length > 0 ? "210px" : "0px",
            transition:
              "max-width 0.3s ease-in-out, min-width 0.3s ease-in-out",
            overflow: "hidden",
            border: sidebarLData.length > 0 ? "solid 1px" : "solid 0px",
          }}
        >
          <div className="d-flex justify-content-end">
            <Button variant="link" onClick={() => handleCloseSidebar("left")}>
              <FaTimes />
            </Button>
          </div>
          <Nav className="flex-column">
            {sidebarLData.map((item, index) => (
              <Nav.Link
                key={index}
                href="#item"
                className="text-dark"
                onClick={() => handleCategoryClick(item)} // Handle klik kategori
              >
                {item}
              </Nav.Link>
            ))}
          </Nav>
        </Col>

        {/* Mainbar */}
        <Col
          className="bg-light p-4"
          style={{
            border: "1px solid",
            borderRadius: "15px",
            overflowY: "auto",
            height: "100%",
          }}
        >
          {/* Scrollable FAQ List Container */}
          {mainbarContent}
        </Col>

        {/* Sidebar Login/Signup with Close Button */}
        <Col
          className="bg-light p-3"
          style={{
            borderTopLeftRadius: "15px",
            borderBottomLeftRadius: "15px",
            marginLeft: "12px",
            maxWidth: sidebarRContent ? "210px" : "0px",
            minWidth: sidebarRContent ? "210px" : "0px",
            transition:
              "max-width 0.3s ease-in-out, min-width 0.3s ease-in-out",
            overflow: "hidden",
            border: sidebarRContent ? "solid 1px" : "solid 0px",
          }}
        >
          <div className="d-flex justify-content-end">
            <Button variant="link" onClick={() => handleCloseSidebar("right")}>
              <FaTimes />
            </Button>
          </div>
          {user ? null : sidebarRContent}
        </Col>
      </Row>
    </Container>
  );
};

export default LandingHelpdesk;
