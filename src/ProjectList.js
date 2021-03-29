import React, { useEffect, useContext } from 'react'
import { useLocation } from "react-router-dom"
import requireContext from 'require-context.macro'

import PortfolioItem from './PortfolioItem'
import projectsData from './projectsData'
import './css/ProjectList.css'
import { DataContext } from './dataContext'

function ProjectList(props) {

  const location = useLocation()

  useEffect(() => {
    if (location.state && location.state.fromProject) {
      window.location.hash = `#${props.anchor}`
    }
  }, [])

  const { projects } = useContext(DataContext)

  const req = requireContext('./img', true, /^\.\/.*$/)

  const portfolioItems = projectsData.map( p => <PortfolioItem key={p.id} itemlink={p.id} imgsrc={req(`./${p.imgTitleFilename}`).default} keywords={p.keywords}/>)

  return (
      <div className="portfolio">
        {portfolioItems}
      </div>
  )
}

export default ProjectList
