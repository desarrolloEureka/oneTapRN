import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
  Alert
} from 'react-native';
import {
  launchImageLibrary,
  ImageLibraryOptions,
  MediaType
} from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {profileStyles} from '../../../styles/profileStyles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import firestore from '@react-native-firebase/firestore';
import {SendDataImage} from '../../../../../reactQuery/users';
import {GetUser} from '../../../../../reactQuery/users';
import {UserData} from '../../../../../types/user';

const PhotoUser = ({name}: {name?: string}) => {
  const user = GetUser();
  const data = user.data as unknown as UserData;
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    // Recuperar la imagen almacenada en AsyncStorage al cargar el componente
    const fetchAsyncStorageImage = async () => {
      try {
        const storedImage = await AsyncStorage.getItem('selectedImage');
        if (storedImage) {
          setSelectedImage(storedImage);
        }
      } catch (error: any) {
        console.error(
          'Error al recuperar la imagen desde AsyncStorage:',
          error.message
        );
      }
    };

    fetchAsyncStorageImage();
  }, []);

  const openImagePicker = async () => {
    try {
      const options: ImageLibraryOptions = {
        mediaType: 'photo' as MediaType,
        includeBase64: true,
        quality: 1,
        maxWidth: 300,
        maxHeight: 300
      };

      const result = await launchImageLibrary(options);

      if (result.didCancel || result.errorMessage) {
        Alert.alert(
          'Error',
          'El usuario canceló la selección o hubo un error. Inténtalo de nuevo'
        );
        return;
      }

      const asset = result.assets && result.assets[0];
      if (asset && asset.uri && asset.base64 && data && data?.uid) {
        setSelectedImage(asset.uri);
        await AsyncStorage.setItem('selectedImage', asset.uri);
        await SendDataImage(
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
              {selectedImage ? (
                <Image
                  style={{borderRadius: 100, width: '85%', height: '85%'}}
                  source={{uri: selectedImage}}
                />
              ) : data?.image ? (
                <Image
                  style={{borderRadius: 100, width: '85%', height: '85%'}}
                  source={{uri: `${data?.image}`}}
                />
              ) : (
                <Image
                  style={{borderRadius: 100, width: '85%', height: '85%'}}
                  source={require('./../../../../../images/profilePhoto.png')}
                />
              )}
            </View>
            <View style={profileStyles.containerEdit}>
              <TouchableOpacity
                style={profileStyles.containerPencil}
                onPress={openImagePicker}>
                <Icon name="pencil" size={20} color="#396593" />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{height: '25%', width: '45%'}}>
            <View style={profileStyles.borderTargetName}>
              <Text style={profileStyles.textName}>
                {/* Hola {data && data?.user_name} */}
                Hola {name ?? ''}
              </Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default PhotoUser;
