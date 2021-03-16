import React from 'react'
import './css/SectionHome.css';
import devjuan01 from './img/dev-juan-03.jpg'

function SectionHome(props) {

  return (
    <section className="intro" id={props.id}>
        <h1 className="section__title section__title--intro">
            Hi, I am <strong className="section__title__name">Juan Donato</strong>
        </h1>
        <p className="section__subtitle section__subtitle--intro">full-stack dev</p>
        <img src={devjuan01} alt="a picture of Juan smiling" className="intro__img"></img>
    </section>
  )

}

export default SectionHome
