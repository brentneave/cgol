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

const pattern = [
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0],
  [0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0],
  [0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0],
  [0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0],
  [0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0],
  [0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0],
  [0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
]


// Root application view
export default state => (
  <main class={utils.container}>
    {/* { console.log(getAllLiveCells({ ...state }).length, state) } */}
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
        DropPattern,
        {
          xOffset: Math.floor(Math.random() * state.cells.length),
          yOffset: Math.floor(Math.random() * state.cells[0].length),
          pattern: 
            [
              [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
              [0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0],
              [0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0],
              [0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0],
              [0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0],
              [0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0],
              [0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0],
              [0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0],
              [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
              // [0,0,0,0,0,0,0,0,0,0,0],
              // [0,0,0,0,0,1,0,0,0,0,0],
              // [0,0,0,0,1,0,1,0,0,0,0],
              // [0,0,0,0,0,0,0,0,0,0,0],
              // [0,0,0,0,0,0,0,0,0,0,0],
              // [0,0,0,0,1,1,1,0,0,0,0],
              // [0,0,0,0,1,1,1,0,0,0,0],
              // [0,0,0,0,0,1,0,0,0,0,0],
              // [0,0,0,0,0,0,0,0,0,0,0],
              // [0,0,0,0,0,0,0,0,0,0,0],
              // [0,0,0,0,0,1,0,0,0,0,0],
              // [0,0,0,0,1,1,1,0,0,0,0],
              // [0,0,0,0,1,1,1,0,0,0,0],
              // [0,0,0,0,0,0,0,0,0,0,0],
              // [0,0,0,0,0,0,0,0,0,0,0],
              // [0,0,0,0,1,0,1,0,0,0,0],
              // [0,0,0,0,0,1,0,0,0,0,0],
              // [0,0,0,0,0,0,0,0,0,0,0],
            ]
        }
      ]}>
      Add Pattern
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
  </main>
)
