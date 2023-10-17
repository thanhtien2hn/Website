import React from 'react'
import Header from '../Header/Header'

const DefaultComponent = ({ Children }) => {
  return (
    <div>
      <Header />
      {Children}
    </div>
  )
}

export default DefaultComponent
