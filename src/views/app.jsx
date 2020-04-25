import { SetA, SetB, Init, Start, Stop, Tick } from '/actions'
import getAllLiveCells from '/selectors/getAllLiveCells'

// @ts-ignore
import utils from '/styles/utils.css'
import Cells from './cells';

// Root application view
export default state => (
  <main class={utils.container}>
    <h1>Conway’s Game of Life, sort of</h1>
    <button onclick={[Init, {n:4000, x:80, y:80}]}>Init</button>    
    {
      state.isRunning
        ? [
            <button disabled>Tick</button>, 
            <button onclick={[Stop]}>Stop</button>
          ]
        : [
            <button onclick={[Tick]}>Tick</button>,
            <button onclick={[Start]}>Start</button>
          ]
    }
    <Cells
      {...state}
    />
  </main>
)
