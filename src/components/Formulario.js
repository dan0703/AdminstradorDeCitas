import React, {useState} from 'react'
import { SafeAreaView, Text, Modal, Button } from 'react-native'

const Formulario = ({visibleModal, newAppointmentHandler}) => {

  return (
    <Modal 
        animationType='slide'
        visible={visibleModal}
      >
        <SafeAreaView>
            <Text>Modal</Text>
            <Button 
            title = 'Presione aqui para cerrar'>
            onPress = {() => newAppointmentHandler()}
            </Button>
        </SafeAreaView>
      </Modal>
  )
}

export default Formulario
