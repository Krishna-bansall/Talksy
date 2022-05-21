import type { NextPage } from 'next'
import Image from 'next/image'
import { Card } from '../components/CardVariants'
import wave from '../public/Images/emojis/wave.svg'
import IconButton from '../.history/components/IconButton_20220519152439'

const Home: NextPage = () => {
  return (
    <Card>
      <div className="my-4 flex justify-center ">
        <Image src={wave} />
        <h1 className="ml-2 text-2xl font-light">Welcome to Talksy!</h1>
      </div>
      <div className="my-4 flex justify-center ">
        <p className="px-10 text-txtSecondary">
          We’re working hard to get Talksy ready for everyone! While we wrap up
          the finishing youches, we’re adding people gradually to make sure
          nothing breaks :)
        </p>
      </div>
      <div className="my-4 flex justify-center ">
        <IconButton buttonText="Yahoo" Icon={wave} />
      </div>
    </Card>
  )
}

export default Home
