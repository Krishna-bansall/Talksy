import React, { useState } from 'react'
import Image from 'next/image'
import { useSelector, useDispatch } from 'react-redux'

import { Card } from '../../components/CardVariants'
import IconButton from '../../components/IconButton'
import Input from '../../components/Input'

import lock from '../../public/Images/emojis/lock.svg'
import arrow from '../../public/Images/emojis/arrow.svg'
import { RootState } from '../../redux/store'

const otp = () => {
  const type = useSelector((state: RootState) => state.type.value)

  const [otp, setOtp] = useState<string>('1234')
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {}

  if (type === 'otp')
    return (
      <div className="w-screen md:w-1/2">
        <div className="w-full">
          <Card>
            <div className="my-4 flex justify-center ">
              <Image src={lock} />
              <h1 className="ml-2 text-xl font-semibold md:text-2xl">
                Enter your OTP{' '}
              </h1>
            </div>

            <div className="my-4 flex justify-center ">
              <Input
                type="number"
                onChange={(e) => setOtp(e.target.value)}
                placeholder="123456"
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
              By entering your number, you're agreeing to our Terms of Service
              and Privacy Policy. Thanks!
            </p>
          </Card>
        </div>
      </div>
    )
}

export default otp
