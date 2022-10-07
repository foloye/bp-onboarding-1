import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useEffect } from 'react'


const Home: NextPage = () => {

  const autoNav = () => {

  }
  const manNav = () => {
    
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Folasade App Pt.2</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="https://i.kym-cdn.com/entries/icons/original/000/027/486/Screen_Shot_2018-10-26_at_11.49.18_AM.jpg" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcomeeee Backkkkk, to Folasadeeeee&apos;s App!
        </h1>
        <button ><a href='/manual'>Manual</a></button>
        <button ><a href='/auto'>Auto</a></button>

        <div className={styles.grid}>
          
        </div>
      </main>

      {/* <Route path="/manual" element={<Manual/>} />
      <Route path="/auto" element={<Auto/>} /> */}

    </div>
    
  )
}

const Manual: NextPage = () => {
  

  return (
    <div className={styles.container}>
      <Head>
        <title>Manual</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="https://i.kym-cdn.com/entries/icons/original/000/027/486/Screen_Shot_2018-10-26_at_11.49.18_AM.jpg" />
      </Head>

      <main className={styles.main}>
        <h2>Manual Page</h2>
      </main>

      
    </div>
    
  )
}

const Auto: NextPage = () => {

  return (
    <div className={styles.container}>
      <Head>
        <title>Auto</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="https://i.kym-cdn.com/entries/icons/original/000/027/486/Screen_Shot_2018-10-26_at_11.49.18_AM.jpg" />
      </Head>

      <main className={styles.main}>
        <h2>Auto Page</h2>
      </main>

      
    </div>
    
  )
}


export default Home
