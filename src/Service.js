import React from 'react'

function Service(props) {

  return (
    <div className="service">
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  )

}

export default Service
