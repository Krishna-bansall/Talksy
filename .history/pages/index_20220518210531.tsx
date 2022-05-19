import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Card } from '../components/CardVariants'
import wave from '../public/Images/emojis/wave.svg'
const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Card heading="Lets go" emoji={wave}></Card>
    </div>
  )
}

export default Home
