import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { WebView } from 'react-native-webview';
import { GetUser } from '../../../../../reactQuery/users';
import { domain } from '../../../../../initialData/globals';

const PreviewTemplate = () => {
  const navigation = useNavigation();
  const { data } = GetUser();
  console.log("uid ", data?.uid);

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView>
      <View style={{ height: "8%", width: "100%" }}>
        <TouchableOpacity style={{ height: "100%", width: "18%", alignItems: 'center', justifyContent: 'center' }} onPress={handleBackPress}>
          <Icon name="arrow-back-ios" size={28} color="black" />
        </TouchableOpacity>
      </View>

      <View style={{ height: "92%", width: "100%", backgroundColor: "yellow" }}>
        {data && data?.uid &&
          <WebView
            source={{ uri: `${domain}/es/views/cardView?uid=${data.uid}` }}
            style={{ flex: 1 }}
            onLoad={() => console.log('Cargado')}
            scalesPageToFit
          />
        }
      </View>
    </SafeAreaView>

  );
};

const styles = StyleSheet.create({

});

export default PreviewTemplate;