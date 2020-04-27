// @ts-nocheck
export default ({cells, cellSize, width, height}) =>
  <svg viewBox={`0 0 ${width} ${height}`}>
    {
      cells.map(
        (column, x) => 
          column.map(
            (row, y) => 
              row && <rect
                x={x}
                y={y}
                width={1}
                height={1}
              />
          )
      )
    }
  </svg>