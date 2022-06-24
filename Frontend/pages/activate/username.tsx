import React, { useState } from 'react'
import { Card } from '../../components/CardVariants'
import Image from 'next/image'

import coolEmoji from '../../public/Images/emojis/coolEmoji.svg'
import Input from '../../components/Input'
import IconButton from '../../components/IconButton'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import arrow from '../../public/Images/icons/arrow.svg'
import { setUsername } from '../../redux/Activate/userActivationSlice'
import { useRouter } from 'next/router'
import { activate } from '../../api'

const index = () => {
  const [text, setText] = useState('')

  const type = useSelector((state: RootState) => state.type.value)
  const activateData = useSelector((state: RootState) => state.activate.data)

  const router = useRouter()
  const dispatch = useDispatch()

  const handleClick = async (e: React.MouseEvent<HTMLElement>) => {
    dispatch(setUsername(text))
    router.push('/activate/pfp')
  }

  const handleApiClick = async () => {
    await activate(activateData)
  }

  // if (auth.auth)
  return (
    <div className="flex w-full flex-col md:w-1/2">
      <div className="w-full">
        <Card>
          <div className="my-4 flex justify-center ">
            <Image src={coolEmoji} />
            <h1 className="ml-2 text-xl font-semibold md:text-2xl">
              Pick A Username
            </h1>
          </div>
          <div className="my-4 flex justify-center ">
            <Input
              type="text"
              onChange={(e) => setText(e.target.value)}
              placeholder="@"
            />
          </div>

          <div className="my-4 flex justify-center ">
            <p className="px-21 text-sm text-txtSecondary md:text-base">
              Username is used for Login{' '}
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
            <IconButton
              buttonText="check api out"
              icon={arrow}
              // route={selectedState === 'otp' ? '/auth/otp' : ''}
              onClick={(e) => handleApiClick()}
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
