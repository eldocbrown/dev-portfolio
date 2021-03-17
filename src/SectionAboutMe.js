import React from 'react'
import devjuan from './img/dev-juan-02.jpg'
import './css/SectionAboutMe.css'

function SectionAboutMe(props) {

  return (
    <section className="about-me" id={props.id}>
      <h2 className="section__title section__title--about">Who I am</h2>
      <p className="section__subtitle section__subtitle--about">Developer based out of Buenos Aires</p>

      <div className="about-me__body">
         <p>Since I started my carreer in software development, I was always motivated to build products that customers actually wanted to use because they solved real and valuable problems for them, and yet, they worked for our business.</p>
         <p>Agile software development practices that I promoted in the teams I led are present in my work, including test automation, a TDD aproach, and continuous integration and deployment.</p>
      </div>

      <img src={devjuan} alt="Juan with glasses" className="about-me__img"></img>
    </section>
  )

}

export default SectionAboutMe
