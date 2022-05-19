import React from 'react'
import Image from 'next/image'
import { ReactNode } from 'react'

// interface IProps {
//   heading: string
//   emoji: HTMLImageElement
//   middleElement?: JSX.Element
//   buttonText?: string
// }

const Card: React.FC<ReactNode> = ({ children }) => {
  return (
    <div className=" flex w-2/4 flex-col justify-between rounded-2xl bg-inputBackground py-10">
      {children}
    </div>
  )
}
