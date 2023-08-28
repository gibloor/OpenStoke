import React from 'react'
import { Link } from 'react-router-dom'

import columns from './columns'

import heart from './pictures/heart.svg'
import openStroke from './pictures/openStroke.svg'
import stripe from './pictures/stripe.png'

import './styles.scss'

const Footer = () => {

  return (
    <div className='footer extended-container'>
      <div className='footer__block'>
        <div className='footer__description'>
          <img
            alt='open stroke'
            src={openStroke}
            className='footer__description_picture'
          />
          <span className='footer__description_text'>
            OpenStroke.io icons library is designed for millions of designers, developers, and content creators who care for attention to details. OpenStroke.io offering an quality 35,776 icons collection across 68 categories and having 4 unique styles including brand logos, and emojis. We are committed to expands our library.
          </span>
        </div>

        <div  className='footer__columns'>
          {columns.map((column, index) => (
            <div key={index} className='footer__column'>
              {column.map(link => (
                <Link to={link.link} key={link.text}>
                  {link.text}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className='footer__content'>
        <span className='footer__copyright'>
          © Sketchish Designer, Llp.
        </span>

        <span className='footer__made-with'>
          Made with <img alt='heart' src={heart} /> in India.
        </span>

        <div className='footer__secure-payment'>
          <span>
            Secure payment with
          </span>
          <img alt='stripe' src={stripe} />
        </div>
      </div>
    </div>
  )
}

export default Footer