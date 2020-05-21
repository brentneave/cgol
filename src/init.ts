import {cellsRotate180, cellsRotate270, cellsRotate90} from '/utils/cellsRotate.ts'
import {State} from '/types'
import TwoEngineCorderShip from '/stamps/TwoEngineCorderShip'
import cellsCreate from '/utils/cellsCreate'
import gosperGliderGun from '/stamps/gosperGliderGun'
import pulsar from '/stamps/pulsar'
import rPentomino from '/stamps/rPentomino'

const gosperGliderGun90 = cellsRotate90(gosperGliderGun)
const gosperGliderGun180 = cellsRotate180(gosperGliderGun)
const gosperGliderGun270 = cellsRotate270(gosperGliderGun)

const init: State = {
  machine: {
    ...cellsCreate({chance: 0.2}),
    cellSize: 4,
    isRunning: true,
  },
  stamps: {
    available: [
      gosperGliderGun,
      pulsar,
      rPentomino,
      TwoEngineCorderShip,
      gosperGliderGun90,
      gosperGliderGun180,
      gosperGliderGun270,
    ],
    isDragging: true,
    isPanelOpen: false,
  },
  layers: [{
    id: 'layer-0',
    foregroundColor: 'rgba(255, 200, 0, 1)',
    backgroundColor: 'rgba(255, 60, 0, 0.1)',
    trails: true,
  }, {
    id: 'layer-1',
    foregroundColor: 'rgba(255, 255, 255, 1)',
    backgroundColor: 'rgba(0,0,0,0)',
    trails: false,
  }],
  mouse: {position: {x: 0, y: 0}},
}

export default init
