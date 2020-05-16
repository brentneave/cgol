import { View } from 'hyperapp'
import { State } from '/types'

import StampPanelOpen from '../actions/StampPanelOpen'

import AppLayout from '/components/AppLayout'
import CellsCursor from '/components/CellsCursor'
import ControlBar from '/components/ControlBar'
import ControlButton from '/components/ControlButton'
import RasterCells from '/components/RasterCells'
import StampPanel from '/components/StampPanel'

const App: View<State> = ({
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
