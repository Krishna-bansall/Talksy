import React from 'react'
import { Card } from '../CardVariants'
import Image from 'next/image'
import IconButton, { IconButtonVariant } from '../../components/IconButton'

import arrow from '../../public/Images/emojis/arrow.svg'
import mailEmoji from '../../public/Images/emojis/mailEmoji.svg'
import Input from '../Input'

import mobile from '../../public/Images/emojis/mobile.svg'
import mail from '../../public/Images/emojis/mail.svg'
import { AppDispatch } from '../../redux/store'
import { otp } from '../../redux/Auth/typeSlice'

interface IProps {
  setText: React.Dispatch<React.SetStateAction<string>>
  setSelectedState: AppDispatch
  selectedState: string
}

const MailPage: React.FC<IProps> = ({
  setText,
  setSelectedState,
  selectedState,
}) => {
  const handleClick = (e: React.MouseEvent<HTMLElement>): void => {
    setSelectedState(otp())
  }

  return (
    <div className="flex w-full flex-col md:w-1/2">
      <div className="mb-2 flex justify-end">
        <div className="mr-2">
          <IconButtonVariant
            isSelected={selectedState}
            type="phone"
            icon={mobile}
          />
        </div>
        <IconButtonVariant isSelected={selectedState} icon={mail} type="mail" />
      </div>
      <div className="w-full">
        <Card>
          <div className="my-4 flex justify-center ">
            <Image src={mailEmoji} />
            <h1 className="ml-2 text-xl font-semibold md:text-2xl">
              Enter Your Email id
            </h1>
          </div>
          <div className="my-4 flex justify-center ">
            <Input
              type="email"
              onChange={(e) => setText(e.target.value)}
              placeholder="mail@gmail.com"
            />
          </div>
          <div className="my-4 flex justify-center ">
            <IconButton
              buttonText="Next"
              icon={arrow}
              onClick={(e) => handleClick(e)}
            />
          </div>
          <p className="px-20 text-sm text-txtSecondary md:text-base">
            By entering your mail, you're agreeing to our Terms of Service and
            Privacy Policy. Thanks!
          </p>
        </Card>
      </div>
    </div>
  )
}

export default MailPage
