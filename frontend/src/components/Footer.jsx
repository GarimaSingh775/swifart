import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faAsterisk, faFileLines, faLock, faMapLocationDot, faRotateLeft, faSitemap } from '@fortawesome/free-solid-svg-icons'

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      

      <div className="desktop-bg">
        <div className="desktop-wrapper">
          <div className="desktop-container">
            <div className="footer-section">
              <p className='footer-title'>Quick Links</p>
              <ul>
                <Link to=""><li><FontAwesomeIcon className='footer-icons' icon={faAsterisk}/>Terms and Conditions</li></Link>
                <Link to=""><li><FontAwesomeIcon className='footer-icons' icon={faLock}/>Privacy Policy</li></Link>
                <Link to=""><li><FontAwesomeIcon className='footer-icons' icon={faRotateLeft}/>Returns Policy</li></Link>
                <Link to=""><li><FontAwesomeIcon className='footer-icons' icon={faFileLines}/>Documentation</li></Link>
                <Link to=""><li><FontAwesomeIcon className='footer-icons' icon={faSitemap}/>Sitemap</li></Link>
              </ul>
            </div>
            <div className="footer-section">
              <p className='footer-title'>Social Media</p>
              <ul>
                <a href="https://twitter.com/redbull" target='_blank'><li><FontAwesomeIcon className='footer-icons' icon={faXTwitter}/>Twitter X</li></a>
                <a href="https://www.instagram.com/redbull/" target='_blank'><li><FontAwesomeIcon className='footer-icons' icon={faInstagram}/>Instagram</li></a>
                <a href="https://www.facebook.com/redbull" target='_blank'><li><FontAwesomeIcon className='footer-icons' icon={faFacebook}/>Facebook</li></a>
                <a href="https://www.youtube.com/user/redbull" target='_blank'><li><FontAwesomeIcon className='footer-icons' icon={faYoutube}/>YouTube</li></a>
                <a href="https://www.linkedin.com/company/red-bull/" target='_blank'><li><FontAwesomeIcon className='footer-icons' icon={faLinkedin}/>LinkedIn</li></a>
              </ul>
            </div>
            <div className="footer-section">
              <p className='footer-title'>Find Us</p>
              <p className='footer-address'>
                The University of Leicester, <br />
                University Road, <br />
                Leicester, <br />
                LE1 7RH, <br />
                United Kingdom <br />
                <br />
                <a href="" target='_blank'><FontAwesomeIcon className='footer-icons' icon={faMapLocationDot}/>View on Google Maps</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mobile-wrapper">
        <p className="credits">
          © {currentYear} All Rights Reserved | Website developed by <a href="https://www.linkedin.com/in/arnavs27" target="_blank">Arnav Salian</a>
        </p>
      </div>
    </>
  )
}

export default Footer