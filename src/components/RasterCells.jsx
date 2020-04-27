import cellsCreate from "/utils/cellsCreate";

export default ({canvasId, cells, cellSize}) =>
  <canvas 
    id={canvasId}
    width={cells.length * cellSize}
    height={cells[0].length * cellSize}
  ></canvas>