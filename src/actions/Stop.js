const Stop = (state) => [
  {
    debug: console.log('Stop'),
    ...state,
    isRunning: false,
  }
]

export default Stop