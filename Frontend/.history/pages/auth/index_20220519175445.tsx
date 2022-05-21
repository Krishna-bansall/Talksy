import React, { useState } from 'react'
import Image from 'next/image'
import IconButton, { IconButtonVariant } from '../../components/IconButton'
import { Card } from '../../components/CardVariants'

import arrow from '../../public/Images/emojis/arrow.svg'
import mobile from '../../public/Images/emojis/mobile.svg'
import mail from '../../public/Images/emojis/mail.svg'

import phoneEmoji from '../../public/Images/emojis/phoneEmoji.svg'
import mailEmoji from '../../public/Images/emojis/mailEmoji.svg'

// export interface IBtnState {
//   button: { type: string; isSelected: boolean }[]
// }

const Auth = () => {
  const [selectedState, setSelectedState] = useState('phone')

  return (
    <div className="flex w-1/2 flex-col">
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
      {selectedState === 'mail' ? (
        <div className="w-full">
          <Card>
            <div className="my-4 flex justify-center ">
              <Image src={phoneEmoji} />
              <h1 className="ml-2 text-2xl font-semibold">
                Enter Your Phone Number!
              </h1>
            </div>
            <div className="my-4 flex justify-center "></div>
            <div className="my-4 flex w-1/4 flex-col justify-center ">
              <IconButton buttonText="Next" icon={arrow} route="/auth" />
              <p className="px-20 text-lg text-txtSecondary">
                We’re working hard to get Talksy ready for everyone! While we
                wrap up the finishing youches, we’re adding people gradually to
                make sure nothing breaks :)
              </p>
            </div>
          </Card>
        </div>
      ) : (
        <div className="w-full">
          <Card>
            <div className="my-4 flex justify-center ">
              <Image src={mailEmoji} />
              <h1 className="ml-2 text-2xl font-semibold">
                Enter Your Email Id!
              </h1>
            </div>
            <div className="my-4 flex justify-center ">
              <p className="px-20 text-lg text-txtSecondary">
                We’re working hard to get Talksy ready for everyone! While we
                wrap up the finishing youches, we’re adding people gradually to
                make sure nothing breaks :)
              </p>
            </div>
            <div className="my-4 flex justify-center ">
              <IconButton buttonText="Next" icon={arrow} route="/auth" />
            </div>
          </Card>
        </div>
      )}
    </div>
  )
}

export default Auth
