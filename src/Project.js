import React, {useEffect} from 'react'
import {Link, useParams} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faHeartbeat } from '@fortawesome/free-solid-svg-icons'

import projectsData from "./projectsData"
import './css/Project.css'


function Project(props) {

  useEffect(() => {
    window.location.hash = `#${props.anchor}`
  }, [])

  const { projectId } = useParams()

  const thisProject = projectsData.find(project => project.id === projectId)

  const {
          title,
          subtitle,
          imgTitleFilename,
          descriptionParagraphs,
          imgDescriptionFileNames,
          github,
          liveLink
        } = thisProject

  const req = require.context('./img', true, /^\.\/.*$/) //   load images into context

  const jsxDescParagraphs = descriptionParagraphs.map( (p, j) => <p key={j+1}>{p}</p> )
  const jsxDescImages = imgDescriptionFileNames.map( (i, j) => <img key={-j-1} src={req(`./${i}`).default} alt="project image"></img>)

  let jsxDesc = []

  if (jsxDescParagraphs.length > 0) {   // if there are text paragraphs
    let imageIndex = 0
    jsxDescParagraphs.forEach((p, i) => {   // alternate text and images jsx elementes
      jsxDesc.push(p)
      if (jsxDescImages[i]) { jsxDesc.push(jsxDescImages[i]) }
      imageIndex = i
    })

    if (jsxDescImages.length > jsxDescParagraphs.length) {    // if there are more images, push them to the jsx definitive array
      imageIndex++
      while (jsxDescImages[imageIndex]) {
        jsxDesc.push(jsxDescImages[imageIndex])
        imageIndex++
      }
    }
  } else jsxDesc = jsxDescImages    // if there are no text paragraphs, then just render the images, if any

  const jsxGitHubLink = github ?
    (
      <li className="project-social-list__item">
          <a className="project-social-list__link" href={github} target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <span className="project-social-list__linkText">Source</span>
      </li>
    ) : null

    const jsxLiveLink = liveLink ?
      (
        <li className="project-social-list__item">
          <a className="project-social-list__link" href={liveLink} target="_blank">
            <FontAwesomeIcon icon={faHeartbeat} />
          </a>
          <span className="project-social-list__linkText">Live App</span>
        </li>
      ) : null

  return (
    <>
      <div className="project-intro">
        <h1 className="project-intro__title">
          <strong>{title}</strong>
        </h1>
        <p className="project-intro__subtitle--overflow">&nbsp;</p>
        <p className="project-intro__subtitle">{subtitle}</p>
        <img src={req(`./portfolio-01.jpg`).default} alt="project cover image" className="project-intro__img"></img>
      </div>

      <div className="portfolio-item-individual">
          {jsxDesc}
      </div>

      <div>
        <ul className="project-social-list">
          {jsxGitHubLink}
          {jsxLiveLink}
        </ul>
      </div>


      <Link to={{pathname: "/", state: {fromProject: true}}} className="btn">Back to My Work</Link>
    </>
  )

}

export default Project
