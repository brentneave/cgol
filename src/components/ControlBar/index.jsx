// @ts-nocheck
import styles from './styles.css'

const ControlBar = ({
  isRunning,
  Reset,
  Randomise,
  Start,
  Stop,
  Tick
}) =>
  <div class={styles.controlBar}>
    {
      isRunning
        ? [
            <button class={styles.controlBarButton} onclick={[Stop]}>Stop</button>
          ]
        : [
            <button class={styles.controlBarButton} onclick={[Tick]}>Tick</button>,
            <button class={styles.controlBarButton} onclick={[Start]}>Start</button>,
          ]
    }
    <button class={styles.controlBarButton} onclick={[ Reset, {} ]}>
      Reset
    </button>
    <button class={styles.controlBarButton} onclick={[ Randomise, {} ]}>
      Random
    </button>
  </div>

export default ControlBar