import { Container, Row, Col, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { FaTimes } from "react-icons/fa";
import React, { useState, useEffect, FormEvent } from "react";
import { SigninForm } from "../Landing/SigninForm";
import { SignupForm } from "../Landing/SignupForm";
import { supabase } from "../../supabaseClient";
import FaqList from "../Landing/FaqList"; // Import komponen FAQ
import LayananList from "../Landing/LayananList";
import { Session } from "@supabase/supabase-js";
import CustomNavbar from "../Landing/Navbar";
import { CustomIconbar } from "../Landing/Iconbar";
import StartChat from "../Landing/StartChat";
import SidebarLContent from "../Landing/SidebarL";

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

const DashboardCustomer: React.FC = () => {
  const [sidebarLData, setSidebarLData] = useState<JSX.Element | null>(null);
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
  const [selectedChatId, setSelectedChatId] = useState<string | null>(null);
  const [messageData, setMessageData] = useState<
    Array<{ question: string | null; answer: string | null }>
  >([]);
  const [newQuestion, setNewQuestion] = useState<string>("");
  const [admins, setAdmins] = useState<any[]>([]);

  // Ambil daftar admin saat komponen dimuat
  useEffect(() => {
    const fetchAdmins = async () => {
      const { data, error } = await supabase
        .from("user_roles")
        .select("id")
        .eq("role", "admin");
      if (error) {
        console.error("Error fetching admins:", error);
      } else {
        setAdmins(data || []);
      }
    };

    fetchAdmins();
  }, []);

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
        setSidebarLData(null); // Set sidebarLData dengan kategori
        setMainbarContent(null); // Set mainbarContent dengan FAQ default
        setSelectedIcon("tulis"); // Set FAQ icon as active by default
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

  const handleChatSelection = async (chatId: string) => {
    setSelectedChatId(chatId);
    fetchMessageData(chatId); // Fetch message data when a chat is selected
  };

  // Fetch message data for a selected chat
  const fetchMessageData = async (chatId: string) => {
    try {
      const { data, error } = await supabase
        .from("messages")
        .select("question, answer")
        .eq("chats_id", chatId)
        .order("timestamp", { ascending: true }); // Urutkan berdasarkan timestamp

      if (error) {
        console.error("Error fetching message data:", error);
        alert("Error fetching message data: " + error.message);
      } else {
        setMessageData(data || []); // Ambil semua pesan yang sesuai dengan chatId
      }
    } catch (error) {
      console.error("Unexpected error:", error);
      alert("An unexpected error occurred while fetching message data.");
    }
  };

  // Handle question submission by the customer
  const handleQuestionSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (selectedChatId && newQuestion) {
      try {
        // Get the current user
        const {
          data: { user },
          error: userError,
        } = await supabase.auth.getUser();
        if (userError) {
          console.error("Error fetching user:", userError);
          alert("Error fetching user information.");
          return;
        }
        const randomAdmin = admins[Math.floor(Math.random() * admins.length)];
        const adminId = randomAdmin ? randomAdmin.id : null;
        const { error } = await supabase.from("messages").insert([
          {
            chats_id: selectedChatId,
            customer_id: user?.id,
            question: newQuestion,
            answer: null,
            admin_id: adminId,
          },
        ]);

        if (error) {
          console.error("Error sending message:", error);
          alert("Error sending message: " + error.message);
        } else {
          setNewQuestion(""); // Clear the input field
          fetchMessageData(selectedChatId); // Refresh messages to include the new question
        }
      } catch (error) {
        console.error("Unexpected error:", error);
        alert("An unexpected error occurred while sending message.");
      }
    }
  };

  useEffect(() => {
    if (messageData) {
      setMainbarContent(
        <div
          className="d-flex flex-column"
          style={{
            height: "450px",
            border: "1px solid #ccc",
            borderRadius: "10px",
            padding: "10px",
          }}
        >
          {/* Scrollable message container */}
          <div
            className="flex-grow-1 overflow-auto mb-2"
            style={{ maxHeight: "400px" }}
          >
            {messageData.map((message, index) => (
              <div key={index} className="mb-2">
                {message.question && (
                  <div className="d-flex justify-content-end mb-1">
                    <div className="p-2 bg-primary text-white rounded">
                      <strong>Customer:</strong> {message.question}
                    </div>
                  </div>
                )}
                {message.answer && (
                  <div className="d-flex justify-content-start mb-1">
                    <div className="p-2 bg-secondary text-white rounded">
                      <strong>Admin:</strong> {message.answer}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Fixed form at the bottom */}
          <Form onSubmit={handleQuestionSubmit} className="d-flex mt-2">
            <Form.Control
              type="text"
              placeholder="Type a message"
              value={newQuestion}
              onChange={(e) => setNewQuestion(e.target.value)}
            />
            <Button variant="primary" type="submit" className="ms-2">
              Kirim
            </Button>
          </Form>
        </div>
      );
    }
  }, [messageData, newQuestion]);

  // Icon click handler for left sidebar
  const handleIconClick = (icon: string) => {
    setSelectedIcon(icon);

    if (icon === "faq") {
      setSidebarLData(
        <SidebarLContent
          sidebarLData={faqCategory}
          handleClose={() => handleCloseSidebar("left")}
          handleCategoryClick={handleCategoryClick}
        />
      );
      setMainbarContent(
        <FaqList faqs={faqs} selectedCategory="All Category" />
      );
    } else if (icon === "layanan") {
      setSidebarLData(null);
      setMainbarContent(<LayananList layananData={layanans} />);
    } else if (icon === "tulis") {
      setSidebarLData(<StartChat handleChatClick={handleChatSelection} />);
      setMainbarContent(
        <p className="text-center">Silahkan mulai chat atau pilih chat!</p>
      );
    } else {
      setSidebarLData(null);
      setMainbarContent(null); // Reset mainbar content jika tidak ada yang dipilih
    }
  };

  // Handler untuk memilih kategori dari sidebar
  const handleCategoryClick = (category: string) => {
    setMainbarContent(<FaqList faqs={faqs} selectedCategory={category} />); // Perbarui mainbar content
  };

  const handleCloseSidebar = (sidebar: string) => {
    if (sidebar === "left") {
      setSidebarLData(null);
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
            maxWidth: sidebarLData ? "210px" : "0px",
            minWidth: sidebarLData ? "210px" : "0px",
            transition:
              "max-width 0.3s ease-in-out, min-width 0.3s ease-in-out",
            overflow: "hidden",
            border: sidebarLData ? "solid 1px" : "solid 0px",
          }}
        >
          {sidebarLData}
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
          {/* Gunakan komponen FAQ */}
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

export default DashboardCustomer;
