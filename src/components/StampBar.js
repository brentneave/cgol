// @ts-nocheck
import gosperGliderGun from '/stamps/gosperGliderGun'
import pulsar from '/stamps/pulsar'

import VectorCells from './VectorCells'

const StampBar = ({ DragPattern }) =>
  <div>
    <button
      onclick={[
        DragPattern,
        { pattern: pulsar }
      ]}
    >
      <VectorCells
        cellSize={1}
        cells={pulsar}
      />
    </button>
    <button
      onclick={[
        DragPattern,
        { pattern: gosperGliderGun }
      ]}
    >
      <VectorCells
        cellSize={1}
        cells={gosperGliderGun}
      />
    </button>
  </div>

export default StampBar