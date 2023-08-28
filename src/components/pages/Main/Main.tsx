import React from 'react'

import Announcement from './Announcement/Announcement'
import Tariffs from './Tariffs/Tariffs'
import Functionality from './Functionality/Functionality'
import PluginInfo from './PluginInfo/PluginInfo'
import SubscriptionInfo from './SubscriptionInfo/SubscriptionInfo'
import Questions from './Questions/Questions'
import Partners from './Partners/Partners'

import './styles.scss'

const Main = () => {

  return (
    <div className='main'>
      <Announcement />
      <Tariffs />
      <Functionality />
      <PluginInfo />
      <SubscriptionInfo />
      <Questions />
      <Partners />
    </div>
  )
}

export default Main