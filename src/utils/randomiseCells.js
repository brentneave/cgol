// @ts-nocheck
const randomiseCells = ({
  chanceOfSpawn = 1/10, 
  width = 240, 
  height = 160,
} = {}) => ({
  width,
  height,
  cells: [...Array(width)].fill().map(
    () => [...Array(height)].fill().map(
      () => Math.random() < chanceOfSpawn
    )
  )
})

export default randomiseCells