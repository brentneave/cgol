import { State } from '/types'

import DragPattern from '/actions/DragPattern'
import DragPatternCancel from '/actions/DragPatternCancel'
import DropPattern from '/actions/DropPattern'
import Randomise from '/actions/Randomise'
import Reset from '/actions/Reset'
import StampPanelOpen from '../actions/StampPanelOpen'
import Start from '/actions/Start'
import Stop from '/actions/Stop'
import Tick from '/actions/Tick'

import AppLayout from '/components/AppLayout'
import CellsCursor from '/components/CellsCursor'
import ControlBar from '/components/ControlBar'
import ControlButton from '/components/ControlButton'
import RasterCells from '/components/RasterCells'
import StampPanel from '/components/StampPanel'

// @ts-ignore
import utils from '/styles/utils.css'


type f = (state:State) => any

const App:f = ({
  machine,
  mouse,
  render,
  stamps,
}) =>
  <AppLayout
    canvas={
      <RasterCells
        {...{ machine, render, stamps }}
        DropPattern={DropPattern}
      />
    }
    stampPanel={
      <StampPanel stamps={stamps} />
    }
    bottomLeft={
      <ControlButton
        key="ctrl-add"
        onclick={[StampPanelOpen, { isOpen: !stamps.isPanelOpen }]}
        label={stamps.isPanelOpen ? 'Close' : 'Stamp'}
      />
    }
    bottomRight={
      <ControlBar
        isRunning={machine.isRunning}
        isStampPanelOpen={stamps.isPanelOpen}
        StampPanelOpen={StampPanelOpen}
        Reset={Reset}
        Randomise={Randomise}
        Start={Start}
        Stop={Stop}
        Tick={Tick}
      />
    }
    cursor={
      stamps.isDragging
        ? <CellsCursor
            cellSize={machine.cellSize}
            draggingPattern={stamps.selected}
            mouse={mouse}
          />
        : null
    }
  />

export default App
