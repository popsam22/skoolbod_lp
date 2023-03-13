import React, { useState } from "react";
import AccordionItem from "../AccordionItem/AccordionItem";
import faqs from "../../Data";



const Accordion = () => {
  const [clicked, setClicked] = useState("0");

  const handleToggle = index => {
    if (clicked === index) {
      return setClicked("0");
    }
    setClicked(index);
  };

  return (
    <div className="app__accordion" >
      <div className="app__accordion-item">
        <h1>Frequently Asked Questions</h1>
      </div>
      <ul className="accordion-item__container">
        {faqs.map((faq, index) => (
          <AccordionItem
            onToggle={() => handleToggle(index)}
            active={clicked === index}
            key={index}
            faq={faq}
          />
        ))}
      </ul>
    </div>

  );
};

export default Accordion;

// const createAccordion = (faq) => {
//   return (
//     <AccordionItem key={faq.id} question={faq.question} answer={faq.answer} />
//   );
// };

// <div>{faqs.map(createAccordion)}</div>;