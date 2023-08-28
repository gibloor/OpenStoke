import React from 'react'

import './styles.scss'

type TextareaProps = {
  placeholder?: string
  rows?: number
  className?: string
}

const Textarea = (props: TextareaProps) => {

  return (
    <textarea
      placeholder={props.placeholder}
      className={`textarea ${props.className}`}
      rows={props.rows}
    />
  )
}

export default Textarea