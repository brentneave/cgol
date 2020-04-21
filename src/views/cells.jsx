const cellSize=4;
export default ({liveCells, width, height}) =>
  <div style={{
    height: `${cellSize * width}px`,
    width: `${cellSize * width}px`,
    position: 'relative',
  }}>
    {liveCells.map(
      cell => 
        <div style={{
          backgroundColor: 'black',
          height: `${cellSize}px`,
          left: `${cell.x * cellSize}px`,
          top: `${cell.y * cellSize}px`,
          position: 'absolute',
          width: `${cellSize}px`
        }} />
    )}
  </div>