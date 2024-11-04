import { useEffect, useState } from "react";
import { supabase } from "../../supabaseClient";
import { Button, Card, Container } from "react-bootstrap";

interface StartChatProps {
  handleChatClick: (chatId: string) => void;
}

// StartChat Component
const StartChat: React.FC<StartChatProps> = ({ handleChatClick }) => {
  const [chats, setChats] = useState<any[]>([]);
  const [role, setRole] = useState<string | null>(null);

  const fetchUserRole = async () => {
    const { data: { user } = { user: null }, error } =
      await supabase.auth.getUser();

    if (error) {
      console.error("Error fetching user:", error);
      alert("Error fetching user information.");
      return;
    }

    if (user) {
      const { data: roleData, error: roleError } = await supabase
        .from("user_roles")
        .select("role")
        .eq("id", user.id)
        .single();

      if (roleError) {
        console.error("Error fetching role:", roleError);
        alert("Error fetching role: " + roleError.message);
      } else {
        setRole(roleData?.role || null);
      }
    }
  };

  const fetchChats = async () => {
    try {
      if (role === "customer") {
        // Fetch chats for customer
        const { data, error } = await supabase
          .from("chats")
          .select("*")
          .eq("customer_id", (await supabase.auth.getUser()).data.user?.id)
          .order("timestamp", { ascending: false });

        if (error) {
          console.error("Error fetching chats:", error);
          alert(`Error fetching chats: ${error.message}`);
        } else {
          setChats(data || []);
        }
      } else if (role === "admin") {
        // Fetch latest messages for each chat ID for admin
        const { data, error } = await supabase
          .from("messages")
          .select("chats_id, question, answer, timestamp")
          .order("timestamp", { ascending: false });

        if (error) {
          console.error("Error fetching messages:", error);
          alert(`Error fetching messages: ${error.message}`);
        } else {
          // Group messages by `chats_id` to get the latest message per chat
          const latestMessages = data.reduce((acc: any[], msg: any) => {
            if (!acc.some((m) => m.chats_id === msg.chats_id)) {
              acc.push(msg);
            }
            return acc;
          }, []);
          setChats(latestMessages);
        }
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
          const chatId = chatData[0].id;

          const { error: messageError } = await supabase
            .from("messages")
            .insert([
              {
                chats_id: chatId,
                customer_id: user.id,
                question: null,
                answer: null,
                admin_id: null,
              },
            ]);

          if (messageError) {
            console.error("Error inserting message:", messageError);
            alert("Error starting chat: " + messageError.message);
          } else {
            alert("Chat started!");
            fetchChats();
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
    fetchUserRole();
  }, []);

  useEffect(() => {
    if (role) fetchChats();
  }, [role]);

  return (
    <Container className="my-4">
      {role === "customer" && (
        <div className="d-flex justify-content-center mb-4">
          <Button variant="primary" onClick={startChat}>
            Mulai Chat
          </Button>
        </div>
      )}

      <h3 className="text-center mb-3">Chat KITA!</h3>
      {chats.length > 0 ? (
        <div className="d-flex flex-column">
          {chats.map((chat) => (
            <Card
              key={chat.chats_id || chat.id}
              className="mb-3 shadow-sm"
              onClick={() => handleChatClick(chat.chats_id || chat.id)}
              style={{ cursor: "pointer" }}
            >
              <Card.Body className="d-flex flex-column">
                <Card.Subtitle className="mb-2 text-muted">
                  {new Date(chat.timestamp).toLocaleString()}
                </Card.Subtitle>
                {role === "customer" ? (
                  <Card.Text>Status: {chat.status}</Card.Text>
                ) : (
                  <Card.Text>Question: {chat.question}</Card.Text>
                )}
              </Card.Body>
            </Card>
          ))}
        </div>
      ) : role === "customer" ? (
        <p className="text-center">
          Anda belum memiliki chat, silahkan Mulai Chat!
        </p>
      ) : (
        <p className="text-center">Belum ada customer hari ini :(</p>
      )}
    </Container>
  );
};

export default StartChat;
