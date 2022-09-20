import React, { useState } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../redux/store'

import PhonePage from '../../components/pages/PhonePage'
import MailPage from '../../components/pages/MailPage'
export interface IApiData {
  phone: string
}

const Auth = () => {
  const [text, setText] = useState<string>('')

  const type = useSelector((state: RootState) => state.type.value)
  const dispatch = useDispatch()
  return (
    <>
      {type === 'phone' ? (
        <PhonePage
          setText={setText}
          text={text}
          setSelectedState={dispatch}
          selectedState={type}
          authApiData={dispatch}
        />
      ) : (
        <MailPage
          setText={setText}
          text={text}
          setSelectedState={dispatch}
          selectedState={type}
        />
      )}
    </>
  )
}

export default Auth
