// CustomerQuestionForm.tsx
import { useState } from "react";
import { supabase } from "../../supabaseClient";
import { Button, Form } from "react-bootstrap";

interface CustomerQuestionFormProps {
  chatId: string; // The ID of the current chat
  userId: string; // The ID of the current user
  admins: { id: string }[]; // List of admins for random selection
  onQuestionSubmitted: () => void; // Callback function to refresh chats or perform other actions
}

const CustomerQuestionForm: React.FC<CustomerQuestionFormProps> = ({
  chatId,
  userId,
  admins,
  onQuestionSubmitted,
}) => {
  const [question, setQuestion] = useState("");

  const submitQuestion = async () => {
    try {
      // Get a random admin
      const randomAdmin = admins[Math.floor(Math.random() * admins.length)];
      const adminId = randomAdmin ? randomAdmin.id : null;

      // Update the message with the question and assign an admin
      const { error } = await supabase
        .from("messages")
        .update({
          question: question,
          admin_id: adminId,
        })
        .match({ chats_id: chatId, customer_id: userId }); // Match the specific chat and customer

      if (error) {
        console.error("Error updating message with question:", error);
        alert("Error submitting question: " + error.message);
      } else {
        alert("Question submitted!");
        setQuestion(""); // Clear the input after submission
        onQuestionSubmitted(); // Call the provided callback
      }
    } catch (error) {
      console.error("Unexpected error:", error);
      alert("An unexpected error occurred. Please try again later.");
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submitQuestion();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formQuestion">
        <Form.Label>Your Question</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          required
          placeholder="Type your question here..."
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit Question
      </Button>
    </Form>
  );
};

export default CustomerQuestionForm;
