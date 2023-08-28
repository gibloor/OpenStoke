import React from 'react'

import { months } from '../ProfileInterface'

import dots from '../pictures/dots.svg'

import { items, user } from 'blanking-plug'

type HistoryTabProps = {
  openTabs: number
}

const HistoryTab = (props: HistoryTabProps) => {
  const { openTabs } = props

  return (
    <div>
      <div className='profile-interface__table_header'>
        <span className='profile-interface__table_date'>
          Date
        </span>
        <span className='profile-interface__table_item'>
          Item
        </span>
        <span className='profile-interface__table_subscription'>
          Subscription
        </span>
        <span className='profile-interface__table_royalty'>
          Royalty-free License
        </span>
      </div>

      {user.history.map((element, index) => index >= openTabs * 10 && index < openTabs * 10 + 10 ? (
        <div className='profile-interface__table_row'>
          <span className='profile-interface__table_date'>
            {element.date.getDate()} {months[element.date.getMonth()]}, {element.date.getFullYear()}
          </span>
          <div className='profile-interface__table_item'>
            <img src={`assets/pictures/${element.item}`} />
            <span>
              {element.item}
            </span>
          </div>
          <span className='profile-interface__table_subscription'>
            {items.find(item => item.name === element.item)?.subscription}
          </span>
          <div className='profile-interface__table_royalty'>
            <span>
              {items.find(item => item.name === element.item)?.royaltyFree}
            </span>
            <img src={dots} />
          </div>
        </div>
      ) : null)}
    </div>
  )
}

export default HistoryTab