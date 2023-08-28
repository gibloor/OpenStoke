import React from 'react'

import Button from 'components/ui/Button/Button'

import './styles.scss'

const SubscriptionInfo = () => {

  const slides = [
    {
      name: 'unlimitedIcons',
      title: 'UNLIMITED ICONS',
      text: 'Get set Go! Get in touch with our to get extended licence for your team or customers.',
    },
    {
      name: 'heavyDiscount',
      title: 'HEAVY DISCOUNT',
      text: 'We have very exciting offer for very large teams. Contact our sales team, and we happy to help.',
    },
    {
      name: 'dedicatedSupport',
      title: 'DEDICATED SUPPORT',
      text: 'We have dedicated resources for your team to manage your request on time.',
    },
  ]

  return (
    <div className='subscription-info'>
      <div className='subscription-info__header'>
        <span className='subscription-info__header_title'>
          OpenStroke for Enterprise
        </span>
        <span className='subscription-info__header_text'>
          Running out of icon limit each month, Go unlimited
        </span>
      </div>

      <div className='subscription-info__slides'>
        {slides.map(slide => (
          <div key={slide.name} className='subscription-info__slide'>
            <img
              alt='subscription'
              src={`assets/main/subscriptionInfo/${slide.name}.svg`}
              className='subscription-info__slide_picture'
            />
            <span className='subscription-info__slide_title'>
              {slide.title}
            </span>
            <span className='subscription-info__slide_text'>
              {slide.text}
            </span>
          </div>
        ))}
      </div>

      <Button
        onClick={() => {}}
        text='Contact Sales'
        style='filled-light'
        className='subscription-info__button'
      />
    </div>
  )
}

export default SubscriptionInfo