import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Dheeraj</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#portfolio" className="footer__link">Projects</a>
                </li>

                <li>
                    <a href="#services" className="footer__link">Services</a>
                </li>
            </ul>

            <div className="footer__social">
                <a href="https://www.facebook.com/dheeraj.kesharwani.503" className="footer__social-link" target="_blank">
                    <i class="bx bxl-facebook"></i>
                </a>

                <a href="https://www.instagram.com/_mr._dheeraj_15/" className="footer__social-link" target="_blank">
                    <i class="bx bxl-instagram"></i>
                </a>

                <a href="https://www.linkedin.com/in/dheeraj-kesharwani-b7538628a/" className="footer__social-link" target="_blank">
                    <i class="bx bxl-linkedin"></i>
                </a>
            </div>

            <span className="footer__copy">
                &copy; 2024 Dheeraj. All rights reserved.
            </span>
        </div>
    </div>
  )
}

export default Footer