import { Component, Action } from 'hyperapp'
import { State } from '/types'

import Randomise from '/actions/Randomise'
import Reset from '/actions/Reset'
import Start from '/actions/Start'
import Stop from '/actions/Stop'
import Tick from '/actions/Tick'

import ControlButton from '/components/ControlButton'

import style from './style.css'

const ControlBar:Component<{
  isRunning:boolean
}>= ({
  isRunning
}) =>
  <div class={style.controlBar}>
    {[
      <ControlButton onclick={[Tick]} label={'Tick'} isDisabled={isRunning} />,
      <ControlButton onclick={[isRunning ? Stop : Start]} label={isRunning ? 'Stop' : 'Start'} />,
      <ControlButton onclick={[ Reset ]} label={'Purge'} />,
      <ControlButton onclick={[ Randomise, {} ]} label={'Rand'} />,
    ].map(
      button => 
        <div class={style.controlBarButton}>
          {button}
        </div>
    )}
  </div>

export default ControlBar