import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface IBtnProps {
  buttonText: string
  icon?: any
  route: string
}
interface IVariantBtnProps {
  icon: any
  colour: string
}

const IconButton: React.FC<IBtnProps> = ({ buttonText, icon, route }) => {
  return (
    <Link href={`${route}`}>
      <div
        className="flex cursor-pointer rounded-3xl bg-gradient-to-br from-yellowCustom 
      to-pinkCustom py-2 px-4"
      >
        <h2 className="mr-2 text-lg">{buttonText}</h2>
        {icon ? <Image src={icon} /> : null}
      </div>
    </Link>
  )
}
const IconButtonVariant: React.FC<IVariantBtnProps> = ({ icon, colour }) => {
  return (
    <div
      className="flex cursor-pointer rounded-3xl bg-gradient-to-br from-yellowCustom 
      to-pinkCustom py-2 px-4"
    >
      <Image src={icon} />
    </div>
  )
}

export default IconButton
