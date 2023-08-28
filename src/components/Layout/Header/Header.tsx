import React from 'react'
import { Link } from 'react-router-dom'

import loupe from './pictures/loupe.svg'
import logo from './pictures/logo.svg'
import close from './pictures/close.svg'
import menu from './pictures/menu.svg'

import './styles.scss'

import { user as blankingUser, emptyUser, i18next, I18NEXT } from '../../../blanking-plug'

const Header = () => {

  const user = blankingUser || emptyUser

  return (
    <div className='header extended-container'>
      <div className='header__section'>
        <Link to='' className='header__icons'>
          <img src={loupe} className='header__loupe' />
          <span>
            ICONS
          </span>
        </Link>

        <Link to=''>
          STYLES
        </Link>
      </div>

      <img src={logo} />

      <div className='header__section header__left-section'>
        {!user.name && (
          <Link to=''>
            PRICING
          </Link>
        )}

        <Link to=''>
          LOGIN
        </Link>

        {user.name && (
          <>
            <Link to=''>
              {((i18next.header as I18NEXT).plan as I18NEXT)[user.plan] as string}
            </Link>
            
            <Link to='profile' className='header__user-name_container'>
              {user.name.split(' ').map(word => word.charAt(0).toUpperCase()).join('')}
            </Link>
          </>
        )}

        {/* <img src={menu} /> */}
        {/* <img src={close} /> */}
      </div>
    </div>
  )
}

export default Header