import React, { useState } from 'react'
import './questions.css'
import Data from '../../../Data/Questions/Data'

function Questions() {
  const [show, setShow] = useState(null);
  const toggle = (index) => {
       if(show === index) {
        return setShow(null)
       }

       setShow(index)
  }
  return (
    <div className="questions">
        <h2>Question & Answers</h2>
        <div className="container">
          {
            Data.map((item, index) => {
              return(
              <div className="question" key={index}>
                <div className="header"  onClick={() => toggle(index)}>
                    <h4>{item.question}</h4>
                    <p>{show === index ? '-' : '+'}</p>
                </div>
                <div className="answer-section">
                    <p className={show === index ? 'show' : 'answer'}>{item.answer}</p>
                </div>
              </div>
              )
            })
          }  
        </div>
    </div>
  )
}

export default Questions