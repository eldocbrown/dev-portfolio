import React, { useEffect, useContext } from 'react'
import { useLocation } from "react-router-dom"

import PortfolioItem from './PortfolioItem'
import './css/ProjectList.css'
import { DataContext } from './dataContext'

function ProjectList(props) {

  const { projects } = useContext(DataContext)

  const location = useLocation()

  useEffect(() => {
    if (location.state && location.state.fromProject) {
      window.location.hash = `#${props.anchor}`
    }
  }, [])

  let portfolioItems
  if (projects.length > 0) { portfolioItems = projects.map( p => <PortfolioItem key={p.id} itemlink={p.id} imgsrc={p.imgTitleURL} keywords={p.keywords} />) }

  return (
      <div className="portfolio">
        {portfolioItems}
      </div>
  )
}

export default ProjectList
