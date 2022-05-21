import React from 'react'

const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <div>
      <input
        type="text"
        className={
          'rounded-lg bg-inputBackground p-4 text-lg' +
          'focus: border-gradient-to-br from-yellowCustom to-pinkCustom py-2 px-4'
        }
        {...props}
      />
    </div>
  )
}

export default Input
