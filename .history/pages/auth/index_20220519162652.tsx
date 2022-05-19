import React, { useState } from 'react'
import IconButton, { IconButtonVariant } from '../../components/IconButton'
import { Card } from '../../components/CardVariants'

import arrow from '../../public/Images/emojis/arrow.svg'
import mobile from '../../public/Images/emojis/mobile.svg'
import mail from '../../public/Images/emojis/mail.svg'

export interface IBtnState {
  changeId: number
  isSelected: boolean
}

const Auth = () => {
  const [selectedState, setSelectedState] = useState<IBtnState>({
    changeId: 0,
    isSelected: false,
  })

  return (
    <div className="flex w-1/2 flex-col">
      <div className="mb-2 flex justify-end">
        <div className="mr-2">
          <IconButtonVariant
            isSelected={selectedState}
            onClick={setSelectedState}
            id={1}
            icon={mobile}
          />
        </div>
        <IconButtonVariant
          isSelected={selectedState}
          onClick={setSelectedState}
          icon={mail}
          id={2}
        />
      </div>

      <div className="w-full">
        <Card>
          <div className="my-4 flex justify-center ">
            <h1 className="ml-2 text-2xl font-light">Welcome to Talksy!</h1>
          </div>
          <div className="my-4 flex justify-center ">
            <p className="px-10 text-txtSecondary">
              We’re working hard to get Talksy ready for everyone! While we wrap
              up the finishing youches, we’re adding people gradually to make
              sure nothing breaks :)
            </p>
          </div>
          <div className="my-4 flex justify-center ">
            <IconButton buttonText="Next" icon={arrow} route="/auth" />
          </div>
        </Card>
      </div>
    </div>
  )
}

export default Auth
