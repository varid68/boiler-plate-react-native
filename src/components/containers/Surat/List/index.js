import React, { Fragment, useEffect, useState } from 'react'
import { StatusBar, TouchableOpacity, View, Text } from 'react-native'
import { useDispatch } from 'react-redux'
import * as actions from '../../../../redux/actions/surat'
import { showToast } from '../../../../services/common'
import ListItem from './ListItem'
import PopupMenu from '../../../presesentationals/PopupMenu'
import Spinner from '../../../presesentationals/Spinner'
import { RED, ITEMS_CENTER, WHITE } from '../../../../configs/styles'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import NavigationService from '../../../../navigations/NavigationService'
import styles from '../SuratStyle'

export default function index(props) {
  const [surat, setSurat] = useState({
    list: [],
    isLoadMore: true,
    offset: 0,
    count: 0,
    order: 'desc'
  })
  const [loading, setLoading] = useState({
    initial: false,
    refreshing: false
  })

  const dispatch = useDispatch()

  useEffect(() => {
    fetchLoadMore()
  }, [])

  const fetchLoadMore = () => {
    let clone = { ...surat }
    const params = {
      limit: 4,
      offset: clone['count'] < 1 ? 0 : clone['offset'] + 4,
      sort: 'id',
      order: clone['order']
    }

    if (clone['count'] < 1) setLoading({ ...loading, initial: true })

    // DISABLE LOADING FOOTER END ITEM
    if (clone['list'].length === clone['count'] && clone['count'] !== 0) {
      setSurat({ ...surat, isLoadMore: false })
      return false
    }

    dispatch(actions.getSuratAll('halo', params)).then(res => {
      if (res.status_code === 200) {
        setSurat({
          ...surat,
          list: res.payload !== null ? clone['list'].concat(res.payload) : [],
          offset: res.offset,
          count: res.count
        })
      } else showToast(res.description)

      setLoading({ ...loading, initial: false })
    })
  }

  const fetchWithParam = (param = {}, loader) => {
    const params = {
      ...param,
      limit: 4,
      offset: 0,
      sort: 'id',
    }

    setLoading({ ...loading, [loader]: true })

    dispatch(actions.getSuratAll('halo', params)).then(res => {
      if (res.status_code === 200) {
        setSurat({
          ...surat,
          list: res.payload !== null ? [].concat(res.payload) : [],
          offset: 0,
          count: res.count,
          isLoadMore: true,
          order: param.order
        })
      } else showToast(res.description)

      setLoading({ ...loading, [loader]: false })
    })
  }

  const onPopupEvent = (eventName, index) => {
    if (eventName !== 'itemSelected') return
    if (index === 0) {
      fetchWithParam({ order: 'desc' }, 'initial')
    } else {
      fetchWithParam({ order: 'asc' }, 'initial')
    }
  }

  const navigate = () => NavigationService.navigate('SuratAddScreen', { fetch: fetchWithParam })

  return (
    <Fragment>
      <StatusBar backgroundColor={RED} />
      <View style={styles.header}>
        <Text style={{ color: WHITE, flex: 1 }}>Rincian Draf Surat</Text>
        <PopupMenu
          style={[styles.icon, { justifyContent: 'flex-end' }]}
          icon="more-vert"
          size={23}
          color={WHITE}
          actions={['Terbaru', 'Terlama']}
          onPress={onPopupEvent} />
      </View>
      {loading.initial ?
        <Spinner />
        :
        <ListItem
          fetchWithParam={fetchWithParam}
          order={surat.order}
          isRefreshing={loading.refreshing}
          list={surat.list}
          isLoadMore={surat.isLoadMore}
          fetchLoadMore={fetchLoadMore} />
      }

      <TouchableOpacity
        onPress={navigate}
        style={{
          ...ITEMS_CENTER,
          flexDirection: 'row',
          width: 50,
          height: 50,
          backgroundColor: WHITE,
          elevation: 3,
          borderRadius: 30,
          position: 'absolute',
          bottom: 25,
          right: 25
        }}>
        <MaterialIcon
          name='add'
          style={{ color: RED, fontSize: 35 }} />
      </TouchableOpacity>
    </Fragment>
  )
}

index.navigationOptions = {
  header: null
}
