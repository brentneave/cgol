import { app } from 'hyperapp'

// App init imports
import init from '/init'
import view from '/views/app'

import animationFrame from '/subscriptions/animationFrame'
import mouseMove from '/subscriptions/mouseMove'
import windowResize from '/subscriptions/windowResize'


import MouseMoved from '/actions/MouseMoved'
import SetSize from '/actions/SetSize'
import Tick from '/actions/Tick'


import '/styles/base.css'

// Initialize the app on the #app div
app({
  init,
  view,
  node: document.getElementById('app'),
  subscriptions:
    state => [
      state.machine.isRunning && [animationFrame, { action: Tick } ],
      [mouseMove, { action: MouseMoved }],
      [windowResize, { action: SetSize, canvasId: state.render.canvasId }]
    ]
})

// Enable the service worker when running the build command
// if (process.env.NODE_ENV === 'production') {
//   navigator.serviceWorker.register(`${window.location.origin}/sw.js`)
// }
