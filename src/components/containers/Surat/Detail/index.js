import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import * as actions from '../../../../redux/actions/surat'
import { useDispatch } from 'react-redux'
import { showToast } from '../../../../services/common'
import Spinner from '../../../presesentationals/Spinner'
import Header from './HeaderDetail'
import ModalConfirmation from '../../../presesentationals/ModalConfirmation'
import NavigationService from '../../../../navigations/NavigationService.js'

export default function SuratDetail(props) {
  const [item, setItem] = useState('')
  const [popup, setPopup] = useState(false)
  const [visibleConfirm, setvisibleConfirm] = useState(false)
  const [loading, setLoading] = useState({
    initial: false,
    delete: false
  })

  const dispatch = useDispatch()

  useEffect(() => {
    const { id } = props.navigation.state.params
    setLoading({ ...loading, initial: true })
    dispatch(actions.getSuratOne('halo', id)).then(res => {
      res.status_code === 200 ? setItem(res.payload) : showToast(res.description)
      setLoading({ ...loading, initial: false })
    })
  }, [])

  const goBack = () => props.navigation.goBack()

  const closeModal = () => setvisibleConfirm(!visibleConfirm)

  const onPopupEvent = (eventName, index) => {
    if (eventName !== 'itemSelected') return
    if (index === 0) {
      const { id } = props.navigation.state.params
      NavigationService.navigate('SuratEditScreen', { id })
    } else {
      setvisibleConfirm(true)
    }

    setPopup(!popup)
  }

  const deleteItem = () => {
    setLoading({ ...loading, delete: true })
    const { id } = props.navigation.state.params
    dispatch(actions.deleteSurat('halo', id)).then(res => {
      if (res.status_code === 200) {
        setvisibleConfirm(false)
        showToast('berhasil hapus')
        setTimeout(() => {
          props.navigation.goBack()
          props.navigation.state.params.fetch({ order: 'desc' }, 'initial')
        }, 500)
      } else {
        showToast(res.description)
      }
      setLoading({ ...loading, delete: false })
    })
  }

  return (
    <View>
      <Header
        goBack={goBack}
        onPopupEvent={onPopupEvent}
        popup={popup} />
      {loading.initial ?
        <Spinner /> :
        <View style={{ padding: 15 }}>
          <Text>ID -> {item.id || ''}</Text>
          <Text>No Surat -> {item.no_surat || ''}</Text>
          <Text>Perihal -> {item.perihal || ''}</Text>
          <Text>pengirim -> {item.pengirim || ''}</Text>
          <Text>kategori -> {item.kategori || ''}</Text>
          <Text>status -> {item.status || ''}</Text>
          <Text>tanggal -> {item.tanggal || ''}</Text>
        </View>
      }

      <ModalConfirmation
        visible={visibleConfirm}
        loading={loading.delete}
        handleNo={closeModal}
        // isDelete={isDelete}
        handleYes={deleteItem}
        textConfirm='Apakah kami yakin ingin menghapus data ini ?' />
    </View>
  )
}

SuratDetail.navigationOptions = {
  header: null
}