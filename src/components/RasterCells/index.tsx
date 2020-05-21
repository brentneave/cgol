import {Grid, Layer, Machine, Stamps} from '/types'
import {Component} from 'hyperapp'
import DropPattern from '/actions/DropPattern'
import styles from './styles.css'

const RasterCells: Component<{
  machine: Machine;
  layer: Layer;
  stamps: Stamps;
}> = ({
  machine,
  layer,
  stamps,
}) =>
  <canvas
    class={styles.rasterCells}
    id={layer.id}
    width={machine.cells.length * machine.cellSize}
    height={machine.cells[0].length * machine.cellSize}
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
            xOffset: Math.round(offsetX / machine.cellSize),
            yOffset: Math.round(offsetY / machine.cellSize),
          }),
        ]
        : null
    }
  />


export default RasterCells
