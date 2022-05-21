import React from 'react'

const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <div>
      <input
        type="text"
        className="focus: rounded-lg bg-inputBackground bg-gradient-to-br 
      from-yellowCustom to-pinkCustom p-4 py-2 px-4 text-lg"
        {...props}
      />
    </div>
  )
}

export default Input
