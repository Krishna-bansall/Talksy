import React, { useState } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { mail, phone } from '../../redux/Auth/typeSlice'
import { RootState } from '../../redux/store'

import PhonePage from '../../components/pages/PhonePage'
import MailPage from '../../components/pages/MailPage'

const Auth = () => {
  const type = useSelector((state: RootState) => state.type.value)
  const dispatch = useDispatch()

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
