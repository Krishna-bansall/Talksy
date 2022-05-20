import React from 'react'
import { Card } from '../CardVariants'
import Image from 'next/image'
import IconButton from '../IconButton'
import arrow from '../../public/Images/emojis/arrow.svg'
import mailEmoji from '../../../public/Images/emojis/mailEmoji.svg'
import Input from '../Input'

interface IProps {
  setText: React.Dispatch<React.SetStateAction<string>>
}

const MailPage: React.FC<IProps> = ({ setText }) => {
  return (
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
          <IconButton buttonText="Next" icon={arrow} route="/auth" />
        </div>
        <p className="px-20 text-sm text-txtSecondary md:text-base">
          By entering your mail, you're agreeing to our Terms of Service and
          Privacy Policy. Thanks!
        </p>
      </Card>
    </div>
  )
}

export default MailPage
