const getLiveCells = ({ cells }) => {
  const indices = []
  cells.forEach(
    (column, x ) => {
      column.forEach(
        (cell, y) => { if (cell) indices.push({ x, y }) }
      )
    }
  )
  return indices
}


export default getLiveCells