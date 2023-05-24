import react from 'react';
import styles from './Scroller.module.css';

export default function Scroller() {
  return (
    <div className={styles.scroller}>
      <span>
        cars. <br />
        sneakers. <br />
        rap. <br />
        the gym. <br />
        coding (duh).
      </span>
    </div>
  );
}
