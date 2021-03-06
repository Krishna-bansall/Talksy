import type { NextPage } from 'next'
import Image from 'next/image'
import { Card } from '../components/CardVariants'
import wave from '../public/Images/emojis/wave.svg'
import arrow from '../public/Images/icons/arrow.svg'
import IconButton from '../components/IconButton'

const Home: NextPage = () => {
  return (
    <div className="w-screen md:w-1/2">
      <Card>
        <div className="my-4 flex justify-center ">
          <Image src={wave} />
          <h1 className="ml-2 text-xl font-light md:text-2xl">
            Welcome to Talksy!
          </h1>
        </div>
        <div className="my-4 flex justify-center ">
          <p className="px-20 text-base text-txtSecondary md:text-lg">
            We're working hard to get Talksy ready for everyone! While we wrap
            up the finishing youches, we're adding people gradually to make sure
            nothing breaks :)
          </p>
        </div>
        <div className="my-4 flex justify-center ">
          <IconButton
            buttonText="Get Your Username"
            icon={arrow}
            route="/auth"
          />
        </div>
      </Card>
    </div>
  )
}

export default Home
