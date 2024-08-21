"use client"

import React, { useState } from 'react';
import styles from './Faq.module.css';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What is my eligibility to book a car?",
    answer: "You should be 18 years old or above and you must possess a valid driving license."
  },
  {
    question: "Can I book for any period of time?",
    answer: "Yes, you can book for any period of time as per your convenience."
  },
  {
    question: "Can I opt for a longer period?",
    answer: "Yes, you can extend your booking for a longer period."
  },
  {
    question: "Can I book a one-way trip?",
    answer: "Yes, one-way trips are available."
  },
  {
    question: "Is there a home delivery option available?",
    answer: "Yes, we offer home delivery for your convenience."
  },
  {
    question: "How can I make the payment?",
    answer: "Payments can be made online through various methods."
  }
];

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <div className={styles.headingQuestions}>
        <p>Frequently asked questions</p>
      </div>

      <div className={styles.faqMainContainer}>
        <div className={styles.faqContainer}>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`${styles.faqItem} ${openIndex === index ? styles.open : ''}`}
            >
              <div className={styles.question} onClick={() => toggleAnswer(index)}>
                {faq.question}
                <span className={styles.icon}>{openIndex === index ? 'x' : '+'}</span>
              </div>
              {openIndex === index && <div className={styles.answer}>{faq.answer}</div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
