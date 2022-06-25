import React, { useEffect, useState } from 'react'
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
import { AxiosError, AxiosResponse } from 'axios'

import toast, { Toaster } from 'react-hot-toast'
import { errorLoginToast } from '../../components/NotificationToasts'

const index = () => {
  const [text, setText] = useState('')

  const [apiRes, setApiRes] = useState<AxiosResponse<any, any>>()
  const [apiError, setApiError] = useState<AxiosError<any, any>>()

  const type = useSelector((state: RootState) => state.type.value)
  const activateData = useSelector((state: RootState) => state.activate.data)

  const router = useRouter()
  const dispatch = useDispatch()

  const handleClick = async (e: React.MouseEvent<HTMLElement>) => {
    dispatch(setUsername(text))
    router.push('/activate/pfp')
  }

  const handleApiClick = async (e: any) => {
    // activate(activateData).then((res) => console.log(res))
    try {
      setApiRes(await activate(activateData))
    } catch (error) {
      if (error) setApiError(error as AxiosError<any, any>)
      // console.log(error as AxiosError<any, any>)
    }
  }

  useEffect(() => {
    console.log()
    if (apiError?.response?.status === 401) {
      errorLoginToast('Login Expired')
    } else if (apiError) errorLoginToast('Something Went Wrong')

    // errorLoginToast(apiRes as .message)
    // return () => {
    //   second
    // }
  }, [apiRes, apiError])

  // if (auth.auth)
  return (
    <div className="flex w-full flex-col md:w-1/2">
      <div className="w-full">
        <Toaster />
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
              onClick={(e) => handleApiClick(e)}
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
