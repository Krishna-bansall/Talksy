import React, { useState } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { mailDo, phone, otp } from '../../redux/Auth/typeSlice'
import { RootState } from '../../redux/store'

import PhonePage from '../../components/pages/PhonePage'
import MailPage from '../../components/pages/MailPage'

const Auth = () => {
  const [text, setText] = useState<string>('')

  const type = useSelector((state: RootState) => state.type.value)
  const dispatch = useDispatch()

  console.log(type)
  return (
    <>
      {type === 'phone' ? (
        <PhonePage
          setText={setText}
          setSelectedState={dispatch}
          selectedState={type}
        />
      ) : (
        <MailPage
          setText={setText}
          setSelectedState={dispatch}
          selectedState={type}
        />
      )}
    </>
  )
}

export default Auth
