import cellsMap from './cellsMap'

const cellsRandomise = ({
  cells = [[]],
  chance = 1/10,
} = {}) => 
  cellsMap({
    cells,
    f: () => Math.random() < chance
  })

export default cellsRandomise