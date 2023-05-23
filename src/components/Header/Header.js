import styles from './Header.module.css';

export default function Header() {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.links}>
        <li>
          <a href="@/pages/About/About">About</a>
        </li>
        <li>
          <a>Work</a>
        </li>
        <li>
          <a>Cool Stuff</a>
        </li>
      </ul>
    </div>
  );
}
