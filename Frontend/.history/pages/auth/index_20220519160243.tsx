import React from 'react'
import { IconButtonVariant } from '../../components/IconButton'
import { Card } from '../../components/CardVariants'

import arrow from '../../public/Images/emojis/arrow.svg'
import mobile from '../../public/Images/emojis/mobile.svg'
import mail from '../../public/Images/emojis/mail.svg'

const Auth = () => {
  return (
    <div className="">
      <div className="justify-end bg-txtSecondary">
        <IconButtonVariant isGradient icon={mobile} />
        <IconButtonVariant isGradient={false} icon={mail} />
      </div>
      <Card></Card>
    </div>
  )
}

export default Auth
