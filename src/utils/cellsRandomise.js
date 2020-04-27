const cellsRandomise = ({
  cells = [[]],
  chance = 1/2,
} = {}) => 
  cells.map(
    (column) => 
      column.map(
        () => Math.random() < chance
      )
  )

export default cellsRandomise