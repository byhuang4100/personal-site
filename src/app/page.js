// import Image from 'next/image';
import styles from './page.module.css';
import Header from '@/components/Header/Header';
import Card from '@/components/Card/Card';
import Image from 'next/image';

export default function Home() {
  return (
    <div className={styles.body}>
      {/* <Header /> */}
      <Card />
      <div>HELLO</div>
    </div>
  );
}
