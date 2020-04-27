import Randomise from '/actions/Randomise'
import MergePattern from '/actions/MergePattern'
import Start from '/actions/Start'
import Stop from '/actions/Stop'
import Tick from '/actions/Tick'
// @ts-ignore
import utils from '/styles/utils.css'
import RasterCells from '/components/RasterCells'
import VectorCells from '/components/VectorCells'

// Root application view
export default state => (
  <main class={utils.container}>
    <h1>Conway’s Game of Life, sort of</h1>
    <button 
      onclick={[
        Randomise,
        {
        }
      ]}
    >
      Randomise
    </button>
    <button
      onclick={[
        MergePattern,
        {
          xOffset: Math.floor(Math.random() * state.width),
          yOffset: Math.floor(Math.random() * state.height),
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
      {...state}
    />
  </main>
)
