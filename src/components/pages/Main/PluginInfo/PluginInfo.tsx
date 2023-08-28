import React from 'react'

import Button from 'components/ui/Button/Button'

import example from './example.svg'
import screenshot from './screenshot.png'

import './styles.scss'

const PluginInfo = () => {

  return (
    <div className='plugin-info'>
      <div className='plugin-info__container'>
        <img
          src={screenshot}
          alt='interface'
          className='plugin-info__picture'
        />

        <div className='plugin-info__intro'>
          <img
            src={example}
            alt='example'
            className='plugin-info__example'
          />
          <div className='plugin-info__intro_description'>
            <span className='plugin-info__intro_title'>
              Let’s connect to Figma
            </span>
            <span className='plugin-info__intro_text'>
              Yah! We know you love Figma so we’re coming up with the Figma plugin!
            </span>
          </div>
          <Button
            onClick={() => {}}
            text='Try Figma Plugin'
            style='filled-dark'
          />
        </div>
      </div>
    </div>
  )
}

export default PluginInfo