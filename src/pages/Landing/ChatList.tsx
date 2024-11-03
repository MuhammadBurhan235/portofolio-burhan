import { useState, useEffect } from "react";
import { supabase } from "../../supabaseClient";
import Accordion from "react-bootstrap/Accordion";

const ChatList: React.FC = () => {
  const [chats, setChats] = useState<any[]>([]);

  const fetchChats = async () => {
    const { data, error } = await supabase
      .from("chats")
      .select("*")
      .eq("status", "open")
      .is("admin_id", null);

    if (error) {
      console.error("Error fetching chats:", error);
    } else {
      setChats(data || []);
    }
  };

  useEffect(() => {
    fetchChats(); // Panggil fungsi fetchChats saat komponen pertama kali dimuat
  }, []);

  const sendResponse = async (chatId: string, response: string) => {
    try {
      const { error } = await supabase
        .from("chats")
        .update({ jawaban: response })
        .eq("id", chatId);

      if (error) {
        alert("Error sending response: " + error.message);
      } else {
        alert("Jawaban berhasil disimpan!");
        fetchChats(); // Refresh daftar chat setelah update
      }
    } catch (error) {
      console.error("Unexpected error:", error);
    }
  };

  return (
    <div>
      <h2>Open Chats</h2>
      <h5>FREQUENTLY ASKED QUESTIONS</h5>
      <p>Pertanyaan yang sering ditanyakan</p>
      <div
        className="overflow-auto"
        style={{
          maxHeight: "380px",
          border: "1px solid #ccc",
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <Accordion defaultActiveKey={["0"]} flush>
          {chats.map((chat, index) => (
            <Accordion.Item eventKey={String(index)} key={chat.id}>
              <Accordion.Header>
                <span style={{ marginRight: "10px" }}>{chat.pertanyaan}</span>
              </Accordion.Header>
              <Accordion.Body>
                <p>{chat.jawaban || "Belum ada jawaban dari admin."}</p>
                <textarea
                  placeholder="Masukkan jawaban"
                  onChange={(e) => {
                    // Simpan jawaban yang dimasukkan ke dalam state lokal
                    chat.jawaban = e.target.value; // Simpan nilai jawaban di dalam objek chat
                  }}
                />
                <button
                  onClick={() => {
                    // Kirim jawaban ke database
                    sendResponse(chat.id, chat.jawaban);
                  }}
                >
                  Kirim Jawaban
                </button>
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default ChatList;
