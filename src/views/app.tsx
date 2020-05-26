import AppLayout from '/components/AppLayout'
import CellsCursor from '/components/CellsCursor'
import ControlBar from '/components/ControlBar'
import ControlButton from '/components/ControlButton'
import RasterCells from '/components/RasterCells'
import StampPanel from '/components/StampPanel'
import StampPanelOpen from '../actions/StampPanelOpen'
import {State} from '/types'
import {View} from 'hyperapp'

const App: View<State> = ({
  layers,
  machine,
  mouse,
  stamps,
}) =>
  <AppLayout
    canvas={
      <div>
        {
          layers.map(
            layer =>
              <RasterCells
                {...{layer, machine, stamps}}
              />
          )
        }
      </div>
    }
    stampPanel={
      <StampPanel layers={layers} stamps={stamps} />
    }
    bottomLeft={
      <ControlButton
        onclick={[StampPanelOpen, {isOpen: !stamps.isPanelOpen}]}
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
          cellSize={machine.scale}
          draggingPattern={stamps.selected}
          mouse={mouse}
        />
        : null
    }
  />

export default App
