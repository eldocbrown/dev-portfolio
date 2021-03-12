import React from 'react'
import Service from './Service'
import './css/SectionMyServices.css'

function SectionMyServices(props) {

  const myworklink = '#' + props.myworkid

  return (
    <section className="my-services" id={props.id}>
            <h2 className="section__title section__title--services">What I do</h2>

            <div className="services">

              <Service
                title="Sustainable Web Development"
                description="I build web applications from scratch to production, from data to UI, with Git version control and throwing in lots of tests, over a CI/CD pipeline."
              />

              <Service
                title="Frontend"
                description="HTML, CSS, Javascript and ReactJS are my preferred tools for building frontend responsive applications. Need to integrate with an API or build a backendless application? Get in touch!"
              />

              <Service
                title="Backend"
                description="I use Django and Python to build backends and APIs. Should a relational data store is needed, I set up a PostgreSQL instance."
              />

            </div>

            <a href={myworklink} className="btn">My Work</a>
        </section>
  )

}

export default SectionMyServices
