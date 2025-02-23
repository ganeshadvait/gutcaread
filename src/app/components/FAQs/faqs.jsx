"use client"
import React, { useEffect } from "react";
import './faq.css'

export default function Faqs() {
  useEffect(() => {
    const faqQuestions = document.querySelectorAll(".faq-question");

    const handleClick = (event) => {
      const parent = event.currentTarget.parentElement;
      const isOpen = parent.classList.contains("open");

      // Close all other items
      document.querySelectorAll(".faq-item").forEach((faq) => {
        faq.classList.remove("open");
      });

      // Toggle the clicked item
      if (!isOpen) {
        parent.classList.add("open");
      }
    };

    // Attach event listeners
    faqQuestions.forEach((item) => {
      item.addEventListener("click", handleClick);
    });

    // Cleanup event listeners on unmount
    return () => {
      faqQuestions.forEach((item) => {
        item.removeEventListener("click", handleClick);
      });
    };
  }, []);

  return (
    <div className="faq-container">
        <div className="middle-faqs"> 
      <h2 className="faq-title">
        Frequently Asked <span>Questions</span>
      </h2>

      {[
        "What is Webflow and why is it the best website builder?",
        "What is your favorite template from BRIX Templates?",
        "How do you clone a Webflow Template from the Showcase?",
        "Why is BRIX Templates the best Webflow agency out there?",
      ].map((question, index) => (
        <div className="faq-item" key={index}>
          <div className="faq-question">
            {question}
            <img className="arrow" src="/assets/next-button.png" alt="Expand" />
          </div>
          <div className="faq-answer">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </div>
      ))}
      </div>
    </div>
  );
}
