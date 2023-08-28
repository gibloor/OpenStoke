import React from 'react'

import { months } from '../ProfileInterface'

import dots from '../pictures/dots.svg'
import paid from './paid.svg'

import './styles.scss'

import { user } from 'blanking-plug'

type InvoicesTabProps = {
  openTabs: number
}

const InvoicesTab = (props: InvoicesTabProps) => {
  const { openTabs } = props

  return (
    <div>
      <div className='profile-interface__table_header'>
        <span className='profile-interface__table_date'>
          Date
        </span>
        <span className='profile-interface__table_item'>
          Plan
        </span>
        <span className='profile-interface__table_subscription'>
          Amount
        </span>
        <span className='profile-interface__table_royalty'>
          Status
        </span>
      </div>

      {user.invoices.map((element, index) => index >= openTabs * 10 && index < openTabs * 10 + 10 ? (
        <div className='profile-interface__table_row'>
          <span className='profile-interface__table_date'>
            {element.date.getDate()} {months[element.date.getMonth()]}, {element.date.getFullYear()}
          </span>
          <span className='invoice-tab__table_plan'>
            {element.plan}
            {` (${element.planDuration})`}
          </span>
          <span className='profile-interface__table_subscription'>
            ${element.amount}
          </span>
          <div className='profile-interface__table_royalty'>
            <div className='invoice-tab__status_container'>
              <img src={paid} />
              <span>
                {element.status}
              </span>
              {element.refunded && (
                <span className='invoice-tab__status_refund'>
                  REFUNDED
                </span>
              )}
            </div>
            <img src={dots} />
          </div>
        </div>
      ) : null)}
    </div>
  )
}

export default InvoicesTab