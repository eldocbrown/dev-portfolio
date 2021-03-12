import React from "react"

import Header from './Header'
import Body from './Body'
import Footer from './Footer'

function App() {

  const sections = ['home', 'services', 'about', 'work']

  return (
      <div className="App">
        <Header sections={sections} />
        <Body sections={sections} />
        <Footer email="juandonato@gmail.com"/>
      </div>
  )
}

export default App
