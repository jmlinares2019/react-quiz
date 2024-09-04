import React from 'react'

const Quiz = () => {
  return (
    <div className='container'>
      <h1>Quiz App</h1>
      <hr />
      <h2 className='quiz-question'>1. Dolor aute aliquip quis ullamco. Id labore qui duis ipsum laborum consequat commodo?</h2>
      <ul className='quiz-options-list'>
        <li className='quiz-option'>Modem</li>
        <li className='quiz-option'>Router</li>
        <li className='quiz-option'>LAN Cable</li>
        <li className='quiz-option'>Pen Drive</li>
      </ul>
      <button className='go-next'>Next</button>
      <div className="index">1 of 5 questions</div>
    </div>
  )
}

export default Quiz