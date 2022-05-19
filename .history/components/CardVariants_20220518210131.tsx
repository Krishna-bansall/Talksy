import React from 'react'

interface IProps {
  heading: string
  emoji: SVGElement
  middleElement: JSX.Element
  buttonText: string
}

export const Card: React.FC<IProps> = ({
  heading,
  emoji,
  middleElement,
  buttonText,
}) => {
  return <div className="flex w-2/4"></div>
}
