import React, { useState, useEffect, createContext } from 'react'

export const KosonganContext = createContext()

function KosonganContextProvider(props) {
  const [items, setItems] = useState({
    list: [], isLoadMore: true, offset: 0, count: 0, order: 'desc'
  })
  const [loading, setLoading] = useState({
    initial: true,
    refreshing: false
  })

  useEffect(() => {

  }, [])

  const _logout = async () => {
    alert('hai')
  }

  return (
    <KosonganContext.Provider
      value={{
        items,
        loading,
        _logout
      }}>
      {props.children}
    </KosonganContext.Provider>
  )
}

export default KosonganContextProvider
