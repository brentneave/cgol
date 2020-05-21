import './styles/base.css'
import animationFrame from '/subscriptions/animationFrame'
import {app} from 'hyperapp'
import init from '/init'
import mouseMove from '/subscriptions/mouseMove'
// eslint-disable-next-line sort-imports
import MouseMoved from '/actions/MouseMoved'
import SetSize from '/actions/SetSize'
import Tick from '/actions/Tick'
import view from '/views/app'
import windowResize from '/subscriptions/windowResize'

// Initialize the app on the #app div
app({
  init,
  view,
  node: document.getElementById('app'),
  subscriptions:
    state => [
      state.machine.isRunning && [animationFrame, {action: Tick} ],
      [mouseMove, {action: MouseMoved}],
      [windowResize, {action: SetSize, canvasId: state.layers[0].id}],
    ],

})

// Enable the service worker when running the build command
// if (process.env.NODE_ENV === 'production') {
//   navigator.serviceWorker.register(`${window.location.origin}/sw.js`)
// }
