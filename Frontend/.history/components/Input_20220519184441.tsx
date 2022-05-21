import React, { useState } from 'react'

const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
  const [text, setText] = useState<string>('')

  return (
    <div>
      <input type="text" className="bg-inputBackground" {...props} />
    </div>
  )
}

export default Input
