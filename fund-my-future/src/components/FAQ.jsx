
import { useState } from "react";

const faqs = [
  {
    question: 'What is FundMyFuture?',
    answer: 'FundMyFuture is a platform that offers affordable education financing solutions.',
  },
  {
    question: 'How do I apply?',
    answer: 'You can apply online by creating an account and filling out the application form.',
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-orange-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <h3
                className="text-xl font-semibold cursor-pointer"
                onClick={() => handleToggle(index)}
              >
                {faq.question}
              </h3>
              {activeIndex === index && (
                <p className="text-gray-600 mt-2">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
