import React, { useState } from 'react'
import Image from 'next/image'

import { Card } from '../../components/CardVariants'
import monkeyEmoji from '../../public/Images/emojis/monkeyEmoji.svg'
import userAvatarDefault from '../../public/Images/icons/userAvatarDefault.svg'
import arrow from '../../public/Images/icons/arrow.svg'

import Input from '../../components/Input'

import IconButton from '../../components/IconButton'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { setName } from '../../redux/Activate/userActivationSlice'
import { useRouter } from 'next/router'
import LinkElement from '../../components/LinkElement'

const pfp = () => {
  const [file, setFile] = useState(userAvatarDefault)

  const type = useSelector((state: RootState) => state.type.value)
  const activateData = useSelector((state: RootState) => state.activate.data)

  const router = useRouter()
  const dispatch = useDispatch()

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    // dispatch(setName(text))
    // setFile(e.target.files![0].stream)
    const reader = new FileReader()
    reader.readAsDataURL(e.target.files![0])
    reader.onloadend = () => {
      console.log(reader.result)
      setFile(reader.result)
    }

    router.push('/activate/pfp')
  }

  // if (auth.auth)
  return (
    <div className="flex w-full flex-col md:w-1/2">
      <div className="w-full">
        <Card>
          <div className="my-4 flex justify-center ">
            <Image src={monkeyEmoji} />
            <h1 className="ml-2 text-xl font-semibold md:text-2xl">
              Alright {activateData.name}!
            </h1>
          </div>

          <div className="my-4 flex justify-center ">
            <p className="px-21 text-base text-txtSecondary md:text-lg">
              Let's get your profile picture!
            </p>
          </div>

          <div className="my-4 flex justify-center">
            <div className=" rounded-full bg-gradient-to-br from-purpleCustom to-pinkCustom ">
              <Image
                className="rounded-full"
                src={file}
                height={100}
                width={100}
              />
            </div>
          </div>
          <form className="my-4 flex justify-center">
            <div className="flex justify-center">
              <input
                type="file"
                className="invisible absolute"
                onChange={(e) => handleChange(e)}
                id="pfpInput"
              />
              <label htmlFor="pfpInput">
                <p
                  className="cursor-pointer text-blueCustom"
                  //   onClick={handleClick}
                >
                  Choose A Different Picture
                </p>
              </label>
            </div>
          </form>

          <div className="my-4 flex justify-center ">
            <IconButton
              buttonText="Next"
              icon={arrow}
              // route={selectedState === 'otp' ? '/auth/otp' : ''}
              //   onClick={(e) => handleClick(e)}
            />
          </div>
        </Card>
      </div>
    </div>
  )
  // else {
  //   return <h1>Please Verify Otp First</h1>
  // }
}

export default pfp
