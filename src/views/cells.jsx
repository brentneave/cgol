const cellSize = 4;
export default ({canvasId, cellSize, width, height}) =>
  <canvas 
    id={canvasId}
    width={width * cellSize}
    height={height * cellSize}
  ></canvas>