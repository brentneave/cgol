import {Canvas, Grid, Machine, Stamps} from '/types'
import {Component} from 'hyperapp'
import DropPattern from '/actions/DropPattern'
import styles from './styles.css'

const RasterCells: Component<{
  canvas: Canvas;
  machine: Machine;
  stamps: Stamps;
}> = ({
  canvas,
  machine,
  stamps,
}) =>
  <canvas
    class={styles.rasterCells}
    id={canvas.id}
    style={{
      width: `${machine.cells.length * canvas.scale}px`,
      height: `${machine.cells[0].length * canvas.scale}px`,
    }}
    width={machine.cells.length}
    height={machine.cells[0].length}
    onmousedown={
      stamps.isDragging
        ? [
          DropPattern,
          ({
            offsetX,
            offsetY,
          }: {
            offsetX: number;
            offsetY: number;
          }): {
            pattern: Grid;
            xOffset: number;
            yOffset: number;
          } => ({
            pattern: stamps.selected,
            xOffset: Math.round(offsetX / canvas.scale),
            yOffset: Math.round(offsetY / canvas.scale),
          }),
        ]
        : null
    }
  />


export default RasterCells
