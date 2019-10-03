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
    onSubmit: false,
    success: false
  })

  const dispatch = useDispatch()

  const setFormValue = (name, value) => setFields({ ...fields, [name]: value })

  const validate = () => {
    if (fields.nomor_surat === '') {
      showToast('no surat tak boleh kosong bro!!')
      return false
    }

    if (fields.perihal === '') {
      showToast('perihal tak boleh kosong bro!!')
      return false
    }

    if (fields.pengirim === '') {
      showToast('pengirim tak boleh kosong bro!!')
      return false
    }

    if (fields.kategori === '') {
      showToast('kategori tak boleh kosong bro!!')
      return false
    }

    submit()
  }

  const submit = () => {
    setLoading({ ...loading, onSubmit: true })
    dispatch(actions.submitSurat('halo', fields)).then(res => {
      if (res.status_code === 200) {
        setLoading({ ...loading, success: true })
        showToast('berhasil submit')
      } else {
        setLoading({ ...loading, success: false })
        showToast(res.description)
      }
    })
    setLoading({ ...loading, onSubmit: false })
  }

  const backFetch = () => {
    const { fetch } = props.navigation.state.params
    fetch({ order: 'desc' }, 'initial')
    props.navigation.goBack()
  }

  return (
    <View style={{ flex: 1, padding: 15 }}>
      {loading.success ?
        <View style={{ flex: 1, ...ITEMS_CENTER }}>
          <Text>Berhasil, back buat balik</Text>
          <Button title="BACK" onPress={backFetch} />
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


          {loading.onSubmit ?
            <Spinner />
            :
            <Button title="Press me" onPress={validate} />
          }
        </Fragment>
      }
    </View>
  )
}
