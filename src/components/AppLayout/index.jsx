// @ts-nocheck
import styles from './styles.css'

const AppLayout=({
  canvas,
  bottomLeft,
  bottomRight,
  stampPanel,
  cursor,
}) =>
  <div class={styles.appLayout}>
    <div class={styles.appLayout__canvas}>
      {canvas}
    </div>
    <div class={styles.appLayout__bottom}>
      <div class={styles.appLayout__stampPanel}>
        {stampPanel}
      </div>
      <div class={styles.appLayout__bottomLeft}>
        {bottomLeft}
      </div>
      <div class={styles.appLayout__bottomRight}>
        {bottomRight}
      </div>
    </div>
    <div class={styles.cursor}>
      {cursor}
    </div>
  </div>

export default AppLayout