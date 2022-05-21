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
  isSelected: boolean
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
export const IconButtonVariant: React.FC<IVariantBtnProps> = ({
  icon,
  isSelected,
}) => {
  return (
    <div
      className={`flex h-16 w-16 cursor-pointer items-center justify-center rounded-xl ${
        isSelected
          ? 'bg-gradient-to-br from-yellowCustom to-pinkCustom'
          : 'bg-inputBackground'
      } p-2`}
    >
      <Image src={icon} />
    </div>
  )
}

export default IconButton
