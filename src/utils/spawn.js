import cellShouldSpawn from "./cellShouldSpawn"

const spawn = ({ cells }) => 
  cells.map(
    (column, x) =>
      column.map(
        (cell, y) => 
          cellShouldSpawn({ cells, x, y})
      )
  )
  
export default spawn