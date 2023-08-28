import React from 'react'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';

import ProfileInterface from './ProfileInterface/ProfileInterface'

import pencil from './pictures/pencil.svg'
import rocket from './pictures/rocket.svg'

import 'react-circular-progressbar/dist/styles.css';
import './styles.scss'

import { user } from 'blanking-plug'

const Profile = () => {

  return (
    <div className='profile'>
      <div className='profile__block container'>
        <div className='profile__greeting'>
          <span>
            HELLO
          </span>

          <span>
            {user.name.toUpperCase()}
          </span>
        </div>

        <div className='profile__short-info'>
          <div className='profile__avatar_container'>
            <div className='profile__avatar'>
              {user.name.split(' ').map(word => word.charAt(0).toUpperCase()).join('')}
            </div>

            <img src={pencil} />
          </div>

          <div className='profile__short-info_text'>
            <div className='profile__short-info_text_row'>
              <span className='profile__short-info_parameter'>
                Name
              </span>
              <span className='profile__short-info_value'>
                {user.name}
              </span>
            </div>
            
            <div className='profile__short-info_text_row'>
              <span className='profile__short-info_parameter'>
                Email
              </span>
              <span className='profile__short-info_value'>
                {user.email}
              </span>
            </div>
            
            <div className='profile__short-info_text_row'>
              <span className='profile__short-info_parameter'>
                Title
              </span>
              <div className='profile__short-info_edit-container'>
                <span className='profile__short-info_value'>
                  {user.position}
                </span>
                <img src={pencil} />
              </div>
            </div>
            
            <div className='profile__short-info_text_row'>
              <span className='profile__short-info_parameter'>
                Country
              </span>
              <span className='profile__short-info_value'>
                {user.country}
              </span>
            </div>
          </div>
        </div>

        <div className='profile__status'>
          <div className='profile__counter'>
            <CircularProgressbar
              value={2/15 * 100}
              text={`2/15`}
              styles={{
                ...buildStyles({
                  strokeLinecap: 'butt',
                  pathColor: '#1E3050',
                  trailColor: '#F0F3F5',
                  textSize: '1.5rem',
                }),
                text:{
                  fontWeight: '800',
                  fill: '#1E3050',
                }
              }}
            />
          </div>
          <span className='profile__counter_text'>
            pro icons remaining
          </span>

          <div className='profile__plan'>
            <div className='profile__plan_block'>
              <span className='profile__plan_title'>
                Current Plan
              </span>
              <span className='profile__plan_text'>
                Pro - Monthly
              </span>
            </div>
            
            <div className='profile__plan_block'>
              <span className='profile__plan_title'>
                Expiry
              </span>
              <span className='profile__plan_text'>
                23 Feb, 2023
              </span>
            </div>
          </div>

          <div className='profile__upgrade'>
            <span className='profile__upgrade_text'>
              Upgrade to Advance
            </span>
            <img src={rocket} />
          </div>
        </div>
      </div>

      <ProfileInterface />
    </div>
  )
}

export default Profile