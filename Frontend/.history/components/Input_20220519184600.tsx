import React from 'react'

const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <div>
      <input type="text" className="bg-inputBackground text-lg" {...props} />
    </div>
  )
}

export default Input
