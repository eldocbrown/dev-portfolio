import React, { useState, useEffect } from 'react'
import firebase from 'firebase/app'
import 'firebase/analytics'
import 'firebase/firestore'
import 'firebase/storage'

let firebaseConfig = null

if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') {
  firebaseConfig = {
    apiKey: "AIzaSyBtTHstnva_yCTURxIb9bTlFaaxziCykhU",
    authDomain: "dev-portfolio-dev.firebaseapp.com",
    projectId: "dev-portfolio-dev",
    storageBucket: "dev-portfolio-dev.appspot.com",
    messagingSenderId: "1081547546374",
    appId: "1:1081547546374:web:877c1ce4c9a64a023ac887",
    measurementId: "G-N3KVSW0446"
  }
}
else if (process.env.NODE_ENV === 'production') {
  firebaseConfig = {
     apiKey: "AIzaSyBhJZOq7RDFgM32PvZqhtsqvlZvxulz4PI",
     authDomain: "dev-portfolio-89f56.firebaseapp.com",
     projectId: "dev-portfolio-89f56",
     storageBucket: "dev-portfolio-89f56.appspot.com",
     messagingSenderId: "83518598822",
     appId: "1:83518598822:web:77c73a2fbbbe1735d40e67",
     measurementId: "G-GJT677YJHX"
 }
}

const DataContext = React.createContext()

function DataContextProvider({children, value})  {

  const [ projects, setProjects ] = useState([])

  useEffect(() => {

    firebase.initializeApp(firebaseConfig)

    firebase.analytics.isSupported().then((supported) => supported && firebase.analytics())

    const db = firebase.firestore()

    const storage = firebase.storage().ref()

    db.collection("projects").get()
      .then((querySnapshot) => {

        const arrayOfPromises = querySnapshot.docs.map( doc => {
          return new Promise((resolve, reject) => {
            resolve(
              storage.child(`projects/${doc.id}/cover/${doc.data().imgTitleFilename}`).getDownloadURL()
                .then( url => {
                  return {
                        id: doc.id,
                        keywords: doc.data().keywords,
                        title: doc.data().title,
                        subtitle: doc.data().subtitle,
                        imgTitleURL: url,
                        imgTitleFilename: doc.data().imgTitleFilename,
                        descriptionParagraphs: doc.data().descriptionParagraphs,
                        imgDescriptionFileNames: doc.data().imgDescriptionFileNames,
                        github: doc.data().github,
                        liveLink: doc.data().liveLink
                  }
                })
                .then((obj) => {

                  const arrayOfURLPromises = obj.imgDescriptionFileNames.map( fileName => {
                    return new Promise((resolve, reject) => {
                      resolve( storage.child(`projects/${doc.id}/detail/${fileName}`).getDownloadURL() )
                    })
                  })

                  return Promise.all(arrayOfURLPromises)
                    .then( urls => {
                      return {...obj, imgDescriptionURLs: urls}
                    })
                })
            )
          })
        })

        const resolvedPromises = Promise.all(arrayOfPromises)

        return resolvedPromises

      })
      .then((state) => setProjects(state))
  }, [])

  return (
    <DataContext.Provider value={{projects}}>
      {children}
    </DataContext.Provider>
  )
}

export { DataContextProvider, DataContext }
