import React, { useState} from 'react';
import { SafeAreaView, 
  Text, 
  StyleSheet, 
  Button, 
  Pressable,
  Modal
 } from 'react-native';
import Formulario from './src/components/Formulario';


const App =  () => {

  //Los hooks van en la parte superior

  const [visibleModal, setVisibleModal] = useState(false);

  const newAppointmentHandler= () => {
    setVisibleModal(false);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Administrador de citas {'\n'}
        <Text style={styles.boldTitle}>Veterinaria</Text>
      </Text>
      <Pressable 
        onPress={()=> setVisibleModal(true)}
        style={styles.btnNewAppointment}
        >
        <Text
        style={styles.btnTextNewAppointment}
        >Nueva Cita</Text>
      </Pressable>

      <Formulario 
        visibleModal={visibleModal}
        newAppointmentHandler={newAppointmentHandler}
      />
    </SafeAreaView>
  );


}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F3F4F6',
    flex: 1,

  },

  title: {
    textAlign: 'center',
    fontSize: 24,
    color: '#374151',
    fontWeight: 'bold',
  },
  boldTitle: {
    fontWeight: '900',
    color: '#6D28D9'
  },
  btnNewAppointment:{
    backgroundColor: '#6D28D9',
    padding: 15,
    marginTop: 20,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  btnTextNewAppointment: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 18,
    fontWeight: '900',
    textTransform: 'uppercase',
  }
 
});
export default App;