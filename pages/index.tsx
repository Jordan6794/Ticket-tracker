import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Homepage from '../components/Homepage'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bug Tracker</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Homepage />
    </div>
  )
}

export default Home
