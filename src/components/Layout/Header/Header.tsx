import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import loupe from './pictures/loupe.svg'
import logo from './pictures/logo.svg'
import close from './pictures/close.svg'
import menu from './pictures/menu.svg'

import './styles.scss'

import { user as blankingUser, emptyUser, i18next, I18NEXT } from '../../../blanking-plug'

const Header = () => {
  const [showDropDown, setShowDropDown] = useState(false)

  const user = blankingUser || emptyUser

  return (
    <div className='header extended-container'>
      <div className='header__section'>
        <Link to='./' className='header__icons'>
          <img alt='loupe' src={loupe} className='header__loupe' />
          <span>
            ICONS
          </span>
        </Link>

        <Link to='./' className='header__link'>
          STYLES
        </Link>
      </div>

      <img alt='logo' src={logo} />

      <div className='header__section header__left-section'>
        {!user.name && (
          <Link to='./' className='header__link'>
            PRICING
          </Link>
        )}

        <Link to='./' className='header__link'>
          LOGIN
        </Link>

        {user.name && (
          <>
            <Link to='./' className='header__link'>
              {((i18next.header as I18NEXT).plan as I18NEXT)[user.plan] as string}
            </Link>
            
            <Link to='profile' className='header__user-name_container header__link'>
              {user.name.split(' ').map(word => word.charAt(0).toUpperCase()).join('')}
            </Link>
          </>
        )}

        <img
          alt={showDropDown ? 'close' : 'menu'}
          src={showDropDown ? close : menu}
          onClick={() => setShowDropDown(!showDropDown)}
          className='header__drop-down-menu'
        />
      </div>
    </div>
  )
}

export default Header