import React, { useState } from 'react'

import PhonePage from '../../components/pages/PhonePage'

import MailPage from '../../components/pages/MailPage'

const Auth = () => {
  const [text, setText] = useState<string>('')
  const [selectedState, setSelectedState] = useState('phone')

  console.log(selectedState)
  return (
    <>
      {selectedState === 'phone' ? (
        <PhonePage
          setText={setText}
          setSelectedState={setSelectedState}
          selectedState={selectedState}
        />
      ) : (
        <MailPage
          setText={setText}
          setSelectedState={setSelectedState}
          selectedState={selectedState}
        />
      )}
    </>
  )
}

export default Auth
