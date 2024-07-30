import React, { useState } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Alert,
  Linking,
} from 'react-native';
import Modal from 'react-native-modal';
import { useNavigation } from '@react-navigation/native';
import { StackNavigation } from '../../types/navigation';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { GetUser, SendInactiveUser } from '../../reactQuery/users';
import LogOut from '../../hooks/logOut/LogOut';

const MenuSuperior = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation<StackNavigation>();
  const { data } = GetUser();
  const { logOut } = LogOut();

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleDeleteUser = async () => {
    const userId = data?.uid;
    if (userId) {
      const resUpdate = await SendInactiveUser(userId);
      if (resUpdate === true) {
        Alert.alert('Alerta', 'Se eliminó correctamente la cuenta');
        logOut();
      } else {
        Alert.alert(
          'Error',
          'Ocurrió un error y no fue posible eliminar la cuenta. Por favor, inténtalo de nuevo.',
        );
      }
    }
  };

  const handleItemPress = (item: { id: number; name: string }) => {
    setModalVisible(false);

    if (item.id === 1) {
      Linking.openURL(
        'https://onetap.com.co/categoria-producto/planes-personales/',
      );
    } else if (item.id === 2) {
      Linking.openURL('https://onetap.com.co/plan-corporativo/');
    } else if (item.id === 3) {
      Linking.openURL('https://onetap.com.co/categoria-producto/tarjetas/');
    } else if (item.id === 4) {
      Linking.openURL('https://onetap.com.co/tienda-one-tap/');
    } else if (item.id === 8) {
      Linking.openURL('https://onetap.com.co/reembolso_devoluciones/');
    } else if (item.id === 9) {
      Linking.openURL('https://onetap.com.co/preguntas-frecuentes/');
    } else if (item.id === 5) {
      navigation.navigate('AcercaDe');
    } else if (item.id === 7) {
      navigation.navigate('Terminos');
    } else if (item.id === 6) {
      navigation.navigate('Politicas');
    } else if (item.id === 10) {
      navigation.navigate('ChangePassword');
    } else if (item.id === 11) {
      Alert.alert(
        'Alerta',
        '¿Estás seguro de que deseas eliminar tu cuenta?',
        [
          {
            text: 'NO',
            style: 'cancel',
          },
          {
            text: 'SI',
            onPress: async () => {
              handleDeleteUser();
            },
          },
        ],
        { cancelable: false },
      );
    } else if (item.id === 12) {
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
            onPress: async () => {
              logOut();
            },
          },
        ],
        { cancelable: false },
      );
    }
  };

  const renderModalContent = () => {
    const items = [
      { id: 1, name: 'Comprar Planes Personales', icon: 'shopping-cart' },/* - */
      { id: 2, name: 'Comprar Plan Corporativo', icon: 'shopping-cart' }, /* - */
      { id: 3, name: 'Cambiar Material de la Tarjeta', icon: 'restore' },/* - */
      { id: 4, name: 'Ver Tienda', icon: 'storefront-outline' },/* - */
      { id: 5, name: 'Acerca De', icon: 'information-outline' },
      { id: 6, name: 'Políticas de Privacidad', icon: 'lock' },
      { id: 7, name: 'Términos y Condiciones', icon: 'file-contract' },
      { id: 8, name: 'Políticas de Devolución', icon: 'shopping-basket-remove' },/* - */
      { id: 9, name: 'Preguntas Frecuentes', icon: 'chat-question-outline' },
      { id: 10, name: 'Cambiar Contraseña', icon: 'password' },
      { id: 11, name: 'Eliminar Cuenta', icon: 'deleteuser' },
      { id: 12, name: 'Cerrar Sesión', icon: 'logout' }
    ];

    return (
      <View style={styles.modalContent}>
        {items.map(item => (
          <TouchableOpacity
            key={item.id}
            onPress={() => handleItemPress(item)}
            style={styles.item}>
            {item.icon === 'shopping-cart' ? <Feather name={item.icon} size={24} color="black" /> : null}
            {item.icon === 'restore' || item.icon === 'storefront-outline' || item.icon === 'information-outline' || item.icon === 'chat-question-outline' ? <MaterialCommunityIcons name={item.icon} size={24} color="black" /> : null}
            {item.icon === 'file-present' || item.icon === 'password' || item.icon === 'logout' ? <MaterialIcons name={item.icon} size={24} color="black" /> : null}
            {item.icon === 'deleteuser' ? <AntDesign name={item.icon} size={24} color="black" /> : null}
            {item.icon === 'lock' ? <SimpleLineIcons name={item.icon} size={23} color="black" /> : null}
            {item.icon === 'file-contract' ? <FontAwesome5 name={item.icon} size={22} color="black" /> : null}
            {item.icon === 'shopping-basket-remove' ? <Fontisto name={item.icon} size={22} color="black" /> : null}
            <Text style={{ color: 'black', paddingLeft: 12 }}> {item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  return (
    <View style={[styles.container]}>
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
    padding: 10,
    marginTop: 5,
    marginRight: 10,
  },
  button: {
    //padding: 10
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
    color: '#396593',
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: '100%',
    flexDirection: 'row',
  },
});

export default MenuSuperior;
