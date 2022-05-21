import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Card } from '../components/CardVariants'
import wave from '../public/Images/emojis/wave.svg'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Card>
        <div className="my-4 flex justify-center ">
          <Image src={wave} />
          <h1 className="ml-2 text-2xl font-bold">Welcome to Talksy!</h1>
        </div>
        <div className="my-4 flex justify-center ">
          <h1 className="px-10 text-txtSecondary">
            We’re working hard to get Talksy ready for everyone! While we wrap
            up the finishing youches, we’re adding people gradually to make sure
            nothing breaks :)
          </h1>
        </div>
      </Card>
    </div>
  )
}

export default Home
