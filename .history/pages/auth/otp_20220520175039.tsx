import React from 'react'
import { Card } from '../../components/CardVariants'
import IconButton from '../../components/IconButton'
import lock from '../../public/Images/emojis/lock.svg'
import arrow from '../../public/Images/emojis/arrow.svg'
import Image from 'next/image'

const otp = () => {
  return (
    <div className="w-screen md:w-1/2">
      <Card>
        <div className="my-4 flex justify-center ">
          <Image src={lock} />
          <h1 className="ml-2 text-xl font-light md:text-2xl">
            Enter your OTP{' '}
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
          <IconButton buttonText="Verify" icon={arrow} route="/auth" />
        </div>
      </Card>
    </div>
  )
}

export default otp
