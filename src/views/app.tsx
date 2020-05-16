import { Component } from 'hyperapp'
import { State } from '/types'

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

import utils from '/styles/utils.css'

const App:Component<State> = ({
  machine,
  mouse,
  render,
  stamps,
}) =>
  <AppLayout
    canvas={
      <RasterCells
        {...{ machine, render, stamps }}
      />
    }
    stampPanel={
      <StampPanel stamps={stamps} />
    }
    bottomLeft={
      <ControlButton
        onclick={[StampPanelOpen, { isOpen: !stamps.isPanelOpen }]}
        label={stamps.isPanelOpen ? 'Close' : 'Stamp'}
      />
    }
    bottomRight={
      <ControlBar
        isRunning={machine.isRunning}
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
