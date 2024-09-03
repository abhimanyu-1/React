import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <div className='footer'>
      <h4>&copy; Cat&Dog {new Date().getFullYear()}</h4>
    </div>
  )
}

export default Footer
