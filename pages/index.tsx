import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import List from '../components/List'
const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>JCDW</title>
        <meta name="description" content="Just click don't write!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <List/>
    </div>
  )
}

export default Home
