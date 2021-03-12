import React from 'react'
import {Link} from 'react-router-dom'
import './css/PortfolioItem.css'

function PortfolioItem(props) {

  const { itemlink, imgsrc, keywords } = props

  return (
    <Link to={itemlink} className="portfolio__item">
      <img src={imgsrc} alt="" className="portfolio__img"></img>
      <strong className="portfolio__keyword">{keywords ? "[" + keywords.join(', ') + "]" : ""}</strong>
    </Link>

  )

}

export default PortfolioItem
