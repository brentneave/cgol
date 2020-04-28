import DragPattern from '../actions/DragPattern'
import DragPatternCancel from '../actions/DragPatternCancel'
import DropPattern from '../actions/DropPattern'
import Randomise from '/actions/Randomise'
import Reset from '/actions/Reset'
import Start from '/actions/Start'
import Stop from '/actions/Stop'
import Tick from '/actions/Tick'
// @ts-ignore
import utils from '/styles/utils.css'
import getAllLiveCells from '/utils/getAllLiveCells'
import RasterCells from '/components/RasterCells'
import VectorCells from '/components/VectorCells'

const pattern = [
  [0,0,1,1,1,0,0,0,1,1,1,0,0,],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,],
  [1,0,0,0,0,1,0,1,0,0,0,0,1,],
  [1,0,0,0,0,1,0,1,0,0,0,0,1,],
  [1,0,0,0,0,1,0,1,0,0,0,0,1,],
  [0,0,1,1,1,0,0,0,1,1,1,0,0,],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,],
  [0,0,1,1,1,0,0,0,1,1,1,0,0,],
  [1,0,0,0,0,1,0,1,0,0,0,0,1,],
  [1,0,0,0,0,1,0,1,0,0,0,0,1,],
  [1,0,0,0,0,1,0,1,0,0,0,0,1,],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,],
  [0,0,1,1,1,0,0,0,1,1,1,0,0,],
]


// Root application view
export default state => (
  <main class={utils.container}>
    {/* { console.log(state) } */}
    <h1>Conway’s Game of Life, sort of</h1>
    <button 
      onclick={[
        Reset,
        {}
      ]}
    >
      Reset
    </button>
    <button 
      onclick={[
        Randomise,
        {}
      ]}
    >
      Randomise
    </button>
    <button
      onclick={[
        state.draggingPattern
          ? DragPatternCancel 
          : DragPattern,
        { pattern }
      ]}
    >
      {
        state.draggingPattern
          ? 'Cancel'
          : 'Add Pattern'
      }
    </button>
    {
      state.isRunning
        ? [
            <button onclick={[Stop]}>Stop</button>
          ]
        : [
            <button onclick={[Start]}>Start</button>,
            <button onclick={[Tick]}>Tick</button>
          ]
    }
    <RasterCells
      onmousedown={[
        DropPattern,
        event => ({
          pattern,
          xOffset: Math.round(event.offsetX / state.cellSize),
          yOffset: Math.round(event.offsetY / state.cellSize),
        })
      ]}
      {...state}
    />
    {
      state.draggingPattern !== undefined && 
      <div 
        style={{
          width: `100px`,
          height: `100px`,
          position: 'fixed',
          left: 0,
          pointerEvents: 'none',
          top: 0,
          transform: `translate(${
            Math.round(state.mouse.x / state.cellSize) * state.cellSize
          }px, ${
            Math.round(state.mouse.y / state.cellSize) * state.cellSize
          }px)`,
        }}
      >
        <VectorCells
          cells={pattern}
          cellSize={state.cellSize}
        />
      </div>
    }
  </main>
)
