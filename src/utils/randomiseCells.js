// @ts-nocheck
const randomiseCells = ({
  chanceOfSpawn = .75, 
  width = 320, 
  height = 240,
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