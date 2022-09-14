import Head from 'next/head'
import Image from 'next/image'
import { Hero, Slider } from '../components';

import sliderData from '../data';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Landex App</title>
        <meta name='' content='' />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero heading='Landex App' message='Decentralized marketplace for property.' />
      <Slider data={sliderData} />
    </div>
  )
}
