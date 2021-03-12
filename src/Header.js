import React, {useState} from 'react'
import PropTypes from "prop-types"
import './css/Header.css'
import debjd from './img/devjd-logo-bold.png'

function Header(props) {

  const hrefs = props.sections.map(s => '#' + s)

  const closeNav = () => {document.body.classList.remove('nav-open')}

  return (
    <header>
      <div className="logo">
          <img src={debjd} alt=""></img>
      </div>
      <button className="nav-toggle" aria-label="toggle navigation" onClick={() => document.body.classList.toggle('nav-open')}>
          <span className="hamburger"></span>
      </button>
      <nav className="nav">
          <ul className="nav__list">
              <li className="nav__item"><a href={hrefs[0]} className="nav__link" onClick={closeNav}>Home</a></li>
              <li className="nav__item"><a href={hrefs[1]} className="nav__link" onClick={closeNav}>My Services</a></li>
              <li className="nav__item"><a href={hrefs[2]} className="nav__link" onClick={closeNav}>About me</a></li>
              <li className="nav__item"><a href={hrefs[3]} className="nav__link" onClick={closeNav}>My Work</a></li>
          </ul>
      </nav>
    </header>
  )
}

Header.propTypes = {
    sections: PropTypes.array.isRequired
}

export default Header
