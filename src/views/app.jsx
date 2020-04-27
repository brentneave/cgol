import Randomise from '/actions/Randomise'
import SetPattern from '/actions/SetPattern'
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
    {console.log(state)}
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
        SetPattern,
        {
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
      Set Pattern
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
    <VectorCells
      {...state}
    />
  </main>
)
