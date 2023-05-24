/* eslint-disable react/no-unescaped-entities */
import react from 'react';
import Image from 'next/image';
import Scroller from '../Scroller/Scroller';
import styles from './Card.module.css';

export default function Card() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.intro}>
        <h1>
          Hey, I'm Ben.
          <br />
          I like
          <Scroller />
        </h1>
        ‍
        <div className={styles.txt}>
          I am a fullstack engineer that loves to build cool stuff.
          <br />
          ‍
          <br />
          Currently, I am working on a few projects that I am excited to share
          with you soon.
        </div>
      </div>
      <div className={styles.line}></div>
    </div>
  );
}
