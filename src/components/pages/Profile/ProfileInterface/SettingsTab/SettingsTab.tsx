import React from 'react'

import Checkbox from 'components/ui/Checkbox/Checkbox'
import { months } from '../ProfileInterface'

import './styles.scss'
import Textarea from 'components/ui/Textarea/Textarea'

const SettingsTab = () => {
  return (
    <>
    
      <div>
        <span className='profile-interface__table_header'>
          Emailers
        </span>

        <div className='profile-interface__table_row'>
          <span>
            Your account get renew
          </span>

          <Checkbox />
        </div>
        
        <div className='profile-interface__table_row'>
          <span>
            New icons collection are available
          </span>

          <Checkbox />
        </div>

      </div>

      <div>
        <span className='profile-interface__table_header'>
          Billing Information
        </span>

        <Textarea
          placeholder='This information shows on your invoices.'
          className='settings-tab__table_textarea'
        />
      </div>

      <div>
        <span className='profile-interface__table_header'>
          Security
        </span>

        <div className='profile-interface__table_row'>
          <span>
            Password
          </span>

          <span>
            Reset password
          </span>
        </div>
      </div>

      <span className='settings-tab__delete-button'>
        Delete my Account
      </span>
    </>
  )
}

export default SettingsTab