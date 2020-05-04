import { app } from 'hyperapp'

// App init imports
import init from '/init'
import view from '/views/app'

import animationFrame from '/subscriptions/animationFrame'
import machine from '/subscriptions/machine'
import mouseMove from '/subscriptions/mouseMove'

import MouseMoved from '/actions/MouseMoved'
import Tick from '/actions/Tick'
import OnMachineUpdate from '/actions/OnMachineUpdate'


import '/styles/base.css'

// Initialize the app on the #app div
app({ 
  init, 
  view, 
  node: document.getElementById('app'),
  subscriptions:
    state => [
      state.isRunning && [animationFrame, { action: Tick } ],
      [mouseMove, { action: MouseMoved }],
      [machine, { onCellUpdate: OnMachineUpdate }]
    ]
})

// Enable the service worker when running the build command
// if (process.env.NODE_ENV === 'production') {
//   navigator.serviceWorker.register(`${window.location.origin}/sw.js`)
// }
