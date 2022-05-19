import React from 'react'
import IconButton, { IconButtonVariant } from '../../components/IconButton'
import { Card } from '../../components/CardVariants'

import arrow from '../../public/Images/emojis/arrow.svg'
import mobile from '../../public/Images/emojis/mobile.svg'
import mail from '../../public/Images/emojis/mail.svg'

const Auth = () => {
  return (
    <div className="flex w-screen flex-col">
      <div className="flex justify-end bg-txtSecondary">
        <IconButtonVariant isGradient icon={mobile} />
        <IconButtonVariant isGradient={false} icon={mail} />
      </div>

      <div className="flex justify-center">
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
