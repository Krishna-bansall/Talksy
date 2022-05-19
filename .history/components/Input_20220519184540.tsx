import React from 'react'

const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <div>
      <input type="text" className="bg-inputBackground" {...props} />
    </div>
  )
}

export default Input
