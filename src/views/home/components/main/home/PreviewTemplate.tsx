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
      <View style={{ height: "7%", width: "100%", position: 'absolute', zIndex: 1, paddingLeft: 5 }}>
        <TouchableOpacity style={{ height: "100%", width: "15%", alignItems: 'center', justifyContent: 'center', backgroundColor: "white", paddingLeft: 10, borderRadius: 100 }} onPress={handleBackPress}>
          <Icon name="arrow-back-ios" size={28} color="black" />
        </TouchableOpacity>
      </View>

      <View style={{ height: "100%", width: "100%" }}>
        {data && data?.uid &&
          <WebView
            source={{ uri: `https://backoffice.onetap.com.co/es/views/cardView?uid=${data.uid}&type=${tab}` }}
            style={{ flex: 1 }}
            scalesPageToFit
            useWebKit={true}
          />
        }
      </View>
    </SafeAreaView>

  );
};

export default PreviewTemplate;