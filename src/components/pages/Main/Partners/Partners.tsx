import React from 'react'

import './styles.scss'

const Partners = () => {
  const partners = ['invision', 'medium', 'notion', 'slack', 'zoom', 'anydesk']

  return (
    <div className='partners'>
      <span className='partners__title'>
        Trusted by businesses and professionals
      </span>

      <div className='partners__container'>
        {partners.map(partner => (
          <img alt={`partner ${partner}`} key={partner} src={`assets/main/partners/${partner}.png`} />
        ))}
      </div>
    </div>
  )
}

export default Partners