import React from 'react'

function ScrollDown() {
  return (
    <div className="home__scroll">
        <a href="#about" className="home__scroll-button--flex">
        <svg width="26px" height="26px" className='wheel' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="11" stroke="black" stroke-width="2"/>
            <path d="M8 10l4 4 4-4" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

        <span className="home__scroll-name">Scroll Down</span>
        <i class="uil uil-arrow-down home__scroll-arrow"></i>
        </a>

    </div>
  )
}

export default ScrollDown