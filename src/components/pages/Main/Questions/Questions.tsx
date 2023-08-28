import React from 'react'

import Button from 'components/ui/Button/Button'
import questions from './questionsList'

import './styles.scss'

const Questions = () => {

  return (
    <div className='questions'>
      <span className='questions__title'>
        Frequently Asked Questions
      </span>

      <div>
        {questions.map(question => (
          <div className='questions__question'>
            <span className='questions__text'>
              {question.question}
            </span>

            <span className='questions__answer'>
              {question.answer}
            </span>
          </div>
        ))}
      </div>

      <Button
        onClick={() => {}}
        text='Send a Message'
        className='questions__button'
        style='unfilled-dark'
      />
    </div>
  )
}

export default Questions