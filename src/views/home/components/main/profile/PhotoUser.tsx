import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
  Alert,
  Modal,
  PermissionsAndroid
} from 'react-native';
import {
  launchImageLibrary,
  launchCamera,
  ImageLibraryOptions,
  MediaType,
} from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { profileStyles } from '../../../styles/profileStyles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SendDataImage, GetUser } from '../../../../../reactQuery/users';
import { UserData } from '../../../../../types/user';

const PhotoUser = ({ name, isProUser, isAlertSave }: { name?: string; isProUser: boolean; isAlertSave: boolean }) => {
  const { data, refetch } = GetUser();
  //const user = GetUser();
  //const data = user.data as unknown as UserData;
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedImagePro, setSelectedImagePro] = useState<string | null>(null);
  const [openModalImageProfile, setOpenModalImageProfile] = useState(false);

  useEffect(() => {
    setSelectedImage(null);
    setSelectedImagePro(null);
    refetch();
  }, []);

  const openModalImage = async () => {
    setOpenModalImageProfile(true);
  };

  const openCameraPicker = async () => {

    const cameraPermission = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        title: "Permiso para usar la cámara",
        message: "Esta aplicación necesita tu permiso para usar la cámara.",
        buttonNeutral: "Preguntar después",
        buttonNegative: "Cancelar",
        buttonPositive: "Aceptar"
      }
    );

    if (cameraPermission !== PermissionsAndroid.RESULTS.GRANTED) {
      Alert.alert("Permiso denegado", "No se puede acceder a la cámara porque no se otorgaron los permisos necesarios.");
      return;
    }

    const options: ImageLibraryOptions = {
      mediaType: 'photo' as MediaType,
      includeBase64: true,
      quality: 0.5,
      maxWidth: 600,
      maxHeight: 600
    };

    try {
      const response = await launchCamera(options);
      if (response.didCancel) {
        console.log('El usuario canceló la captura de imagen');
      } else if (response.errorCode) {
        console.log('Error al capturar imagen: ', response.errorMessage);
      } else {
        const asset = response.assets && response.assets[0];

        if (asset && asset.uri && asset.base64 && data && data?.uid) {
          if (isProUser === true) {
            setSelectedImagePro(asset.uri);
            await AsyncStorage.setItem('selectedImagePro', asset.uri);
          } else {
            setSelectedImage(asset.uri);
            await AsyncStorage.setItem('selectedImage', asset.uri);
          }

          await setOpenModalImageProfile(false);
          await SendDataImage(
            isProUser,
            data?.uid,
            `data:${asset.type};base64,${asset.base64}`
          );

        } else {
          Alert.alert(
            'Error',
            'La selección de imagen no es válida. Inténtalo de nuevo.'
          );
        }
      }
    } catch (error) {
      console.log('Error al capturar imagen: ', error);
    }
  };

  const openImagePicker = async () => {
    try {
      const options: ImageLibraryOptions = {
        mediaType: 'photo' as MediaType,
        includeBase64: true,
        quality: 0.5,
        maxHeight: 600,
        maxWidth: 600
      };

      const result = await launchImageLibrary(options);

      if (result.didCancel || result.errorMessage) {
        /*  Alert.alert(
           'Error',
           'El usuario canceló la selección o hubo un error. Inténtalo de nuevo'
         ); */
        return;
      }

      const asset = result.assets && result.assets[0];
      if (asset && asset.uri && asset.base64 && data && data?.uid) {
        //console.log('asset ', asset.width, ' X ', asset.height);

        if (isProUser === true) {
          setSelectedImagePro(asset.uri);
          await AsyncStorage.setItem('selectedImagePro', asset.uri);
        } else {
          setSelectedImage(asset.uri);
          await AsyncStorage.setItem('selectedImage', asset.uri);
        }
        await setOpenModalImageProfile(false);

        await SendDataImage(
          isProUser,
          data?.uid,
          `data:${asset.type};base64,${asset.base64}`
        );

      } else {
        Alert.alert(
          'Error',
          'La selección de imagen no es válida. Inténtalo de nuevo.'
        );
      }
    } catch (error: any) {
      console.error('Error al abrir la galería:', error.message);
      Alert.alert('Error', 'Error al abrir la galería. Inténtalo de nuevo.');
    }
  };

  return (
    <GestureHandlerRootView>
      <SafeAreaView>
        <View style={profileStyles.containerPhoto}>
          <View style={profileStyles.container}>
            <View style={profileStyles.containerPhotoCircle}>
              {!isProUser && selectedImage ? (
                <Image
                  style={{ borderRadius: 100, width: '85%', height: '85%' }}
                  source={{ uri: selectedImage }}
                />
              ) : isProUser && selectedImagePro ? (
                <Image
                  style={{ borderRadius: 100, width: '85%', height: '85%' }}
                  source={{ uri: selectedImagePro }}
                />
              ) : !isProUser && data?.image ? (
                <Image
                  style={{ borderRadius: 100, width: '85%', height: '85%' }}
                  source={{ uri: `${data?.image}` }}
                />
              ) : isProUser && data?.imagePro ? (
                <Image
                  style={{ borderRadius: 100, width: '85%', height: '85%' }}
                  source={{ uri: `${data?.imagePro}` }}
                />
              ) : (
                <Image
                  style={{ borderRadius: 100, width: '85%', height: '85%' }}
                  source={require('./../../../../../images/profilePhoto.png')}
                />
              )}
            </View>
            <View style={profileStyles.containerEdit}>
              <TouchableOpacity
                style={profileStyles.containerPencil}
                onPress={openModalImage}>
                <FontAwesome name="pencil" size={20} color="#396593" />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ height: '25%', width: '45%' }}>
            <View style={profileStyles.borderTargetName}>
              <Text style={profileStyles.textName}>
                Hola {name ?? ''}
              </Text>
            </View>
          </View>

          {/*  {isAlertSave === true && (
            <View style={{ height: '25%', width: '65%', margin: 5 }}>
              <View style={profileStyles.borderTargetAlert}>
                <Text style={{ color: "white", fontSize: 16 }}>
                  Recuerde guardar los datos
                </Text>
              </View>
            </View>
          )} */}

        </View>

        <Modal
          animationType="slide"
          transparent={true}
          visible={openModalImageProfile}
          onRequestClose={() => setOpenModalImageProfile(false)}
        >
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(128, 128, 128, 0.5)' }}>
            <View style={{ height: '100%', width: '100%', justifyContent: 'flex-end' }}>
              <TouchableOpacity style={{ height: '77%', width: '100%' }} onPress={() => setOpenModalImageProfile(false)}></TouchableOpacity>
              <View style={{ height: '23%', width: '100%', backgroundColor: 'white', borderTopRightRadius: 25, borderTopLeftRadius: 25, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ height: '80%', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                  <TouchableOpacity style={{ height: '50%', width: '100%', justifyContent: 'center', alignItems: 'center', borderBottomWidth: 0.5 }} onPress={openCameraPicker}>
                    <View style={{ height: '100%', width: '50%', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', }}>
                      <View style={{ height: '100%', width: '30%', justifyContent: 'center', alignItems: 'center' }}>
                        <FontAwesome name="camera" size={32} color="black" />
                      </View>
                      <View style={{ height: '100%', width: '50%', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: 'black', fontSize: 19 }}>Camara</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={{ height: '50%', width: '100%', justifyContent: 'center', alignItems: 'center' }} onPress={openImagePicker}>
                    <View style={{ height: '100%', width: '50%', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', }}>
                      <View style={{ height: '100%', width: '30%', justifyContent: 'center', alignItems: 'center' }}>
                        <MaterialCommunityIcons name="image-multiple" size={37} color="black" />
                      </View>
                      <View style={{ height: '100%', width: '50%', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: 'black', fontSize: 19 }}>Galeria</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default PhotoUser;