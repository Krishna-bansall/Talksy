import React from 'react'
import { Card } from '../CardVariants'
import Image from 'next/image'
import IconButton, { IconButtonVariant } from '../../components/IconButton'

import phoneEmoji from '../../public/Images/emojis/phoneEmoji.svg'
import arrow from '../../public/Images/emojis/arrow.svg'
import Input from '../Input'
import mobile from '../../public/Images/emojis/mobile.svg'
import mail from '../../public/Images/emojis/mail.svg'
import { AppDispatch, RootState } from '../../redux/store'
import { mailDo, otp, phone } from '../../redux/Auth/typeSlice'
import { sendOtp } from '../../api'
import { useRouter } from 'next/router'
import { setApiData } from '../../redux/Auth/authDataSlice'
import { useSelector } from 'react-redux'

interface IProps {
  setText: React.Dispatch<React.SetStateAction<string>>
  text: string
  setSelectedState: AppDispatch
  selectedState: string
  authApiData: AppDispatch
}

const PhonePage: React.FC<IProps> = ({
  setText,
  text,
  setSelectedState,
  selectedState,
  authApiData,
}) => {
  const router = useRouter()

  const handleClick = async (e: React.MouseEvent<HTMLElement>) => {
    const res = await sendOtp({ phone: text })
    console.log(res)

    if (res.status === 200) {
      setSelectedState(otp())
      authApiData(setApiData(res.data))
      router.push('/auth/otp')
    }
  }

  return (
    <div className="flex w-full flex-col md:w-1/2">
      <div className="mb-2 flex justify-end">
        <div className="mr-2">
          <IconButtonVariant
            isSelected={selectedState}
            setState={() => setSelectedState(phone())}
            type="phone"
            icon={mobile}
          />
        </div>
        <IconButtonVariant
          isSelected={selectedState}
          icon={mail}
          type="mail"
          setState={() => setSelectedState(mailDo())}
        />
      </div>
      <div className="w-full">
        <Card>
          <div className="my-4 flex justify-center ">
            <Image src={phoneEmoji} />
            <h1 className="ml-2 text-xl font-semibold md:text-2xl">
              Enter Your Phone Number!
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
              disabled={text.length < 10}
              icon={arrow}
              // route={selectedState === 'otp' ? '/auth/otp' : ''}
              onClick={(e) => handleClick(e)}
            />
          </div>
          <p className="px-20 text-sm text-txtSecondary md:text-base">
            By entering your number, you're agreeing to our Terms of Service and
            Privacy Policy. Thanks!
          </p>
        </Card>
      </div>
    </div>
  )
}

export default PhonePage
