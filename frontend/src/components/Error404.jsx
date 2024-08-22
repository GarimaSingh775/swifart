import React from 'react'
import { Link } from 'react-router-dom'
import './Error404.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons'

function Error404() {
  document.title = "Page Not Found | Swifkart Online Store"
  window.scroll(0, 0);
  return (
    <>
        <div className="error-page-wrapper">
            <div className="error-container">
                <p className='error-404'>ERROR 404</p>
                <p className='page-not-found'>Page Not Found</p>
                <Link to="/"><button><FontAwesomeIcon className='return-icon' icon={faChevronCircleLeft}/>Return to Homepage</button></Link>
            </div>
            <div className="error-spacer"></div>
        </div>
    </>
  )
}

export default Error404