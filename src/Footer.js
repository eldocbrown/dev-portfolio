import React from 'react'
import PropTypes from "prop-types"
import './css/Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDev, faTwitter , faGithub } from '@fortawesome/free-brands-svg-icons'

function Footer(props) {

  return (
    <footer className="footer">
      <a href={`mailto:${props.email}`} className="footer__link">{props.email}</a>
      <ul className="social-list">
        <li className="social-list__item">
          <a className="social-list__link" href="https://dev.to/eldocbrown">
            <FontAwesomeIcon icon={faDev} />
          </a>
        </li>
        <li className="social-list__item">
          <a className="social-list__link" href="https://twitter.com/JuanCruzDonato1">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </li>
        <li className="social-list__item">
          <a className="social-list__link" href="https://github.com/eldocbrown">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
      </ul>
    </footer>
  )
}

Footer.propTypes = {
  email: PropTypes.string.isRequired
}

export default Footer
