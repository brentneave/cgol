const cellSize=4;
export default ({cells, width, height}) =>
  <div style={{
    height: `${cellSize * width}px`,
    width: `${cellSize * width}px`,
    position: 'relative',
  }}>
    {cells.map(
      (column, x) => 
        column.map(
          (row, y) =>
            row && 
              <div style={{
                backgroundColor: 'black',
                height: `${cellSize}px`,
                left: `${x * cellSize}px`,
                top: `${y * cellSize}px`,
                position: 'absolute',
                width: `${cellSize}px`
              }} />
        )
    )}
  </div>