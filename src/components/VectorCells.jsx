import cellsMap from '/utils/cellsMap'

// @ts-nocheck
export default ({cells, cellSize}) =>
  <svg viewBox={`0 0 ${cells.length} ${cells[0].length}`}>
    {
      cellsMap({
        cells,
        f: ({ cell, x, y }) =>
          cell && 
            <rect
              x={x}
              y={y}
              width={1}
              height={1}
            />
      })
    }
  </svg>