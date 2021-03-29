import React, { useState, useEffect } from 'react'

const DataContext = React.createContext()

function DataContextProvider({children})  {

  const [ projects, setProjects ] = useState([])

  useEffect(() => {
    //TODO: Get projects data from firestore and set up projects state
  }, [])

  return (
    <DataContext.Provider value={{projects}}>
      {children}
    </DataContext.Provider>
  )
}

export { DataContextProvider, DataContext }
