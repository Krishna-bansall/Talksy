import React from 'react'
import { Card } from '../CardVariants'
import Image from 'next/image'
import IconButton, { IconButtonVariant } from '../../components/IconButton'

import phoneEmoji from '../../public/Images/emojis/phoneEmoji.svg'
import arrow from '../../public/Images/emojis/arrow.svg'
import Input from '../Input'
import mobile from '../../public/Images/emojis/mobile.svg'
import mail from '../../public/Images/emojis/mail.svg'
interface IProps {
  setText: React.Dispatch<React.SetStateAction<string>>
  setSelectedState: React.Dispatch<React.SetStateAction<string>>
  selectedState: string
}

const PhonePage: React.FC<IProps> = ({
  setText,
  setSelectedState,
  selectedState,
}) => {
  const handleClick = (e: React.MouseEvent<HTMLElement>): void => {
    setSelectedState('otp')
  }

  return (
    <div className="flex w-full flex-col md:w-1/2">
      <div className="mb-2 flex justify-end">
        <div className="mr-2">
          <IconButtonVariant
            isSelected={selectedState}
            setState={setSelectedState}
            type="phone"
            icon={mobile}
          />
        </div>
        <IconButtonVariant
          isSelected={selectedState}
          setState={setSelectedState}
          icon={mail}
          type="mail"
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
              icon={arrow}
              route="/auth"
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
