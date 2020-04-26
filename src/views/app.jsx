import Randomise from '/actions/Randomise'
import Start from '/actions/Start'
import Stop from '/actions/Stop'
import Tick from '/actions/Tick'
// @ts-ignore
import utils from '/styles/utils.css'
import Cells from './cells';

// Root application view
export default state => (
  <main class={utils.container}>
    <h1>Conway’s Game of Life, sort of</h1>
    <button 
      onclick={[
        Randomise,
        {
          chanceOfSpawn: 1/3,
          width: 320,
          height: 240
        }
      ]}
    >
      Randomise
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
    <Cells
      {...state}
    />
  </main>
)
