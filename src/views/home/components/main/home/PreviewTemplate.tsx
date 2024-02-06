import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { WebView } from 'react-native-webview';
import { GetUser } from '../../../../../reactQuery/users';
import { domain } from '../../../../../initialData/globals';
import { useRoute } from '@react-navigation/native';

const PreviewTemplate = () => {
  const navigation = useNavigation();
  const { data } = GetUser();
  const route = useRoute();
  const [tab, setTab] = useState('social');

  const handleBackPress = () => {
    navigation.goBack();
  };

  useEffect(() => {
    const isProUser = route.params && route?.params?.tab;
    if (isProUser !== undefined) {
      setTab(isProUser)
    }
  }, []);

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
            source={{ uri: `${domain}/es/views/cardView?uid=${data.uid}&type=${tab}` }}
            style={{ flex: 1 }}
            onLoad={() => console.log('Cargado')}
            scalesPageToFit
          />
        }
      </View>
    </SafeAreaView>

  );
};

export default PreviewTemplate;