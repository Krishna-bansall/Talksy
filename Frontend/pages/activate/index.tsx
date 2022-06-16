import React, { useState } from 'react'
import { Card } from '../../components/CardVariants'
import Image from 'next/image'

import coolEmoji from '../../public/Images/emojis/coolEmoji.svg'
import Input from '../../components/Input'
import IconButton from '../../components/IconButton'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import arrow from '../../public/Images/emojis/arrow.svg'
import { setName } from '../../redux/Auth/userActivationSlice'
import { useRouter } from 'next/router'

const index = () => {
  const [text, setText] = useState('')

  const type = useSelector((state: RootState) => state.type.value)
  const auth = useSelector((state: RootState) => state.auth.data)

  const router = useRouter()
  const dispatch = useDispatch()

  const handleClick = async (e: React.MouseEvent<HTMLElement>) => {
    dispatch(setName(text))
    router.push('/activate/pfp')
  }

  // if (auth.auth)
  return (
    <div className="flex w-full flex-col md:w-1/2">
      <div className="w-full">
        <Card>
          <div className="my-4 flex justify-center ">
            <Image src={coolEmoji} />
            <h1 className="ml-2 text-xl font-semibold md:text-2xl">
              What's Your Full Name?
            </h1>
          </div>
          <div className="my-4 flex justify-center ">
            <Input
              type="text"
              onChange={(e) => setText(e.target.value)}
              placeholder="Your name"
            />
          </div>

          <div className="my-4 flex justify-center ">
            <p className="px-21 text-sm text-txtSecondary md:text-base">
              People Use Real Names at Talksy :)
            </p>
          </div>
          <div className="my-4 flex justify-center ">
            <IconButton
              buttonText="Next"
              disabled={text.length < 3}
              icon={arrow}
              // route={selectedState === 'otp' ? '/auth/otp' : ''}
              onClick={(e) => handleClick(e)}
            />
          </div>
        </Card>
      </div>
    </div>
  )
  // else {
  //   return <h1>Please Verify Otp First</h1>
  // }
}

export default index
