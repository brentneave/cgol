// State transitions
export const SetA = (state, a) => ({ ...state, a })
export const SetB = (state, b) => ({ ...state, b })


export const Init = (state, {n, x, y}) => ({
  ...state,
  width: x,
  height: y,
  liveCells: [...Array(n)].map(
    el => ({
      x: Math.round(Math.random() * x),
      y: Math.round(Math.random() * y)
    })
  )
})