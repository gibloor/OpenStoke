import React, { useState } from 'react'

import Button from 'components/ui/Button/Button'
import tariffSet from './tariffSet'
import hint from './hint.svg'

import './styles.scss'

import { user } from 'blanking-plug'
import { Link } from 'react-router-dom'

const Tariffs = () => {
  const [monthlyDuration, setMonthlyDuration] = useState(true)

  return (
    <div className='tariffs'>
      <div className='tariffs__switch'>
        <span
          className={`${monthlyDuration ? 'tariffs__active-switch' : ''}`}
          onClick={() => setMonthlyDuration(true)}
        >
          Monthly
        </span>
        <div className='tariffs__switch_separator' />
        <span
          className={`${!monthlyDuration ? 'tariffs__active-switch' : ''}`}
          onClick={() => setMonthlyDuration(false)}
        >
          Annually
        </span>
      </div>

      <div className='tariffs__container'>
        {tariffSet.map(tariff => (
          <div key={tariff.name} className={`tariffs__tariff ${tariff.mod === 'dark' ? 'tariffs__tariff-dark' : 'tariffs__tariff-light'}`}>
            <div className='tariffs__tariff_header'>
              <div className='tariffs__tariff_name_container'>
                <span className='tariffs__tariff_name'>
                  {tariff.name.toUpperCase()}
                </span>
                <span className='tariffs__tariff_icon-cost'>
                  {tariff.perIconCost ? `${tariff.perIconCost}¢ per icon` : 'png+limited svg'}
                </span>
              </div>

              <img alt='tariff' src={`assets/main/tariffs/${tariff.name}.svg`} />
            </div>

            <ul className='tariffs__features'>
              {tariff.features.map(feature => (
                <li key={feature}>
                  {feature}
                </li>
              ))}
            </ul>

            {tariff.price ? (
              tariff.discount ? (
                <div className='tariffs__current-price_container'>
                  <span>
                    <span>
                    ${tariff.price * tariff.discount / 100}
                    </span>
                    
                    <span className='tariffs__standard-price'>
                      ${tariff.price.toFixed(2)}
                    </span>
                  </span>

                  <span className='tariffs__discount'>
                    -{tariff.discount}%
                  </span>
                </div>
              ) : (
                <span className='tariffs__current-price'>
                  ${tariff.price.toFixed(2)}
                </span>
              )
            ) : (
              <span className='tariffs__current-price'>
                FREE FOREVER
              </span>
            )}

            <Button
              onClick={() => {}}
              text='Subscribe'
              choosed={user.plan === tariff.name}
              style={tariff.mod === 'dark' ? 'filled-light' : 'unfilled-light'}
            />
          </div>
        ))}
      </div>

      <div className='tariffs__information'>
        <span className='tariffs__information_text'>
          Your unused icons will be carry forwarded too. Fair right?
        </span>

        <span className='tariffs__information_clarification'>
          All prices are in US $-dollars.
        </span>
      </div>

      <div className='tariffs__hint'>
        <div className='tariffs__hint_block'>
          <img alt='hint' src={hint} />

          <span className='tariffs__hint_text'>
            Can’t find the right icon? No worries, just place the request and we’ll add it in like no time.
          </span>
        </div>

        <Link className='tariffs__hint_link' to=''>
          Request Icon
        </Link>
      </div>
    </div>
  )
}

export default Tariffs