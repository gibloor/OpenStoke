import React from 'react'

import functionalities from './functionalities'

import './styles.scss'

const Functionality = () => {

  return (
    <div className='functionality'>
      <span className='functionality__title'>
        ALL PREMIUM PLANS INCLUDED
      </span>

      <div className='functionality__table'>
        {functionalities.map(functionality => (
          <div className='functionality__table_section'>
            <img
              src={`/assets/main/functionality/${functionality.name}.svg`}
              className='functionality__table_section_picture'
            />
            <span className='functionality__table_section_title'>
              {functionality.title}
            </span>
            <span className='functionality__table_section_text'>
              {functionality.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Functionality