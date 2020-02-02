import React, { createContext, useState, useEffect } from 'react'
import { get_api } from '../../../actions'
import { showToast } from '../../../services/common'
import { TMDB_API_KEY } from "../../../configs/apiConfig"

export const HomeContext = createContext()

export default function HomeContextPage(props) {

  const [popular, setPopular] = useState([])
  const [topRated, setTopRated] = useState([])
  const [nowPlaying, setNowPlaying] = useState([])
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    get_api(`/movie/popular?api_key=${TMDB_API_KEY}`).then(res => {
      setPopular(res.results)
    })
      .catch(e => {
        console.log('e isinya response semua', e)
      })

    get_api(`/movie/top_rated?api_key=${TMDB_API_KEY}`).then(res => {
      setTopRated(res.results)
    })

    get_api(`/movie/now_playing?api_key=${TMDB_API_KEY}`).then(res => {
      setNowPlaying(res.results)
    })
  }, [])

  useEffect(() => {
    if (popular.length > 0 && topRated.length > 0 && nowPlaying.length > 0) {
      setLoading(false)
    }
  }, [popular, topRated, nowPlaying])

  const setValueSearch = (value) => setSearch(value)

  const onSearch = () => {
    if (search.length < 1) {
      showToast('tidak boleh kosong')
      return false
    }
    setSearch('')
  }


  return (
    <HomeContext.Provider value={{
      popular,
      topRated,
      nowPlaying,
      search,
      setValueSearch,
      onSearch,
      loading,
      setLoading
    }}>
      {props.children}
    </HomeContext.Provider>
  )
}