import React from 'react'

interface ILink {
    link: string,
    onClick?: () => void
}

const Link: React.FC <ILink> = ({link, onClick}) => {
  
    const handleClick = () => {
        onClick()
    }
    return (
    <a>Link</a>
  )
}

export default Link