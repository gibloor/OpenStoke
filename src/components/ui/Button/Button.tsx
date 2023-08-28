import React from 'react'

import choosed from './choosed.svg'

import './styles.scss'

type ButtonProps = {
  onClick: () => void
  style: 'unfilled-light' | 'unfilled-dark' | 'filled-light' | 'filled-dark'
  text?: string
  choosed?: boolean
  className?: string
}

const Button = (props: ButtonProps) => {

  return (
    <button 
      onClick={props.onClick}
      className={`button button__${props.style} ${props.choosed ? 'button__choosed' : ''} ${props.className}`}
    >
      {props.choosed ? <img src={choosed} /> : props.text}
    </button>
  )
}



export default Button