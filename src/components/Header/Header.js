import Image from 'next/image';
import drawk from '../../../public/drawk.png';
import styles from './Header.module.css';

export default function Header() {
  return (
    <div className={styles.wrapper}>
      <Image
        className={styles.me}
        src={drawk}
        alt="me"
        width={100}
        height={100}
      />
      <ul className={styles.links}>
        <li>
          <a href="#">Cool Stuff</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
      </ul>
    </div>
  );
}
