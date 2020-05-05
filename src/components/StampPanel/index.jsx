// @ts-ignore
import style from './style.css'

import StampButton from '/components/StampButton'

import gosperGliderGun from '/stamps/gosperGliderGun'
import pulsar from '/stamps/pulsar'
import rPentomino from '/stamps/rPentomino'
import TwoEngineCorderShip from '/stamps/TwoEngineCorderShip'

import { 
  cellsRotate90,
  cellsRotate180,
  cellsRotate270
} from '/utils/cellsRotate'

const gosperGliderGun90 = cellsRotate90(gosperGliderGun)
const gosperGliderGun180 = cellsRotate180(gosperGliderGun)
const gosperGliderGun270 = cellsRotate270(gosperGliderGun)

const StampPanel = ({
  DragPattern = undefined,
  DragPatternCancel = undefined,
  draggingPattern = undefined,
  isStampPanelOpen = false,
}={}) =>
  <div class={isStampPanelOpen ? style.stampPanelOpen : style.stampPanel}>
    {
      [
        {stamp: gosperGliderGun90, title: 'Shoots gliders up and to the left'},
        {stamp: gosperGliderGun, title: 'Shoots gliders up and to the right'},
        {stamp: gosperGliderGun180, title: 'Shoots gliders down and to the left'},
        {stamp: gosperGliderGun270, title: 'Shoots gliders down and to the right'},
        {stamp: pulsar, title: 'Pulsates, explodes when touched'},
        {stamp: rPentomino, title: 'Explodes'},
        {stamp: TwoEngineCorderShip, title: 'Shambles'}
      ].map(
        ({ stamp, title }) => 
          <div class={style.stampPanelButton}>
            <StampButton
              isSelected={draggingPattern === stamp}
              stamp={stamp}
              DragPattern={DragPattern}
              DragPatternCancel={DragPatternCancel}
              title={title}
            />
          </div>
      )
    }
  </div>

export default StampPanel