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
  return (
    <div className="flex w-2/4 flex-col justify-between">
      <h1>
        {heading}
        <Image arc={emoji} />
      </h1>
    </div>
  )
}
