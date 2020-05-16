import {Component} from 'hyperapp'
import DragPattern from '/actions/DragPattern'
import DragPatternCancel from '/actions/DragPatternCancel'
import {Grid} from '/types'
import VectorCells from '/components/VectorCells'
import style from './style.css'

const StampButton: Component<{
  isSelected?: boolean;
  stamp?: Grid;
  title?: string;
}> = ({
  isSelected = false,
  stamp = [[]],
  title = '',
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
        ? [ DragPatternCancel ]
        : [ DragPattern, stamp ]
    }
  >
    <VectorCells
      cellSize={2}
      cells={stamp}
    />
  </button>


export default StampButton
