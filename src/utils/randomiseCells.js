// @ts-nocheck
const randomiseCells = ({
  chanceOfSpawn, 
  width, 
  height
}) => ({
  width,
  height,
  cells: [...Array(width)].fill().map(
    () => [...Array(height)].fill().map(
      () => Math.random() < chanceOfSpawn
    )
  )
})

export default randomiseCells