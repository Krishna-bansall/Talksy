import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Navbar } from '../components/Navbar'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      Hello World
      <Navbar />
    </div>
  )
}

export default Home
