import React, { Fragment, useState, useEffect } from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import { showToast } from '../../../../services/common'
import { useDispatch } from 'react-redux'
import * as actions from '../../../../redux/actions/surat'
import Spinner from '../../../presesentationals/Spinner'
import { ITEMS_CENTER } from '../../../../configs/styles'

export default function SuratAdd(props) {
  const [fields, setFields] = useState({
    nomor_surat: '',
    perihal: '',
    pengirim: '',
    kategori: '',
    status: 1,
    tanggal: '2019-09-09'
  })
  const [loading, setLoading] = useState({
    initial: true,
    onUpdate: false,
    sucess: false
  })

  const dispatch = useDispatch()

  useEffect(() => {
    const { id } = props.navigation.state.params
    dispatch(actions.getSuratOne('halo', id)).then(res => {
      res.status_code === 200 ? setFields(res.payload) : showToast(res.description)
      setLoading({ ...loading, initial: false })
    })
  }, [])

  const setFormValue = (name, value) => setFields({ ...fields, [name]: value })

  const validate = () => {
    if (fields.nomor_surat === '') {
      showToast('tak boleh kosong bro!!')
      return false
    }

    if (fields.perihal === '') {
      showToast('tak boleh kosong bro!!')
      return false
    }

    if (fields.pengirim === '') {
      showToast('tak boleh kosong bro!!')
      return false
    }

    if (fields.kategori === '') {
      showToast('tak boleh kosong bro!!')
      return false
    }

    submit()
  }

  const submit = () => {
    setLoading({ ...loading, onUpdate: true })
    dispatch(actions.editSurat('halo', fields)).then(res => {
      if (res.status_code === 200) {
        setLoading({ ...loading, sucess: true })
        showToast('berhasil edit')
      } else {
        setLoading({ ...loading, sucess: false })
        showToast(res.description)
      }
    })
    setLoading({ ...loading, onUpdate: false })
  }

  return (
    <View style={{ flex: 1, padding: 15 }}>
      {loading.initial ?
        <Spinner /> :
        loading.success ?
          <View style={{ flex: 1, ...ITEMS_CENTER }}>
            <Text>Berhasil, back buat balik</Text>
            <Button title="BACK" onPress={() => props.navigation.goBack()} />
          </View>
          :
          <Fragment>
            <View>
              <Text>No Surat</Text>
              <TextInput
                keyboardType='number-pad'
                style={{ borderColor: '#eee', borderWidth: 1 }}
                value={fields.nomor_surat}
                onChangeText={(e) => setFormValue('nomor_surat', e)} />
            </View>
            <View>
              <Text>Perihal</Text>
              <TextInput
                style={{ borderColor: '#eee', borderWidth: 1 }}
                value={fields.perihal}
                onChangeText={(e) => setFormValue('perihal', e)} />
            </View>
            <View>
              <Text>Pengirim</Text>
              <TextInput
                style={{ borderColor: '#eee', borderWidth: 1 }}
                value={fields.pengirim}
                onChangeText={(e) => setFormValue('pengirim', e)} />
            </View>
            <View>
              <Text>kategori</Text>
              <TextInput
                style={{ borderColor: '#eee', borderWidth: 1 }}
                value={fields.kategori}
                onChangeText={(e) => setFormValue('kategori', e)} />
            </View>


            {loading.onUpdate ?
              <Spinner />
              :
              <Button title="Press me" onPress={validate} />
            }
          </Fragment>
      }
    </View>
  )
}
