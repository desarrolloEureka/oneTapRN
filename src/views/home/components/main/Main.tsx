import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Switch,
  Image,
  ScrollView,
  Alert,
  BackHandler
} from 'react-native';
import { globalStyles } from '../../../../globalStyles/globalStyles';
import HomeHook from '../../hooks/HomeHook';
import { homeStyles } from '../../styles/homeStyles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  SendSwitchProfile,
  SendSwitchActivateCard,
  SendTemplateSelected
} from '../../../../reactQuery/users';
import { useNavigation, useRoute, useNavigationState } from '@react-navigation/native';
import MenuSuperior from '../../../menuSuperior/MenuSuperior';
import { StackNavigationProp } from '@react-navigation/stack';

export type RouteStackParamList = {
  Home: undefined;
  PreviewTemplate: undefined;
  Profile: { isProUser: boolean };
  ChangePassword: undefined;
  OnboardingOne: undefined;
  OnboardingTwo: undefined;
  OnboardingThree: undefined;
  OnboardingInicioSesion: undefined;
  Login: undefined;
  RecoveryPassword: undefined;
  RecoveryCode: undefined;
  CreateNewPassword: undefined;
  PasswordChanged: undefined;
  AcercaDe: undefined;
  Terminos: undefined;
  Politicas: undefined;
  Plantillas: undefined;
  webViewPassword: undefined;
  Splash: undefined;
}

const Main = () => {
  const { tab, setTab } = HomeHook();
  const [isSwitchOn1, setSwitchOn1] = useState(false);
  const [isSwitchOn2, setSwitchOn2] = useState(false);
  //const navigation = useNavigation();
  const route = useRoute();
  const routes = useNavigationState(state => state.routes);
  const navigation = useNavigation<StackNavigationProp<RouteStackParamList, 'Home'>>()

  const handleSwitchToggle1 = () => {
    // Muestra una alerta cuando se cambia el estado del Switch 1
    Alert.alert(
      'Alerta',
      `Acabas de ${isSwitchOn1
        ? 'activar activar el perfil social, por ende este será el perfil que verán las personas cuando escaneen tu tarjeta'
        : 'activar activar el perfil PRO, por ende este será el perfil que verán las personas cuando escaneen tu tarjeta'
      }`,
      [{ text: 'OK', onPress: () => handleUpdateSwitch() }],
      { cancelable: false }
    );
  };

  const handleUpdateSwitch = async () => {
    setSwitchOn1(!isSwitchOn1);
    await SendSwitchProfile('WKKd3f2FbZUrSauKF1kJFdmF2k32', isSwitchOn1);
  };

  const handleSwitchToggle2 = () => {
    // Muestra una alerta cuando se cambia el estado del Switch 2
    Alert.alert(
      'Alerta',
      `Acabas de ${isSwitchOn2
        ? 'activar tu tarjeta'
        : 'desactivar tu tarjeta, por ende nadie podrá ver tu perfil hasta que vuelvas a activarla '
      }`,
      [{ text: 'OK', onPress: () => handleUpdateSwitchCard() }],
      { cancelable: false }
    );
  };

  const handleUpdateSwitchCard = async () => {
    setSwitchOn2(!isSwitchOn2);
    await SendSwitchActivateCard('WKKd3f2FbZUrSauKF1kJFdmF2k32', isSwitchOn2);
  };

  const handleEyeButtonPress = () => {
    // Lógica cuando se presiona el botón del ojo
    console.log('Botón del ojo presionado');
  };

  const handleTabPress = (tabName: string) => {

    //console.log(`Pestaña presionada: ${tabName}`);
    if (tabName === 'Social') {
      navigation.navigate('Profile', { isProUser: false });
    } else {
      navigation.navigate('Profile', { isProUser: true });
    }
  };

  interface GridItem {
    id: number;
    imageSource: any; // Ajusta el tipo según el tipo real de tus imágenes
  }

  const data: GridItem[] = [
    { id: 1, imageSource: require('src/images/social.png') },
    { id: 2, imageSource: require('src/images/corporativa.png') },
    { id: 3, imageSource: require('src/images/profesional.png') }
    // Agrega más elementos según sea necesario
  ];

  const handleImagePress = (id: number) => {
    // Lógica cuando se presiona una imagen
    console.log(`Imagen presionada: ${id}`);
    SendTemplateSelected('WKKd3f2FbZUrSauKF1kJFdmF2k32', '' + id, '' + id);
  };

  const handleNavigatePreview = () => {
    console.log('Navegacion vista previa.....');
    navigation.navigate('PreviewTemplate');
  };

  return (
    <SafeAreaView style={homeStyles.rootContainer}>
      <MenuSuperior />
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
                trackColor={{ false: '#02AF9B', true: '#02AF9B' }}
                thumbColor={isSwitchOn1 ? 'white' : 'white'}
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
                trackColor={{ false: '#02AF9B', true: '#02AF9B' }}
                thumbColor={isSwitchOn2 ? 'white' : 'white'}
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
                  <View style={homeStyles.imageContainer}>
                    <Image
                      source={data[0].imageSource}
                      style={{ width: 80, height: 150 }}
                    />
                    <View
                      style={{
                        height: '100%',
                        width: '100%',
                        position: 'absolute'
                      }}>
                      <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View
                          style={{
                            flex: 1,
                            alignItems: 'flex-start',
                            justifyContent: 'flex-start'
                          }}>
                          <TouchableOpacity
                            style={homeStyles.buttonT}
                            onPress={handleNavigatePreview}>
                            <Text style={homeStyles.buttonTextT}>
                              Vista Previa
                            </Text>
                          </TouchableOpacity>
                        </View>

                        <View
                          style={{
                            flex: 1,
                            alignItems: 'flex-end',
                            justifyContent: 'flex-start'
                          }}>
                          <TouchableOpacity
                            style={homeStyles.buttonT}
                            onPress={() => {
                              handleImagePress(data[0].id);
                              navigation.navigate('Plantillas'); // Reemplaza 'Plantillas' con el nombre de tu pantalla
                            }}>
                            <Text style={homeStyles.buttonTextT}>
                              Seleccionar Plantilla
                            </Text>
                          </TouchableOpacity>
                        </View>
                      </View>

                      <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View
                          style={{
                            flex: 1,
                            alignItems: 'flex-start',
                            justifyContent: 'flex-end'
                          }}>
                          <TouchableOpacity
                            style={homeStyles.buttonT}
                            onPress={() => handleImagePress(data[0].id)}>
                            <Text style={homeStyles.buttonTextT}>
                              Plantilla 1
                            </Text>
                          </TouchableOpacity>
                        </View>

                        <View
                          style={{
                            flex: 1,
                            alignItems: 'flex-end',
                            justifyContent: 'flex-end'
                          }}>
                          <TouchableOpacity
                            style={homeStyles.buttonT}
                            onPress={() => handleImagePress(data[0].id)}>
                            <Text style={homeStyles.buttonTextT}>
                              Cambiar Fondo de plantilla
                            </Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                  </View>

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
