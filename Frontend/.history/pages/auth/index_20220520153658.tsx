import React, { useState } from 'react'
import IconButton, { IconButtonVariant } from '../../components/IconButton'
import { Card } from '../../components/CardVariants'
import Input from '../../components/Input'
import PhonePage from '../../components/pages/PhonePage'

import mobile from '../../public/Images/emojis/mobile.svg'
import mail from '../../public/Images/emojis/mail.svg'

import mailEmoji from '../../public/Images/emojis/mailEmoji.svg'
import MailPage from '../../components/pages/MailPage'

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
        <PhonePage setText={setText} setSelectedState={setSelectedState} />
      ) : (
        <MailPage setText={setText} setSelectedState={setSelectedState} />
      )}
    </div>
  )
}

export default Auth
