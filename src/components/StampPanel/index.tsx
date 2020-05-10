import { Component } from 'hyperapp'
import { Grid, Stamps } from '/types'

import StampButton from '/components/StampButton'

import style from './style.css'

const StampPanel:Component<{stamps:Stamps}> = ({
  stamps,
}) =>
  <div class={
    stamps.isPanelOpen 
      ? style.stampPanelOpen 
      : style.stampPanel}
  >
    {
      stamps.available.map(
        (stamp:Grid) =>
          <div class={style.stampPanelButton}>
            <StampButton
              isSelected={stamps.selected === stamp}
              stamp={stamp}
            />
          </div>
      )
    }
  </div>

export default StampPanel
