import Head from 'next/head'
import Image from 'next/image'
import { Hero, Slider, Instagram, Block } from '../components';

import { slides, snaps } from '../data';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Landex App</title>
        <meta name='' content='' />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero heading='Landex App' message='Decentralized marketplace for property.' />
      <Block />
      {/* <Slider slides={slides} />
      <Instagram snaps={snaps} /> */}
    </div>
  )
}
