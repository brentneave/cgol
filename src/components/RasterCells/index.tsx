import {Grid, Layer, Machine, Stamps} from '/types'
import {Component} from 'hyperapp'
import DropPattern from '/actions/DropPattern'
import styles from './styles.css'

const RasterCells: Component<{
  layer: Layer;
  machine: Machine;
  stamps: Stamps;
}> = ({
  layer,
  machine,
  stamps,
}) =>
  <canvas
    class={styles.rasterCells}
    id={layer.id}
    style={{
      width: `${machine.cells.length * machine.scale}px`,
      height: `${machine.cells[0].length * machine.scale}px`,
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
            xOffset: Math.round(offsetX / machine.scale),
            yOffset: Math.round(offsetY / machine.scale),
          }),
        ]
        : null
    }
  />


export default RasterCells
