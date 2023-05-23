import react from 'react';
import Image from 'next/image';
import Scroller from './Scroller';

export default function Header() {
  return (
    <header>
      <h1>
        HI IM BENJAMIN HUANG I LIKE
        <Scroller />
      </h1>
      <Image
        src="https://canary---yellow.com/wp-content/themes/virgilabloh/images/hammer-trasp.gif"
        alt="work in progress"
        width={100}
        height={100}
      />
    </header>
  );
}
