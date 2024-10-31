import { Accordion } from "react-bootstrap";

interface faq {
  id: number;
  category: string;
  question: string;
  answer: string;
  likes: number;
}

interface FaqListProps {
  faqs: faq[];
  selectedCategory: string | null;
}

const FaqList: React.FC<FaqListProps> = ({ faqs, selectedCategory }) => {
  // Filter FAQ based on the selected category
  const filteredFaqs =
    selectedCategory === "All Category"
      ? faqs
      : faqs.filter((faq) => faq.category === selectedCategory);

  // Sort filtered FAQs by likes in descending order
  const sortedFaqs = filteredFaqs.sort((a, b) => b.likes - a.likes);

  return (
    <div>
      <h5>FREQUENTLY ASKED QUESTIONS</h5>
      <p>Pertanyaan yang sering ditanyakan</p>
      <div
        className="overflow-auto"
        style={{
          maxHeight: "400px",
          border: "1px solid #ccc",
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <Accordion defaultActiveKey={["0"]} flush>
          {sortedFaqs.map((faq, index) => (
            <Accordion.Item eventKey={String(index)} key={faq.id}>
              <Accordion.Header>
                <span style={{ marginRight: "10px" }}>{faq.question}</span>
                <span
                  style={{
                    paddingInline: "20px",
                    paddingBlock: "5px",
                    backgroundColor: "#CFE2FF",
                    border: "1px solid #ccc",
                    borderRadius: "15px",
                  }}
                >
                  {faq.category}
                </span>
                <span
                  style={{
                    marginLeft: "10px",
                    backgroundColor: "#E2F0D9",
                    padding: "5px",
                    borderRadius: "10px",
                  }}
                >
                  {faq.likes} Likes
                </span>
              </Accordion.Header>
              <Accordion.Body
                dangerouslySetInnerHTML={{ __html: faq.answer }}
              />
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FaqList;
