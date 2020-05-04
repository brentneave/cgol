import cellsMap from './cellsMap'

const cellsRandomise = ({
  cells = [[]],
  chance = 1/10,
} = {}) => 
  cellsMap(
    cells,
    () => Math.random() < chance
  )

export default cellsRandomise