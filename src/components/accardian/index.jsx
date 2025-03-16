"use client";
import { useState } from "react";

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const items = [
    { title: "What is Tailwind CSS?", content: "Tailwind CSS is a utility-first CSS framework." },
    { title: "How does Tailwind work?", content: "Tailwind uses utility classes to style components." },
    { title: "Is Tailwind better than Bootstrap?", content: "It depends on your needs. Tailwind is more flexible, while Bootstrap has prebuilt components." },
  ];

  return (
    <div className="w-full mx-auto mt-4">

      {items.map((item, index) => (
        <div key={index} className="bg-[#F6F6F6] p-3 border-gray-300 mb-4">
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full flex justify-between items-center py-3 text-left text-gray-800 font-semibold"
          >
            <span>{item.title}</span>
            <span className="text-2xl font-semibold">
              {openIndex === index ? "×" : "+"}
            </span>
          </button>
          {openIndex === index && (
            <div className="p-3 text-gray-600 border-t border-[grey]">{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
