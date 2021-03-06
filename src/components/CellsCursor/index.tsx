import {Grid, Mouse} from '/types'
import {Component} from 'hyperapp'
import VectorCells from '/components/VectorCells.tsx'

const CellsCursor: Component<{
  cellSize: number;
  draggingPattern: Grid;
  mouse: Mouse;
}> = ({
  cellSize,
  draggingPattern,
  mouse,
}) =>
  <div
    style={{
      color: 'white',
      width: '100px',
      height: '100px',
      position: 'fixed',
      left: 0,
      pointerEvents: 'none',
      top: 0,
      transform: `translate(${
        Math.round(mouse.position.x / cellSize) * cellSize
      }px, ${
        Math.round(mouse.position.y / cellSize) * cellSize
      }px)`,
    }}
  >
    <VectorCells
      cells={draggingPattern}
      cellSize={cellSize}
    />
  </div>

export default CellsCursor
