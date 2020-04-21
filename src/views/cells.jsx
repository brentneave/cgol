const cellSize=10;
export default ({liveCells, width, height}) =>
  <div style={{
    height: `${cellSize * width}px`,
    width: `${cellSize * width}px`,
    position: 'relative',
  }}>
    {console.log('width', width)}
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