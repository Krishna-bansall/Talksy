import React from 'react'

const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <div>
      <input
        type="text"
        className={
          'rounded-lg bg-inputBackground p-4 text-lg' + 'focus: border-none'
        }
        {...props}
      />
    </div>
  )
}

export default Input
