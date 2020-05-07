import { Machine, Render, Stamps } from '/types'

// @ts-ignore
import styles from './styles.css'

type f = (
  DropPattern,
  machine:Machine,
  render:Render,
  stamps:Stamps
) => any

const RasterCells:f = ({
  DropPattern,
  machine,
  render,
  stamps,
}) =>
  <canvas
    class={styles.rasterCells}
    id={render.canvasId}
    width={machine.cells.length * machine.cellSize}
    height={machine.cells[0].length * machine.cellSize}
    onmousedown={
      stamps.isDragging
      ? [
          DropPattern,
          event => ({
            pattern: stamps.selected,
            xOffset: Math.round(event.offsetX / machine.cellSize),
            yOffset: Math.round(event.offsetY / machine.cellSize),
          })
        ]
      : null
    }
  />


export default RasterCells
