import { VNode } from 'hyperapp'

import { Grid } from '/types'

import cellsMapT from '/utils/cellsMapT'

type f = (
  {
    cells: Grid,
    cellSize: number
  }
) => VNode

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
      cellsMapT<VNode>(
        cells,
        (cells, cell, x, y) =>
          cell.alive
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
