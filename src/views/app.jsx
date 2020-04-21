import { SetA, SetB, Init } from '/actions'
import { decodeNumberInput } from '/utils'
// @ts-ignore
import utils from '/styles/utils.css'

// Root application view
export default state => (
  <main class={utils.container}>
    {console.log(state)}
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
    <button onclick={[Init, {n:750, x:1000, y:1000}]}>Init</button>
    <pre>
      <code>state: {JSON.stringify(state, null, 2)}</code>
    </pre>
  </main>
)
