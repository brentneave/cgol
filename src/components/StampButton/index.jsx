// @ts-nocheck
import VectorCells from '/components/VectorCells'

import style from './style.css'

const StampButton = ({
  isSelected = false, 
  stamp = [[]],
  DragPattern = () => {},
  DragPatternCancel = () => {}
} = {}) =>
  <button
    class={
      isSelected
        ? style.stampButtonSelected
        : style.stampButton
    }
    onclick={
      isSelected
      ? [
          DragPatternCancel,
          {}
        ]
      : [
          DragPattern,
          { pattern: stamp }
        ]
  }
  >
    <VectorCells
      cellSize={1}
      cells={stamp}
    />
  </button>


export default StampButton