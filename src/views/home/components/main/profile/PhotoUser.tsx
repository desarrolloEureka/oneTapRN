import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, Image, Alert } from 'react-native';
import { launchImageLibrary, ImageLibraryOptions, MediaType } from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { profileStyles } from '../../../styles/profileStyles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import firestore from '@react-native-firebase/firestore';
import { SendDataImage } from '../../../../../reactQuery/users';

const PhotoUser: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    // Recuperar la imagen almacenada en AsyncStorage al cargar el componente
    const fetchAsyncStorageImage = async () => {
      try {
        const storedImage = await AsyncStorage.getItem('selectedImage');
        if (storedImage) {
          setSelectedImage(storedImage);
        }
      } catch (error) {
        console.error('Error al recuperar la imagen desde AsyncStorage:', error.message);
      }
    };

    fetchAsyncStorageImage();
  }, []);

  const openImagePicker = async () => {
    try {
      const options: ImageLibraryOptions = {
        mediaType: 'photo' as MediaType,
        includeBase64: true,
      };

      const result = await launchImageLibrary(options);

      if (result.didCancel || result.error) {
        Alert.alert('Error', 'El usuario canceló la selección o hubo un error. Inténtalo de nuevo');
        return;
      }

      const asset = result.assets && result.assets[0];
      if (asset && asset.uri && asset.base64) {
        setSelectedImage(asset.uri);

        // Almacenar la ruta de la imagen seleccionada en AsyncStorage
        await AsyncStorage.setItem('selectedImage', asset.uri);

        // Verificar si base64 es válido antes de guardarlo en Firestore
        SendDataImage("WKKd3f2FbZUrSauKF1kJFdmF2k32", `data:${asset.type};base64,${asset.base64}`);

        // Guardar la imagen en Firestore
        await saveImageToFirestore("WKKd3f2FbZUrSauKF1kJFdmF2k32", asset.base64);
      } else {
        Alert.alert('Error', 'La selección de imagen no es válida. Inténtalo de nuevo.');
      }
    } catch (error: any) {
      console.error('Error al abrir la galería:', error.message);
      Alert.alert('Error', 'Error al abrir la galería. Inténtalo de nuevo.');
    }
  };

  const saveImageToFirestore = async (userId: string, base64Image: string) => {
    try {
      const userRef = firestore().collection('users').doc(userId);

      // Agrega el prefijo al base64
      const formattedBase64Image = `data:${base64Image}`;

      // Guardar la información de la imagen en Firestore
      await userRef.set({
        profileImage: formattedBase64Image,
      }, { merge: true }); // Usamos merge para actualizar solo el campo que estamos cambiando
    } catch (error: any) {
      console.error('Error al guardar la imagen en Firestore:', error.message);
      Alert.alert('Error', 'Error al guardar la imagen en Firestore. Inténtalo de nuevo.');
    }
  };

  return (
    <GestureHandlerRootView>
      <SafeAreaView>
        <View style={profileStyles.containerPhoto}>
          <View style={profileStyles.container}>
            <View style={profileStyles.containerPhotoCircle}>
              {selectedImage ? (
                <Image
                  style={{ borderRadius: 100, width: '85%', height: '85%' }}
                  source={{ uri: selectedImage }}
                />
              ) : (
                <Image
                  style={{ borderRadius: 100, width: '85%', height: '85%' }}
                  source={require('./../../../../../images/profilePhoto.png')}
                />
              )}
            </View>
            <View style={profileStyles.containerEdit}>
              <TouchableOpacity style={profileStyles.containerPencil} onPress={openImagePicker}>
                <Icon name="pencil" size={20} color="#396593" />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ height: '25%', width: '40%' }}>
            <View style={profileStyles.borderTargetName}>
              <Text style={profileStyles.textName}>Hola David</Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default PhotoUser;
