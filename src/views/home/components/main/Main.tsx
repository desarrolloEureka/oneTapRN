import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, Switch, Image, ScrollView, Alert } from 'react-native';
import { globalStyles } from '../../../../globalStyles/globalStyles';
import HomeHook from '../../hooks/HomeHook';
import { homeStyles } from '../../styles/homeStyles';
import Icon from 'react-native-vector-icons/FontAwesome';

const Main = () => {
  const { tab, setTab } = HomeHook();

  const [isSwitchOn1, setSwitchOn1] = useState(false);
  const [isSwitchOn2, setSwitchOn2] = useState(false);

  const handleSwitchToggle1 = () => {
    // Muestra una alerta cuando se cambia el estado del Switch 1
    Alert.alert(
      'Cambio de estado',
      `Switch 1: ${isSwitchOn1 ? 'Activado' : 'Desactivado'}`,
      [
        { text: 'OK', onPress: () => setSwitchOn1(!isSwitchOn1) }
      ],
      { cancelable: false }
    );
  };

  const handleSwitchToggle2 = () => {
    // Muestra una alerta cuando se cambia el estado del Switch 2
    Alert.alert(
      'Cambio de estado',
      `Switch 2: ${isSwitchOn2 ? 'Activado' : 'Desactivado'}`,
      [
        { text: 'OK', onPress: () => setSwitchOn2(!isSwitchOn2) }
      ],
      { cancelable: false }
    );
  };

  const handleEyeButtonPress = () => {
    // Lógica cuando se presiona el botón del ojo
    console.log('Botón del ojo presionado');
  };

  const handleTabPress = (tabName: string) => {
    // Lógica de manejo de la pestaña (puedes personalizar según tus necesidades)
    console.log(`Pestaña presionada: ${tabName}`);
  };

  interface GridItem {
    id: number;
    imageSource: any; // Ajusta el tipo según el tipo real de tus imágenes
  }

  const data: GridItem[] = [
    { id: 1, imageSource: require('src/images/plantilla_social_ej1.png') },
    { id: 2, imageSource: require('src/images/plantilla_social_ej2.png') },
    { id: 3, imageSource: require('src/images/plantilla_social_ej3.png') }
    // Agrega más elementos según sea necesario
  ];

  const handleImagePress = (id: number) => {
    // Lógica cuando se presiona una imagen
    console.log(`Imagen presionada: ${id}`);
  };

  return (
    <SafeAreaView style={homeStyles.rootContainer}>
      <View style={globalStyles.container}>
        <View style={homeStyles.switchContainer}>
          <View style={homeStyles.switchContainer}>
            <View style={homeStyles.switchWrapper}>
              <Text style={[homeStyles.switchText, { color: '#030124' }]}>
                Perfil a mostrar{' '}
              </Text>
              <Switch
                value={isSwitchOn1}
                onValueChange={handleSwitchToggle1}
                trackColor={{ false: '#62AD9B', true: '#81b0ff' }}
                thumbColor={isSwitchOn1 ? '#f5dd4b' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                style={homeStyles.switch}
              />
              <Text style={[homeStyles.switchText, { color: '#030124' }]}>
                Social | PRO
              </Text>
            </View>

            <View style={homeStyles.switchWrapper}>
              <Text style={[homeStyles.switchText, { color: '#030124' }]}>
                Activar tarjeta
              </Text>
              <Switch
                value={isSwitchOn2}
                onValueChange={handleSwitchToggle2}
                trackColor={{ false: '#62AD9B', true: '#81b0ff' }}
                thumbColor={isSwitchOn2 ? '#f5dd4b' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                style={homeStyles.switch}
              />
              <Text style={[homeStyles.switchText, { color: '#030124' }]}>
                ON | OFF
              </Text>
            </View>
          </View>

          <TouchableOpacity
            style={[homeStyles.button, { backgroundColor: 'white' }]}
            onPress={handleEyeButtonPress}>
            <Text style={homeStyles.buttonText}>
              <Icon name="eye" size={20} color="blue" /> 12
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={homeStyles.body}>
        <Text style={homeStyles.titleBody}>Plantillas</Text>
        <View style={homeStyles.tab}>
          <TouchableOpacity onPress={() => setTab(0)}>
            <Text>Social</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setTab(1)}>
            <Text>Profesional</Text>
          </TouchableOpacity>
        </View>
        <View style={homeStyles.tabSeparator} />
        <View style={homeStyles.tabContainer}>
          {tab === 0 ? (
            <ScrollView contentContainerStyle={homeStyles.scrollViewContainer}>
              <View style={homeStyles.imageRow}>
                <View style={homeStyles.rowContainer}>
                  <TouchableOpacity
                    style={homeStyles.imageContainer}
                    onPress={() => handleImagePress(data[0].id)}>
                    <Image
                      source={data[0].imageSource}
                      style={{ width: 80, height: 150 }}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={homeStyles.imageContainer}
                    onPress={() => handleImagePress(data[1].id)}>
                    <Image
                      source={data[1].imageSource}
                      style={{ width: 80, height: 150 }}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={homeStyles.imageRow}>
                <TouchableOpacity
                  style={[homeStyles.imageContainer, { marginTop: 10 }]}
                  onPress={() => handleImagePress(data[2].id)}>
                  <Image
                    source={data[2].imageSource}
                    style={{ width: 80, height: 150 }}
                  />
                </TouchableOpacity>
              </View>
            </ScrollView>
          ) : (
            <View style={homeStyles.container}>
              <View style={homeStyles.rowContainer}>
                <TouchableOpacity
                  style={homeStyles.imageContainer}
                  onPress={() => handleImagePress(1)}>
                  <Image
                    source={require('src/images/plantilla_social_ej1.png')}
                    style={{ width: 80, height: 150 }}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={homeStyles.imageContainer}
                  onPress={() => handleImagePress(2)}>
                  <Image
                    source={require('src/images/plantilla_social_ej2.png')}
                    style={{ width: 80, height: 150 }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          )}
        </View>
      </View>
      <View style={homeStyles.navbar}>
        <TouchableOpacity
          onPress={() => handleTabPress('Home')}
          style={homeStyles.tabnav}>
          <Icon name="home" size={25} color="black" />
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleTabPress('Social')}
          style={homeStyles.tabnav}>
          <Icon name="users" size={25} color="black" />
          <Text>Social</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleTabPress('Pro')}
          style={homeStyles.tabnav}>
          <Icon name="briefcase" size={25} color="black" />
          <Text>PRO</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Main;
