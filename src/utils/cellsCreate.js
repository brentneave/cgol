// @ts-nocheck
const cellsCreate = ({
  width = 17, 
  height = 17,
} = {}) => 
  [...Array(width)].fill().map(
    () => [...Array(height)].fill().map(
      () => false
    )
  )

export default cellsCreate