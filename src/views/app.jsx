import { Randomise, Start, Stop, Tick } from '/actions'

// @ts-ignore
import utils from '/styles/utils.css'
import Cells from './cells';

// Root application view
export default state => (
  <main class={utils.container}>
    { console.log(state) }
    <h1>Conway’s Game of Life, sort of</h1>
    <button 
      onclick={[
        Randomise,
        {
          chanceOfSpawn: 0.75,
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
