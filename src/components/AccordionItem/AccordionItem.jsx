import React, { useRef } from 'react'
import {IoAdd} from 'react-icons/io5'
import {GrClose} from 'react-icons/gr'
import './AccordionItem.css'

const AccordionItem = ({ faq, active, onToggle }) => {
      const { question, answer } = faq;
    
      const contentEl = useRef();
    
      return (
        <li className={`accordion_item ${active ? "active" : ""}`}>
          <button className="button" onClick={onToggle}>
            {question}
            <span>{active ? <GrClose size={20}/> : <IoAdd size={20} />} </span>
          </button>
          <div
            ref={contentEl}
            className="answer_wrapper"
            style={
              active
                ? { height: contentEl.current.scrollHeight }
                : { height: "0px" }
            }
          >
            <div className="answer">{answer}</div>
          </div>
        </li>
      );
};   
  

export default AccordionItem