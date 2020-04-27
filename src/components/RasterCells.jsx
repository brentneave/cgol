import cellsCreate from "/utils/cellsCreate";

export default ({
  canvasId, 
  cells, 
  cellSize,
  onmousedown
}) =>
  <canvas 
    id={canvasId}
    width={cells.length * cellSize}
    height={cells[0].length * cellSize}
    onmousedown={onmousedown}
  ></canvas>