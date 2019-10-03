import React from 'react'
import { View, Text, Modal, StyleSheet } from 'react-native'
import { Button } from 'native-base'
import { OPACITY_MODAL, WHITE, TEXT_BASE, ITEMS_CENTER, RED } from '../../configs/styles'
import Spinner from './Spinner'

const ModalConfirmation = ({ visible, handleNo, loading, handleYes, textConfirm }) => (
  <Modal
    animationType="fade"
    transparent={true}
    visible={visible}
    onRequestClose={handleNo}>
    <View style={styles.modal}>
      <View style={styles.innerModal}>
        {
          loading ?
            <View style={ITEMS_CENTER}>
              <Spinner color={RED} size="large" />
              <Text style={{ color: RED }}>Mohon tunggu</Text>
            </View>
            :
            <View style={ITEMS_CENTER}>
              <Text style={{ ...TEXT_BASE, textAlign: 'center' }}>{textConfirm}</Text>
            </View>
        }

        <View style={styles.yesNoWrap}>
          <Button
            danger
            onPress={handleNo}
            style={[styles.btnModal, { backgroundColor: RED }]}>
            <Text style={styles.edit}>NO</Text>
          </Button>
          <Button
            onPress={handleYes}
            bordered
            style={[styles.btnModal, { borderColor: RED }]}>
            <Text style={TEXT_BASE}>YES</Text>
          </Button>
        </View>
      </View>
    </View>
  </Modal>
)

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: OPACITY_MODAL
  },
  innerModal: {
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: WHITE,
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingBottom: 20,
    paddingTop: 30
  },
  yesNoWrap: {
    flexDirection: 'row',
    marginTop: 20
  },
  btnModal: {
    flex: 1,
    marginRight: 10,
    borderRadius: 5,
    justifyContent: 'center'
  },
  edit: {
    ...TEXT_BASE,
    color: WHITE,
  },
})

export default ModalConfirmation
