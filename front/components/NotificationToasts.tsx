import React from 'react'
import toast, { Renderable, Toaster } from 'react-hot-toast'
import flushedEmoji from '../public/Images/emojis/flushedEmoji.png'

interface IProps {
  message: string
}

const NotificationToasts = () => {
  return <div>hello</div>
}

export const errorLoginToast = (message: string | number | undefined) => {
  toast.error(message as string, {
    position: 'bottom-center',
    style: {
      borderRadius: '10px',
      background: '#333',
      color: '#fff',
    },
  })
  return <Toaster />
}
