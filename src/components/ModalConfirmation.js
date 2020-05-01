import React from 'react'
import PropTypes from 'prop-types'
import { View, Modal, StyleSheet } from 'react-native'
import { Button } from 'native-base'
import { OPACITY_MODAL, WHITE, RED } from '../constants/Colors'
import { ITEMS_CENTER } from '../constants/Styles'
import Spinner from './Spinner'
import Text from './Text'


const propsTypes = {
  visible: PropTypes.bool.isRequired,
  handleNo: PropTypes.func.isRequired,
  handleYes: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  textConfirm: PropTypes.string
}

const propsDefault = {
  textConfirm: 'Sedang memuat..'
}

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
              <Text style={{ color: RED }}>Mohon tunggu..</Text>
            </View>
            :
            <View style={ITEMS_CENTER}>
              <Text style={{ textAlign: 'center' }}>{textConfirm}</Text>
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
            <Text>YES</Text>
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
    color: WHITE
  },
})

ModalConfirmation.propTypes = propsTypes

ModalConfirmation.defaultProps = propsDefault

export default ModalConfirmation
