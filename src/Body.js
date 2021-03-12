import React from "react"
import PropTypes from "prop-types"

import SectionHome from './SectionHome'
import SectionMyServices from './SectionMyServices'
import SectionAboutMe from './SectionAboutMe'
import SectionMyWork from './SectionMyWork'

function Body(props) {

  const sections = props.sections

  return (
    <>
      <SectionHome id={sections[0]} />
      <SectionMyServices id={sections[1]} myworkid={sections[3]}/>
      <SectionAboutMe id={sections[2]} />
      <SectionMyWork id={sections[3]} />
    </>
  )
}

Body.propTypes = {
    sections: PropTypes.array.isRequired
}

export default Body
