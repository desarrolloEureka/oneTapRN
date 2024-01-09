import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import { launchImageLibrary, ImageLibraryOptions, MediaType } from 'react-native-image-picker';
import { profileStyles } from '../../../styles/profileStyles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SendDataImage } from '../../../../../reactQuery/users';

const PhotoUser: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const openImagePicker = async () => {
        const options: ImageLibraryOptions = {
            mediaType: 'photo' as MediaType,
            includeBase64: true,
        };

        const result = await launchImageLibrary(options);
        const asset = result.assets;
        const uri = asset && asset[0].uri
        const base64 = asset && asset[0].base64

        setSelectedImage("" + uri);
        SendDataImage("WKKd3f2FbZUrSauKF1kJFdmF2k32", "data:image/jpeg;base64," + base64);
    };

    return (
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
                <View style={{ height: "25%", width: "40%" }}>
                    <View style={profileStyles.borderTargetName}>
                        <Text style={profileStyles.textName}>Hola David</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default PhotoUser;

