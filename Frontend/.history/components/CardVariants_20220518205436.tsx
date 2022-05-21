import React from 'react'

interface IProps {
  heading: string
  emoji: SVGElement
  middleElement: JSX.Element
  buttonText: string
}

export const Card: React.FC<IProps> = ({ heading }) => {
  return <div>props</div>
}
