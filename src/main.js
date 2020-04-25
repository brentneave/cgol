import { app } from 'hyperapp'

// App init imports
import init from '/init'
import view from '/views/app'
import tick from '/subscriptions/tick'
import {Tick} from '/actions'

import '/styles/base.css'

// Initialize the app on the #app div
app({ 
  init, 
  view, 
  node: document.getElementById('app'),
  subscriptions: state => 
    state.isRunning 
      ? [tick, { action: Tick, time: 16.6667 } ]
      : []
})

// Enable the service worker when running the build command
// if (process.env.NODE_ENV === 'production') {
//   navigator.serviceWorker.register(`${window.location.origin}/sw.js`)
// }
