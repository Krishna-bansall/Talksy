import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import fs from 'fs'

import { Card } from '../../components/CardVariants'
import monkeyEmoji from '../../public/Images/emojis/monkeyEmoji.svg'
import userAvatarDefault from '../../public/Images/icons/userAvatarDefault.svg'
import arrow from '../../public/Images/icons/arrow.svg'

import Input from '../../components/Input'

import IconButton from '../../components/IconButton'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { setImage } from '../../redux/Activate/userActivationSlice'
import { useRouter } from 'next/router'
import LinkElement from '../../components/LinkElement'

const pfp = () => {
  const [file, setFile] = useState(userAvatarDefault)

  const type = useSelector((state: RootState) => state.type.value)
  const activateData = useSelector((state: RootState) => state.activate.data)

  const router = useRouter()
  const dispatch = useDispatch()

  // Load Initial Avatar
  useEffect(() => {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', userAvatarDefault.src, true)
    xhr.responseType = 'blob'
    xhr.onload = function (e) {
      console.log(this.response)
      const reader = new FileReader()
      reader.onload = function (event) {
        const res = event?.target!.result
        console.log(reader.result)
        setFile(reader.result)
      }
      const file = this.response
      reader.readAsDataURL(file)
    }
    xhr.send()
  }, [])

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader()
    console.log(e.target.files![0])
    reader.readAsDataURL(e.target.files![0])

    reader.onloadend = () => {
      console.log(typeof reader.result)
      setFile(reader.result)
    }

    router.push('/activate/pfp')
  }

  const handleClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    dispatch(setImage(file))
    router.push('/activate/username')
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
            <div className="w-1/4 items-center justify-center rounded-full bg-gradient-to-br from-purpleCustom to-pinkCustom ">
              <Image
                className=" rounded-full"
                src={file}
                layout="responsive"
                height={90}
                width={90}
              />
            </div>
          </div>
          <form className="my-4 flex justify-center">
            <div className="flex justify-center">
              <input
                type="file"
                accept="image/*"
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
            <IconButton buttonText="Next" icon={arrow} onClick={handleClick} />
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
