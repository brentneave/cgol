// @ts-nocheck
import cellsCreate from "/utils/cellsCreate"
import VectorCells from "/components/VectorCells"

import styles from './styles.css'

const RasterCells = ({
  canvasId, 
  cells, 
  cellSize,
  draggingPattern,
  DropPattern,
}) =>
  <canvas 
    class={styles.rasterCells}
    id={canvasId}
    width={cells.length * cellSize}
    height={cells[0].length * cellSize}
    onmousedown={[
      DropPattern,
      event => ({
        pattern: draggingPattern,
        xOffset: Math.round(event.offsetX / cellSize),
        yOffset: Math.round(event.offsetY / cellSize),
      })
    ]}
  ></canvas>


export default RasterCells