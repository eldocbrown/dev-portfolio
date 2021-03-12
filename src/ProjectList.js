import React, {useEffect} from 'react'
import {useLocation} from "react-router-dom"

import PortfolioItem from './PortfolioItem'
import projectsData from "./projectsData"
import './css/ProjectList.css'

function ProjectList(props) {

  const location = useLocation()

  useEffect(() => {
    if (location.state && location.state.fromProject) {
      window.location.hash = `#${props.anchor}`
    }
  }, [])

  const req = require.context('./img', true, /^\.\/.*$/)

  const portfolioItems = projectsData.map( p => <PortfolioItem key={p.id} itemlink={p.id} imgsrc={req(`./${p.imgTitleFilename}`).default} keywords={p.keywords}/>)

  return (
    <div className="portfolio">
      {portfolioItems}
    </div>
  )
}

export default ProjectList
