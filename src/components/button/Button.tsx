import React from 'react'
import clsx from 'clsx'

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  primary?: boolean
  secondary?: boolean
  success?: boolean
  warning?: boolean
  danger?: boolean
  rounded?: boolean
  outline?: boolean
  children: React.ReactNode
}

/*
  padding
  border width
  border color
  background color
  text color
*/

const Button = ({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  rounded,
  outline,
  ...rest
}: ButtonProps): JSX.Element => {
  const isOutline = outline ?? false
  const classes = clsx(rest.className, 'px-3 py-1.5 border flex items-center', {
    'border-blue-500 bg-blue-500 text-white': primary,
    'border-gray-900 bg-gray-900 text-white': secondary,
    'border-green-500 bg-green-500 text-white': success,
    'border-yellow-400 bg-yellow-400 text-white': warning,
    'border-red-500 bg-red-500 text-white': danger,
    'rounded-full': rounded,
    'bg-white': outline,
    'text-blue-500': isOutline && primary,
    'text-gray-900': isOutline && secondary,
    'text-green-500': isOutline && success,
    'text-yellow-400': isOutline && warning,
    'text-red-500': isOutline && danger
  })
  return (
    <button {...rest} className={classes} type="button">
      {children}
    </button>
  )
}

// Custom validator function
const validateVariationValue = ({
  primary,
  secondary,
  success,
  warning,
  danger
}: any): void => {
  const count =
    Number(!!(primary as boolean)) +
    Number(!!(secondary as boolean)) +
    Number(!!(success as boolean)) +
    Number(!!(warning as boolean)) +
    Number(!!(danger as boolean))
  console.log('count is', count)
  if (count > 1) {
    throw new Error(
      'Only one of the primary, secondary,success,warning,danger.'
    )
  }
}

// Apply the custom validator to the component's props
const ButtonWithValidation: React.FC<ButtonProps> = (props) => {
  validateVariationValue(props)
  return <Button {...props} />
}

export default ButtonWithValidation
