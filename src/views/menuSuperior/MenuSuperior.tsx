import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';

const MyComponent = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleItemPress = (item: { id: number; name: string }) => {
    
    console.log('Item pressed:', item.name);
    
    setModalVisible(false);
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
        <Text>☰</Text>
      </TouchableOpacity>

      <Modal isVisible={isModalVisible} onBackdropPress={toggleModal}>
        {renderModalContent()}
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: '100%',
  },
});

export default MyComponent;

