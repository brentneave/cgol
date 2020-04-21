import { SetA, SetB, Init, Tick } from '/actions'
import { decodeNumberInput, unique } from '/utils'
import allLiveNeighbours from '/selectors/allLiveNeighbours'
import liveNeighbours from '../selectors/liveNeighbours'
// @ts-ignore
import utils from '/styles/utils.css'
import Cells from './cells';

// Root application view
export default state => (
  <main class={utils.container}>
    <h1>Do more with less</h1>
    <div className={utils.grid}>
      <input
        type="number"
        value={state.a}
        oninput={[SetA, decodeNumberInput]}
      />
      <input
        type="number"
        value={state.b}
        oninput={[SetB, decodeNumberInput]}
      />
    </div>
    <h2>
      {state.a} + {state.b} = {state.a + state.b}
    </h2>
    <button onclick={[Init, {n:50, x:80, y:80}]}>Init</button>
    <button onclick={[Tick]}>Tick</button>
    <Cells
      {...state}
    />
    {/* <h2>Live neighbours: { allLiveNeighbours({ ...state }).length }</h2> */}
    {/* <ul>
      {
        allLiveNeighbours({ ...state }).map(
          ({ x, y }) => <li>{x}, {y}</li>
        )
      }
    </ul> */}
    {/* <pre>
      <code>state: {JSON.stringify(state, null, 2)}</code>
    </pre> */}
  </main>
)
