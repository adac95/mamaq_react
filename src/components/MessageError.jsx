import React from 'react'

import "../styles/ErrorMessage.css"

export const MessageError = ({text}) => {
  return (
    <p className='p ErrorMessage'>{text}</p>

  )
}
