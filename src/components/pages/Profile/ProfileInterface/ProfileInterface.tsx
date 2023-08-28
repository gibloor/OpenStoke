import React, { useEffect, useState } from 'react'

import HistoryTab from './HistoryTab/HistoryTab'
import InvoicesTab from './InvoicesTab/InvoicesTab'
import SettingsTab from './SettingsTab/SettingsTab'

import history from './pictures/history.svg'
import invoices from './pictures/invoices.svg'
import settings from './pictures/settings.svg'
import historyActive from './pictures/historyActive.svg'
import invoicesActive from './pictures/invoicesActive.svg'
import settingsActive from './pictures/settingsActive.svg'
import arrow from './pictures/arrow.svg'

import './styles.scss'

import { user } from 'blanking-plug'

export const months = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
]

const ProfileInterface = () => {
  const [activeTab, setActiveTab] = useState('history')
  const [openTabs, setOpenTabs] = useState(0)
  const [paginationLength, setPaginationLength] = useState(0)

  useEffect(() => {
    if (activeTab === 'history') {
      setPaginationLength(Math.ceil(user.history.length / 10))
    }

    if (activeTab === 'invoices') {
      setPaginationLength(Math.ceil(user.invoices.length / 10))
    }

  }, [activeTab])

  return (
    <div className='profile-interface container'>
      <div className='profile-interface__sections'>
        <div
          onClick={() => setActiveTab('history')}
          className={`profile-interface__section ${activeTab === 'history' ? 'profile-interface__active-section': ''}`}
        >
          <img src={activeTab === 'history' ? historyActive : history} />
          <span>
            History
          </span>
        </div>
        
        <div
          onClick={() => setActiveTab('invoices')}
          className={`profile-interface__section ${activeTab === 'invoices' ? 'profile-interface__active-section': ''}`}
        >
          <img src={activeTab === 'invoices' ? invoicesActive : invoices} />
          <span>
            Invoices
          </span>
        </div>
        
        <div
          onClick={() => setActiveTab('settings')}
          className={`profile-interface__section ${activeTab === 'settings' ? 'profile-interface__active-section': ''}`}
        >
          <img src={activeTab === 'settings' ? settingsActive : settings} />
          <span>
            Settings
          </span>
        </div>
      </div>

      <div className='profile-interface__table'>
        <span className='profile-interface__table_title'>
          {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
        </span>
        
        {activeTab === 'history' && (
          <HistoryTab openTabs={openTabs} />
        )}

        {activeTab === 'invoices' && (
          <InvoicesTab openTabs={openTabs} />
        )}

        {(activeTab === 'invoices' || activeTab === 'history') && (
          <>
            <div className='profile-interface__pagination'>
              {Array.from({ length: paginationLength }, (_, index) => 
                index === 0 || index === paginationLength - 1 || index + 4 > openTabs && index - 4 < openTabs ? (
                  <div
                    key={index}
                    className={`profile-interface__pagination_button ${openTabs === index ? 'profile-interface__pagination_active-button' : ''}`}
                    onClick={() => setOpenTabs(index)}
                  >
                    {index + 1}
                  </div>
                ) : index + 4 === openTabs || index - 4 === openTabs ? (
                  <span className='profile-interface__three-dots'>
                    ...
                  </span>
                ) : null
              )}

              <div className='profile-interface__next-button'>
                <span>
                  Next
                </span>

                <img src={arrow} />
              </div>
            </div>

            <span className='profile-interface__counter'>
              {openTabs * 10 + 1}-{openTabs * 10 + 10} of {user[activeTab].length}
            </span>
          </>
        )}

        {activeTab === 'settings' && (
          <SettingsTab />
        )}
      </div>
    </div>
  )
}

export default ProfileInterface