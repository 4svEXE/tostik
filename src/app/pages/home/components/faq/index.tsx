import React, { useState } from "react";
import "./index.scss";

const Faq: React.FC = () => {
  const faqData = [
    {
      question: "Чи безпечно замовляти?",
      answer:
        "Так, ви оплачуєте товар при отриманні, перевіряючи, що в посилці саме те, що ви замовили, тому це цілком безпечно.",
    },
    {
      question: "Як довго товар доставляють?",
      answer: "Ми здійснюємо доставку впродовж 1-5 робочих днів.",
    },
    {
      question: "Чи можу я повернути товар?",
      answer: "Ви можете повернути товар протягом 14 днів.",
    },
  ];

  return (
    <section className="Faq">
      <h2 className="mb-10">Часті запитання</h2>
      <div className="accordion mt-10">
        {faqData.map((item, index) => (
          <AccordionItem key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </section>
  );
};

const AccordionItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion-item">
      <button className="question" onClick={() => setIsOpen(!isOpen)}>
        {question}
      </button>
      {isOpen && <p className="answer">{answer}</p>}
    </div>
  );
};

export default Faq;
