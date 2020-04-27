export default ({cells, cellSize, width, height}) =>
  <svg width={cellSize * width} height={cellSize * height}>
    {
      cells.map(
        (column, x) => 
          column.map(
            (row, y) => 
              row && <rect
                x={cellSize * x}
                y={cellSize * y}
                width={cellSize}
                height={cellSize}
              />
          )
      )
    }
  </svg>