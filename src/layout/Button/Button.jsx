import React from 'react'

const Button = ({children, className}) => {
  return (
    <button className={`py-[20px] px-[48px] text-white bg-[#3639A4] rounded-[6px] font-secondary font-medium leading-[20px] ${className}`}>
      {children}
      </button>
  )
}

export default Button