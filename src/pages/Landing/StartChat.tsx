import { useEffect, useState } from "react";
import { supabase } from "../../supabaseClient";
import { Button, Card, Container } from "react-bootstrap";

interface StartChatProps {
  handleChatClick: (chatId: string) => void;
}

// StartChat Component
const StartChat: React.FC<StartChatProps> = ({ handleChatClick }) => {
  const [chats, setChats] = useState<any[]>([]);

  const fetchChats = async () => {
    try {
      const { data, error } = await supabase
        .from("chats")
        .select("*")
        .order("timestamp", { ascending: false });

      if (error) {
        console.error("Error fetching chats:", error);
        alert(`Error fetching chats: ${error.message}`);
      } else {
        setChats(data || []);
      }
    } catch (error) {
      console.error("Unexpected error:", error);
      alert("An unexpected error occurred while fetching chats.");
    }
  };

  const startChat = async () => {
    try {
      const { data: { user } = { user: null }, error: userError } =
        await supabase.auth.getUser();

      if (userError) {
        console.error("Error fetching user:", userError);
        alert("Error fetching user information.");
        return;
      }

      if (user) {
        const { data: chatData, error: chatError } = await supabase
          .from("chats")
          .insert([
            {
              customer_id: user.id,
              status: "open",
            },
          ])
          .select();

        if (chatError) {
          console.error("Error starting chat:", chatError);
          alert("Error starting chat: " + chatError.message);
        } else {
          const chatId = chatData[0].id; // Get the ID of the newly created chat

          // Insert a message into messages table without question and admin_id
          const { error: messageError } = await supabase
            .from("messages")
            .insert([
              {
                chats_id: chatId,
                customer_id: user.id,
                question: null, // Initially, there is no question
                answer: null, // Initially, there is no answer
                admin_id: null, // No admin assigned yet
              },
            ]);

          if (messageError) {
            console.error("Error inserting message:", messageError);
            alert("Error starting chat: " + messageError.message);
          } else {
            alert("Chat started!");
            fetchChats(); // Refresh chat list after starting a chat
          }
        }
      } else {
        alert("Please log in to start a chat.");
      }
    } catch (error) {
      console.error("Unexpected error:", error);
      alert("An unexpected error occurred. Please try again later.");
    }
  };

  useEffect(() => {
    fetchChats(); // Fetch chats on component mount
  }, []);

  return (
    <Container className="my-4">
      <div className="d-flex justify-content-center mb-4">
        <Button variant="primary" onClick={startChat}>
          Start Chat
        </Button>
      </div>

      <h3 className="text-center mb-3">Your Chats</h3>
      {chats.length > 0 ? (
        <div className="d-flex flex-column">
          {chats.map((chat) => (
            <Card
              key={chat.id}
              className="mb-3 shadow-sm"
              onClick={() => handleChatClick(chat.id)}
              style={{ cursor: "pointer" }}
            >
              <Card.Body className="d-flex flex-column">
                <Card.Subtitle className="mb-2 text-muted">
                  {new Date(chat.timestamp).toLocaleString()}
                </Card.Subtitle>
                <Card.Text>Status: {chat.status}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      ) : (
        <p className="text-center">No chats available.</p>
      )}
    </Container>
  );
};

export default StartChat;
