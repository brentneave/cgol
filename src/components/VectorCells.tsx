import cellsMap from '/utils/cellsMap.ts'
import { Grid } from '/types'

type f = (
  {
    cells:Grid,
    cellSize:number
  }
) => any

const VectorCells:f = ({
  cells = [[]],
  cellSize = 1,
}) =>
  <svg
    fill="currentColor"
    viewBox={`0 0 ${cells.length} ${cells[0].length}`}
    width={cellSize * cells.length}
    height={cellSize * cells[0].length}
  >
    {
      cellsMap(
        cells,
        (cells, cell, x, y) =>
          cell
            ? <rect
                x={x}
                y={y}
                width={1}
                height={1}
              />
            : null
      )
    }
  </svg>

export default VectorCells
