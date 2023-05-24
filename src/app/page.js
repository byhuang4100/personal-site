// import Image from 'next/image';
import styles from './page.module.css';
import Header from '@/components/Header/Header';
import Card from '@/components/Card/Card';
import Image from 'next/image';

export default function Home() {
  return (
    <div className={styles.body}>
      <Card />
      {/* <Header /> */}
      <div>HELLO</div>
      <Image
        src="https://canary---yellow.com/wp-content/themes/virgilabloh/images/hammer-trasp.gif"
        alt="work in progress"
        width={100}
        height={100}
      />
    </div>
  );
}
