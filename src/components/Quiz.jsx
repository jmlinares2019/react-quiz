import React, { useState, useRef } from 'react'

import { data } from '../assets/data'

const Quiz = () => {
  console.log("Component (re)endered");

  let [index, setIndex] = useState(0);
  let  [question, setQuestion] = useState(data[index]);
  let [lock, setLock] = useState(false);

  // create the references
  let Option1 = useRef(null);
  let Option2 = useRef(null);
  let Option3 = useRef(null);
  let Option4 = useRef(null);

  // push them into array
  let options = [Option1, Option2, Option3, Option4];

  const checkAnswer = (element, answer) => {
    // only check answer for the firt time (not locked)
    if(lock === false){
      if(question.ans === answer){
        element.target.classList.add('correct');
        setLock(true);
       } else {
        element.target.classList.add('wrong');
        setLock(true);
        // highlight the correct answer
        options[question.ans - 1].current.classList.add('correct');
       }
    }
  }

  return (
    <div className='container'>
      <h1>Quiz App</h1>
      <hr />
      <h2 className='quiz-question'>{index + 1}. {question.question}</h2>
      <ul className='quiz-options-list'>
        <li ref={Option1} onClick={(element) => checkAnswer(element,1)} className='quiz-option'>{question.option1}</li>
        <li ref={Option2} onClick={(element) => checkAnswer(element,2)} className='quiz-option'>{question.option2}</li>
        <li ref={Option3} onClick={(element) => checkAnswer(element,3)} className='quiz-option'>{question.option3}</li>
        <li ref={Option4} onClick={(element) => checkAnswer(element,4)} className='quiz-option'>{question.option4}</li>
      </ul>
      <button className='go-next'>Next</button>
      <div className="index">1 of 5 questions</div>
    </div>
  )
}

export default Quiz