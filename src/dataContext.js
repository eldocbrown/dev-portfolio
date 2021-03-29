import React, { useState, useEffect } from 'react'
import firebase from 'firebase/app'
import 'firebase/analytics'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBhJZOq7RDFgM32PvZqhtsqvlZvxulz4PI",
    authDomain: "dev-portfolio-89f56.firebaseapp.com",
    projectId: "dev-portfolio-89f56",
    storageBucket: "dev-portfolio-89f56.appspot.com",
    messagingSenderId: "83518598822",
    appId: "1:83518598822:web:77c73a2fbbbe1735d40e67",
    measurementId: "G-GJT677YJHX"
}

const DataContext = React.createContext()

function DataContextProvider({children})  {

  const [ projects, setProjects ] = useState([])

  useEffect(() => {

    firebase.initializeApp(firebaseConfig)
    firebase.analytics()

    const db = firebase.firestore()

    db.collection("projects").get().then((querySnapshot) => {
      let newState = []
      querySnapshot.forEach((doc) => {
          newState.push({
            id: doc.id,
            keywords: doc.data().keywords,
            title: doc.data().title,
            subtitle: doc.data().subtitle,
            imgTitleFilename: doc.data().imgTitleFilename,
            descriptionParagraphs: doc.data().descriptionParagraphs,
            imgDescriptionFileNames: doc.data().imgDescriptionFileNames,
            github: doc.data().github,
            liveLink: doc.data().liveLink
          })
      })
      setProjects(newState)
    })

  }, [])

  return (
    <DataContext.Provider value={{projects}}>
      {children}
    </DataContext.Provider>
  )
}

export { DataContextProvider, DataContext }
