import React from 'react'
import './CTA.css'

const CTA = () => {
  return (
    <div className='app__cta'>
        <div className='app__cta-content'>
            <p>Ready to get onboard? Enter your email address to get started.</p>
        </div>
        <div className='app__cta-input'>
            <input type="email" placeholder='Your Email Address' />
            <button type='button'>Get Started</button>
        </div>
    </div>
  )
}

export default CTA