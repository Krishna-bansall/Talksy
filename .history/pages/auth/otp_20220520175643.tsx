import React, { useState } from 'react'
import { Card } from '../../components/CardVariants'
import IconButton from '../../components/IconButton'
import lock from '../../public/Images/emojis/lock.svg'
import arrow from '../../public/Images/emojis/arrow.svg'
import Image from 'next/image'

const otp = () => {
  const [otp, setOtp] = useState<number>(1234)

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
          <Input
            type="tel"
            onChange={(e) => setText(e.target.value)}
            placeholder="9711010110"
          />
        </div>
        <div className="my-4 flex justify-center ">
          <IconButton
            buttonText="Next"
            icon={arrow}
            route="/auth/otp"
            onClick={(e) => handleClick(e)}
          />
        </div>
        <p className="px-20 text-sm text-txtSecondary md:text-base">
          By entering your number, you're agreeing to our Terms of Service and
          Privacy Policy. Thanks!
        </p>
      </Card>
    </div>
  )
}

export default otp