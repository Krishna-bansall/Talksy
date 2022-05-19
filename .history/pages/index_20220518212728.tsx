import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Card } from '../components/CardVariants'
import wave from '../public/Images/emojis/wave.svg'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Card>
        <div className="my-4 flex justify-center bg-bgSecondary">
          <h1 className="font-bold">Welcome To Talksy</h1>
          <Image src={wave}></Image>
        </div>
        <div className="my-4 flex justify-center bg-bgSecondary">
          <h1 className="text-txtSecondary">Welcome To Talksy</h1>
        </div>
      </Card>
    </div>
  )
}

export default Home