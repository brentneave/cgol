// @ts-nocheck
import VectorCells from '/components/VectorCells'

import style from './style.css'

const StampButton = ({
  isSelected = false, 
  stamp = [[]],
  DragPattern = () => {},
  DragPatternCancel = () => {},
  title = ""
} = {}) =>
  <button
  title={title}
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
      cellSize={2}
      cells={stamp}
    />
  </button>


export default StampButton