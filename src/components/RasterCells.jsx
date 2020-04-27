import cellsCreate from "/utils/cellsCreate";
import VectorCells from "./VectorCells";

export default ({
  canvasId, 
  cells, 
  cellSize,
  draggingPattern,
  onmousedown
}) =>
  <canvas 
    id={canvasId}
    width={cells.length * cellSize}
    height={cells[0].length * cellSize}
    onmousedown={onmousedown}
  ></canvas>