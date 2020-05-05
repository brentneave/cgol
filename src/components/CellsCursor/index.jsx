import VectorCells from '/components/VectorCells'

const CellsCursor = ({
  cellSize,
  draggingPattern,
  mouse
}) =>
  <div 
    style={{
      color: 'rgba(255,60,0,0.75)',
      width: `100px`,
      height: `100px`,
      position: 'fixed',
      left: 0,
      pointerEvents: 'none',
      top: 0,
      transform: `translate(${
        Math.round(mouse.x / cellSize) * cellSize
      }px, ${
        Math.round(mouse.y / cellSize) * cellSize
      }px)`,
    }}
  >
    <VectorCells
      cells={draggingPattern}
      cellSize={cellSize}
    />
  </div>

export default CellsCursor