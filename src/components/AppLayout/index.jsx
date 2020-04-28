// @ts-nocheck
import styles from './styles.css'

const AppLayout=({
  main,
  bottomLeft,
  bottomRight,
  cursor
}) =>
  <div class={styles.appLayout}>
    <div class={styles.appLayout__main}>
      {main}
    </div>
    <div class={styles.appLayout__bottom}>
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