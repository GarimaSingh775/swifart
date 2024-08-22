import React from 'react'
import './CheckoutSuccess.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons'
import {faCcStripe } from '@fortawesome/free-brands-svg-icons'
import toast from 'react-hot-toast'

function CheckoutSuccess() {
  document.title = "Successful Checkout | Swifkart Online Store"
  toast.success("Successful Checkout!");
  return (
    <>
      <div className="success-wrapper">
        <div className="success-container">
          <p className='success-title'>Successful Checkout! <FontAwesomeIcon className='success-tick' icon={faCcStripe}/></p>
          <p className='success-msg'>Thank you for shopping with us! We look forward to serving you again soon.</p>
          <Link to="/"><button className='return-home'><FontAwesomeIcon className='return-icon-success' icon={faChevronCircleLeft}/>Return to Homepage</button></Link>
        </div>
      </div>
    </>
  )
}

export default CheckoutSuccess