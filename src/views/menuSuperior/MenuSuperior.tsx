import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';
import Modal from 'react-native-modal';

const MenuSuperior = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleItemPress = (item: { id: number; name: string }) => {
    if (item.id === 11) {
      // Si el id es 11 (Cerrar Sesión), muestra una alerta
      Alert.alert(
        'Alerta',
        '¿Estás seguro de que deseas cerrar sesión?',
        [
          {
            text: 'NO',
            style: 'cancel',
          },
          {
            text: 'SI',
            onPress: () => {
              // Aquí puedes agregar lógica para cerrar sesión
              setModalVisible(false);
              // Lógica adicional de cierre de sesión...
            },
          },
        ],
        { cancelable: false }
      );
    } else {
      // Si el id no es 11, simplemente cierra el modal
      setModalVisible(false);
    }
    

    if (item.id === 10) {
      // Si el id es 1 (Eliminar Cuenta), muestra una alerta
      Alert.alert(
        'Alerta',
        '¿Estás seguro de que deseas eliminar tu sesión?',
        [
          {
            text: 'NO',
            style: 'cancel',
          },
          {
            text: 'SI',
            onPress: () => {
              // Aquí puedes agregar lógica para cerrar sesión
              setModalVisible(false);
              // Lógica adicional de cierre de sesión...
            },
          },
        ],
        { cancelable: false }
      );
    } else {
      // Si el id no es 11, simplemente cierra el modal
      setModalVisible(false);
    }
  };

  const renderModalContent = () => {
    const items = [
      { id: 1, name: 'Comprar planes personales' },
      { id: 2, name: 'Comprar plan corporativo' },
      { id: 3, name: 'Cambiar material de la tarjeta' },
      { id: 4, name: 'Ver tienda' },
      { id: 5, name: 'Acerca de ' },
      { id: 6, name: 'Politicas de privacidad' },
      { id: 7, name: 'Terminos y condiciones' },
      { id: 8, name: 'Politicas de devolucion' },
      { id: 9, name: 'Preguntas Frecuentes' },
      { id: 10, name: 'Eliminar cuenta' },
      { id: 11, name: 'Cerrar Sesion' },
    ];

    return (
      <View style={styles.modalContent}>
        {items.map((item) => (
          <TouchableOpacity
            key={item.id}
            onPress={() => handleItemPress(item)}
            style={styles.item}
          >
            <Text>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleModal} style={styles.button}>
        <Text style={styles.iconText}>☰</Text>
      </TouchableOpacity>

      <Modal isVisible={isModalVisible} onBackdropPress={toggleModal}>
        {renderModalContent()}
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    padding: 10,
  },
  button: {
    padding: 10,
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  iconText: {
    fontSize: 30, // Tamaño del texto ajustado según tu preferencia
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: '100%',
  },
});

export default MenuSuperior;
