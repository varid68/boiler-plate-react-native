import React, { useState, useEffect, createContext } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ADD_COUNTER, SUBSTRACT_COUNTER } from '@redux/types'

export const KosonganContext = createContext()

function KosonganContextProvider(props) {
  const [items, setItems] = useState({
    list: [], isLoadMore: true, offset: 0, count: 0, order: 'desc'
  })
  const [loading, setLoading] = useState({
    initial: true,
    refreshing: false
  })
  const global = useSelector(state => state)
  const dispatch = useDispatch()

  useEffect(() => {

  }, [])


  const _logout = async () => {
    alert('hai')
  }

  const _addCounter = () => dispatch({ type: ADD_COUNTER, payload: null })

  const _substractCounter = () => dispatch({ type: SUBSTRACT_COUNTER, payload: null })

  return (
    <KosonganContext.Provider
      value={{
        items,
        loading,
        counter: global.counter,
        _logout,
        _addCounter,
        _substractCounter
      }}>
      {props.children}
    </KosonganContext.Provider>
  )
}


export default KosonganContextProvider
