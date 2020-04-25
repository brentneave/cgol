import cellShouldSurvive from "./cellShouldSurvive"

const survive = ({ cells }) => 
  cells.map(
    (column, x) =>
      column.map(
        (cell, y) => 
          cellShouldSurvive({ cells, x, y})
      )
  )
  
export default survive