import ControlButton from '../ControlButton'
import VectorCells from '/components/VectorCells'

import { cellsRotate90 } from '/utils/cellsRotate'

// @ts-ignore
import style from './style.css'


const iconStop = <VectorCells
  cellSize={10}
  cells={[
    [1]
  ]}
/>


const iconStart = <VectorCells
  cellSize={2}
  cells={cellsRotate90([
    [0,1,0,0],
    [0,1,1,0],
    [0,1,1,1],
    [0,1,1,0],
    [0,1,0,0],
  ])}
/>


const iconTick = <VectorCells
  cellSize={2}
  cells={cellsRotate90([
    [1,0,0,0,1],
    [1,1,0,0,1],
    [1,1,1,0,1],
    [1,1,0,0,1],
    [1,0,0,0,1],
  ])}
/>


const iconReset = <VectorCells
  cellSize={2}
  cells={[
    [1,0,0,0,1],
    [0,1,0,1,0],
    [0,0,1,0,0],
    [0,1,0,1,0],
    [1,0,0,0,1],
  ]}
/>


const iconRandom = <VectorCells
  cellSize={2}
  cells={[
    [1,0,0,1,1],
    [0,0,1,0,0],
    [0,0,1,0,0],
    [0,0,1,0,0],
    [1,1,0,0,1],
  ]}
/>


const ControlBar = ({
  isRunning,
  isStampPanelOpen,
  Reset,
  Randomise,
  StampPanelOpen,
  Start,
  Stop,
  Tick
}) =>
  <div class={style.controlBar}>
    {[
      <ControlButton key="ctrl-tick" onclick={[Tick]} label={iconTick} isDisabled={isRunning} />,
      <ControlButton key="ctrl-start" onclick={[isRunning ? Stop : Start]} label={isRunning ? iconStop : iconStart} />,
      <ControlButton key="ctrl-reset" onclick={[ Reset, {} ]} label={iconReset} />,
      <ControlButton key="ctrl-random" onclick={[ Randomise, {} ]} label={iconRandom} />,
    ].map(
      button => 
        <div class={style.controlBarButton}>
          {button}
        </div>
    )}
  </div>

export default ControlBar