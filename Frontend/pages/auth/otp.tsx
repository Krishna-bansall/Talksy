import React, { useState } from 'react'
import Image from 'next/image'
import { useSelector, useDispatch } from 'react-redux'

import { Card } from '../../components/CardVariants'
import IconButton from '../../components/IconButton'
import Input from '../../components/Input'

import lock from '../../public/Images/emojis/lock.svg'
import arrow from '../../public/Images/emojis/arrow.svg'
import { RootState } from '../../redux/store'
import LinkElement from '../../components/LinkElement'
import { verifyOtp } from '../../api/index'
import { setApiData } from '../../redux/Auth/authDataSlice'
import { useRouter } from 'next/router'

const otp = () => {
  const type = useSelector((state: RootState) => state.type.value)
  const auth = useSelector((state: RootState) => state.auth.data)

  const router = useRouter()

  const [otp, setOtp] = useState<string>('1234')
  const dispatch = useDispatch()

  const handleClick = async (e: React.MouseEvent<HTMLElement>) => {
    console.log({ ...auth.data })
    const res = await verifyOtp({ ...auth.data, otp })
    if (res.status === 200) {
      console.log(res)
      dispatch(setApiData({ ...res.data }))
      router.push('/activate')
    }
  }

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
                buttonText="Validate"
                icon={arrow}
                route="/auth/otp"
                disabled={otp.length !== 6}
                onClick={(e) => handleClick(e)}
              />
            </div>
            <p className="justify-center px-20 text-center text-sm text-txtSecondary md:text-base">
              Do Not Refresh this Page
              <LinkElement
                link="/auth/otp"
                text="Resend OTP"
                // onClick={() => }
              />
              <LinkElement
                link="/auth/otp"
                text="Change Your Number"
                // onClick={() => }
              />
            </p>
          </Card>
        </div>
      </div>
    )
  else return <h1>Something Went Wrong Please Close and Reopen the Web App</h1>
}

export default otp
