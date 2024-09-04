import React, { useState } from 'react'
import { data } from '../assets/data'

const Quiz = () => {

  let [index, setIndex] = useState(0);
  let  [question, setQuestion] = useState(data[index]);
  let [lock, setLock] = useState(false);

  const checkAnswer = (element, answer) => {
    // only check answer for the firt time (not locked)
    if(lock === false){
      if(question.ans === answer){
        element.target.classList.add('correct');
        setLock(true);
       } else {
        element.target.classList.add('wrong');
        setLock(true);
       }
    }
  }

  return (
    <div className='container'>
      <h1>Quiz App</h1>
      <hr />
      <h2 className='quiz-question'>{index + 1}. {question.question}</h2>
      <ul className='quiz-options-list'>
        <li onClick={(element) => checkAnswer(element,1)} className='quiz-option'>{question.option1}</li>
        <li onClick={(element) => checkAnswer(element,2)} className='quiz-option'>{question.option2}</li>
        <li onClick={(element) => checkAnswer(element,3)} className='quiz-option'>{question.option3}</li>
        <li onClick={(element) => checkAnswer(element,4)} className='quiz-option'>{question.option4}</li>
      </ul>
      <button className='go-next'>Next</button>
      <div className="index">1 of 5 questions</div>
    </div>
  )
}

export default Quiz