import React, { useState, useRef } from 'react'

import { data } from '../assets/data'

const Quiz = () => {
  console.log("Component (re)endered");

  const questions = data;

  let [index, setIndex] = useState(0);
  let [question, setQuestion] = useState(data[index]);
  let [lock, setLock] = useState(false);
  let [score, setScore] = useState(0);
  let [result, setResult] = useState(false);

  // create the references
  let Option1 = useRef(null);
  let Option2 = useRef(null);
  let Option3 = useRef(null);
  let Option4 = useRef(null);

  // push them into array
  let options = [Option1, Option2, Option3, Option4];

  // Checking answers
  const checkAnswer = (element, answer) => {
    // only check answer for the firt time (not locked)
    if(lock === false){
      if(question.ans === answer){
        element.target.classList.add('correct');
        setLock(true);
        setScore(prev => prev + 1);
       } else {
        element.target.classList.add('wrong');
        setLock(true);
        // highlight the correct answer
        options[question.ans - 1].current.classList.add('correct');
       }
    }
  }

  // Next question button
  function goNext(){
    if(lock === true){
      if(index === data.length - 1){
        setResult(true);
        return;
      }
      // setIndex(prevIndex => prevIndex + 1); // why not working properly?
      setIndex(++index); // shouldn't use! 
      // console.log(index);
      setQuestion(data[index]);
      // console.log(question);
      setLock(false);
      options.map((option) => {
        option.current.classList.remove('correct', 'wrong')
        return null;
      });
    } 
  }

  // Start quiz again (resetting all states)
  function startOver(){
    setResult(false);
    setIndex(0);
    setQuestion(data[0]);
    setLock(false);
    setScore(0);
  }

  return (
    <div className='container'>
      <h1>Quiz App</h1>
      <hr />
      {result ? 
        <>
          <h2>You scored {score} out of {data.length}</h2>
          <button className='reset' onClick={startOver}>Try again</button>
        </> 
      :
      <>
        <h2 className='quiz-question'>{index + 1}. {question.question}</h2>
        <ul className='quiz-options-list'>
          <li ref={Option1} onClick={(element) => checkAnswer(element,1)} className='quiz-option'>{question.option1}</li>
          <li ref={Option2} onClick={(element) => checkAnswer(element,2)} className='quiz-option'>{question.option2}</li>
          <li ref={Option3} onClick={(element) => checkAnswer(element,3)} className='quiz-option'>{question.option3}</li>
          <li ref={Option4} onClick={(element) => checkAnswer(element,4)} className='quiz-option'>{question.option4}</li>
        </ul>
        <button className='go-next' onClick={goNext}>Next</button>
        <div className="index">{index+1} of {questions.length} questions</div>
      </> 
      }
      </div>
  )
}

export default Quiz