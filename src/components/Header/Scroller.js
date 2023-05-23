import react from 'react';
import styles from './Scroller.module.css';

export default function Scroller() {
  return (
    <div className={styles.scroller}>
      <span>
        cars <br />
        shoes <br />
        rap <br />
        coding
      </span>
    </div>
  );
}
