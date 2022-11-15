import React from 'react'

type ButtonProps = { text: string; onClick: (e: any) => void }

const Button = ({ text, onClick }: ButtonProps) => (
  <button
    type="button"
    className="bg-secondary border-primary border-2 rounded-md text-white p-3 w-[150px] h-[75px] uppercase hover:bg-primary transition ease-in-out duration-250"
    onClick={onClick}
  >
    {text}
  </button>
)

export default Button
