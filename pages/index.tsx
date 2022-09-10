import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>{"Eve's Fermentation Lab"}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className='text-orange-700'>{"Eve's Fermentation Lab"}</h1>
      </main>
    </div>
  )
}

export default Home
