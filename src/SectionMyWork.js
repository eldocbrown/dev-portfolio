import React, {useEffect} from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

import Project from './Project'
import ProjectList from './ProjectList'
import './css/SectionMyWork.css'

function SectionMyWork(props) {

  return (
    <Router>
      <section className="my-work" id={props.id}>
        <Switch>
          <Route exact path="/">
            <h2 className="section__title section__title--work">My work</h2>
            <p className="section__subtitle section__subtitle--work">A selection of my range of work</p>

            <ProjectList anchor={props.id} />
          </Route>

          <Route path="/:projectId">
            <Project anchor={props.id} />
          </Route>
        </Switch>

      </section>
    </Router>
  )

}

export default SectionMyWork
