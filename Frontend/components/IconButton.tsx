import React from 'react'

import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

interface IBtnProps {
  buttonText: string
  icon?: any
  route?: string
  disabled?: boolean
  onClick?: (e: React.MouseEvent<HTMLElement>) => void
}
interface IVariantBtnProps {
  icon: any
  isSelected: string
  type: string
  setState: React.Dispatch<React.SetStateAction<string>>
}

const IconButton: React.FC<IBtnProps> = ({
  buttonText,
  icon,
  route,
  disabled,
  onClick,
}) => {
  const router = useRouter()
  return (
    <button
      disabled={disabled}
      onClick={(e: React.MouseEvent<HTMLElement>) =>
        onClick ? onClick(e) : undefined
      }
    >
      <Link href={`${route ? route : router.pathname}`}>
        <div
          className={`flex cursor-pointer rounded-3xl bg-gradient-to-br from-yellowCustom 
        to-pinkCustom py-2 px-4 ${
          disabled ? 'cursor-not-allowed opacity-40' : null
        }`}
        >
          <h2 className="mr-2 text-lg">{buttonText}</h2>
          {icon ? <Image src={icon} /> : null}
        </div>
      </Link>
    </button>
  )
}

export const IconButtonVariant: React.FC<IVariantBtnProps> = ({
  icon,
  isSelected,
  type,
  setState,
}) => {
  const handleClick = (): void => {
    setState(type)
  }

  return (
    <button onClick={handleClick}>
      <div
        className={`flex h-16 w-16 cursor-pointer items-center justify-center rounded-xl ${
          isSelected === type
            ? 'bg-gradient-to-br from-yellowCustom to-pinkCustom  '
            : 'bg-inputBackground hover:bg-bgSecondary'
        } p-2`}
      >
        <Image src={icon} />
      </div>
    </button>
  )
}

export default IconButton
