import React, { useState, useEffect, createContext } from 'react'
import { showToast, addRemoveListenerBack } from 'services/common'
import { getListData } from 'actions/axios'
import { clearStorage } from 'actions/storage'

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
    await clearStorage()
    props.navigation.replace('Login')
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
