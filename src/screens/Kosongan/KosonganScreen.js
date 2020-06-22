import React from 'react'
import KosonganView from './KosonganView'
import KosonganContextProvider from './KosonganContext'


const KosonganScreen = ({ navigation }) => {
  return (
    <KosonganContextProvider navigation={navigation}>
      <KosonganView navigation={navigation} />
    </KosonganContextProvider>
  )
}

export default KosonganScreen
