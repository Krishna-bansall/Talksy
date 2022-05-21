import React, { useState } from 'react'
import IconButton, { IconButtonVariant } from '../../components/IconButton'
import { Card } from '../../components/CardVariants'
import Input from '../../components/Input'
import PhonePage from '../../components/pages/PhonePage'

import mobile from '../../public/Images/emojis/mobile.svg'
import mail from '../../public/Images/emojis/mail.svg'

import mailEmoji from '../../public/Images/emojis/mailEmoji.svg'

const Auth = () => {
  const [text, setText] = useState<string>('')
  const [selectedState, setSelectedState] = useState('phone')
  console.log(text)
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
      {selectedState === 'phone' ? (
        <PhonePage setText={setText} />
      ) : (
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
      )}
    </div>
  )
}

export default Auth
