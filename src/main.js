import { app } from 'hyperapp'
import { onMouseMove } from '@hyperapp/events'

// App init imports
import init from '/init'
import view from '/views/app'
import animationFrame from '/subscriptions/animationFrame'
import Tick from '/actions/Tick'


import '/styles/base.css'

// Initialize the app on the #app div
app({ 
  init, 
  view, 
  node: document.getElementById('app'),
  subscriptions:
    state => [
      state.isRunning &&
      [animationFrame, { action: Tick } ],
    ]
})

// Enable the service worker when running the build command
// if (process.env.NODE_ENV === 'production') {
//   navigator.serviceWorker.register(`${window.location.origin}/sw.js`)
// }
