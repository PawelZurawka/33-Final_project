import React from 'react'

import './Button.scss'

const Button = ({ variant = '', children, ...otherProps }) => (
  <button {...otherProps} className={`button button--${variant}`}>
    {children}
  </button>
)

export default Button
