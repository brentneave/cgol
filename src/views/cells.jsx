const cellSize = 4;
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
                borderRadius: '2px',
                height: `${cellSize}px`,
                left: 0,
                top: 0,
                transform: `translate(${x * cellSize}px, ${y * cellSize}px)`,
                position: 'absolute',
                width: `${cellSize}px`
              }} />
        )
    )}
  </div>