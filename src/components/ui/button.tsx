import { FC, ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: FC<ButtonProps> = ({ className = '', ...props }) => (
  <button
    className={`px-3 py-1 text-sm border rounded-md ${className}`}
    {...props}
  />
)

export { Button }
