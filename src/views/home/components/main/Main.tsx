import { useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import {
  Alert,
  BackHandler,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  Switch,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { globalStyles } from '../../../../globalStyles/globalStyles';
import {
  SendSwitchActivateCard,
  SendSwitchProfile,
  SendTemplateSelected
} from '../../../../reactQuery/users';
import { RouteStackParamList } from '../../../../types/navigation';
import MenuSuperior from '../../../menuSuperior/MenuSuperior';
import HomeHook from '../../hooks/HomeHook';
import { homeStyles } from '../../styles/homeStyles';
import ModalBackground from './home/ModalBackground';
import { GetAllBackgroundImages, GetAllTemplates } from '../../../../reactQuery/home';
import { BackgroundImages, TemplateTypes, Templates } from '../../../../types/home';
import { useQueryClient } from '@tanstack/react-query';
import {
  GetUser,
  SendBackgroundSelected,
} from '../../../../reactQuery/users';
import CustomSwitch from './home/CustomSwitch';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomCheckbox from './home/CustomCheckbox';

interface GridItem {
  id: number;
  imageSource: any; // Ajusta el tipo según el tipo real de tus imágenes
}

interface BackgroundType {
  id: string;
  name: string;
  image: string;
}
interface TemplateType {
  id: string;
  name: string;
  image: string;
}

const Main = () => {
  const queryClient = useQueryClient();
  const { tab, setTab } = HomeHook();
  const [isSwitchOn1, setSwitchOn1] = useState(false);
  const [isSwitchOn2, setSwitchOn2] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const templates = GetAllTemplates();
  const dataBackgrounds = GetAllBackgroundImages();
  const route = useRoute();
  const dataTemplateFilter = templates.data?.filter(elemento => elemento.type === tab);
  const { data, error } = GetUser();
  const [selectedTemplate, setSelectedTemplate] = useState<string>();
  const [templateSelect, setTemplateSelect] = useState<TemplateType>({
    id: '',
    name: '',
    image: '',
  });

  const navigation =
    useNavigation<StackNavigationProp<RouteStackParamList, 'Home'>>();

  const handleModalBackground = (item?: Templates) => {
    item && setSelectedTemplate(item.id);
    setIsModalOpen(!isModalOpen);
  }

  const handleSwitchToggle1 = () => {
    handleUpdateSwitch();
  }

  const handleSwitchToggle2 = () => {
    handleUpdateSwitchCard();
  }

  const handleUpdateSwitch = async () => {
    setSwitchOn1(!isSwitchOn1);
    const userId = data?.uid;
    if (userId) {
      await SendSwitchProfile(userId, isSwitchOn1);
    }
  };

  const handleUpdateSwitchCard = async () => {
    setSwitchOn2(!isSwitchOn2);
    const userId = data?.uid;
    if (userId) {
      await SendSwitchActivateCard(userId, isSwitchOn2);
    }
  };

  const handleTabPress = (tabName: string) => {
    if (tabName === 'Social') {
      navigation.navigate('Profile', { isProUser: false });
    } else if (tabName === 'Professional') {
      navigation.navigate('Profile', { isProUser: true });
    } else {
      navigation.navigate('Home');
    }
  };

  const handleSelectTemplate = async (id: string) => {
    console.log("ID  --> ", id);
    const userId = data?.uid;
    /*  
     if (userId) {
       await SendTemplateSelected(userId, id);
     } */
  };

  const handleNavigatePreview = () => {
    navigation.navigate('PreviewTemplate');
  };

  const onBackPress = () => {
    const currentRoute = route.name;
    const index = navigation.getState().index;
    if (index < 2) {
      BackHandler.exitApp();
      return true;
    }
  };

  useEffect(() => {
    const subscription = BackHandler.addEventListener(
      'hardwareBackPress',
      onBackPress
    );
    return () => subscription.remove();
  });


  const handleSelectBackground = (item: BackgroundType) => {
    const data = {
      id: item.id,
    };
    //setBackgroundSelect(data);
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
              <CustomSwitch
                profile={true}
              />
              <Text style={[homeStyles.switchText, { color: '#030124' }]}>
                Social | PRO
              </Text>
            </View>
            <View style={homeStyles.switchWrapper}>
              <Text style={[homeStyles.switchText, { color: '#030124' }]}>
                Activar tarjeta
              </Text>
              <CustomSwitch
                profile={false}
              />
              <Text style={[homeStyles.switchText, { color: '#030124' }]}>
                ON | OFF
              </Text>
            </View>
          </View>
          <View style={[homeStyles.button, { backgroundColor: 'white' }]}>
            <Text style={homeStyles.buttonText}>
              <Icon name="eye" size={20} color="#396593" />  {data && data?.views}
            </Text>
          </View>
        </View>
      </View>


      <View style={homeStyles.body}>
        <Text style={homeStyles.titleBody}>Plantillas</Text>
        <View style={homeStyles.tab}>
          <TouchableOpacity onPress={() => setTab('social')}>
            <Text>Social</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setTab('professional')}>
            <Text>Profesional</Text>
          </TouchableOpacity>
        </View>
        <View style={homeStyles.tabSeparator} />

        <View style={{ height: 480, width: "100%", justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ height: "98%", width: "95%" }}>
            {dataTemplateFilter &&
              <FlatList
                data={dataTemplateFilter}
                keyExtractor={item => item.id.toString()}
                numColumns={2}
                renderItem={({ item, index }) => {
                  const i = item.id;
                  const itemData = data?.templateData?.find((val) => val.id === i);
                  return (
                    <View style={{ height: 280, width: "50%", justifyContent: 'center', alignItems: 'center' }}>
                      <View style={{ height: "95%", width: "95%", backgroundColor: "#02AF9B", borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ height: "20%", width: "100%", alignItems: 'flex-end', flexDirection: 'row' }}>
                          <View style={{ height: "100%", width: "50%", justifyContent: 'center', alignItems: 'flex-start' }}>
                            <TouchableOpacity style={{ height: "100%", width: "60%", justifyContent: 'center', alignItems: 'center' }} onPress={handleNavigatePreview}>
                              <Ionicons name="eye-sharp" size={15} color="white" />
                              <Text style={{ fontSize: 10, color: "white" }}>
                                Vista{'\n'}Previa
                              </Text>
                            </TouchableOpacity>
                          </View>
                          <View style={{ height: "100%", width: "50%", justifyContent: 'center', alignItems: 'flex-end' }}>


                            <View style={{ height: "100%", width: "60%", justifyContent: 'center', alignItems: 'center' }}>

                              {data && (
                                <CustomCheckbox
                                  uid={data.uid}
                                  optionSelected={tab as TemplateTypes}
                                  value={item}
                                  setTemplateSelect={setTemplateSelect}
                                  templates={data?.templateData}
                                  checked={itemData ? itemData.checked : false}
                                />
                              )}

                              <Text style={{ fontSize: 9, color: "white" }}>
                                Seleccionar {'\n'}  plantilla
                              </Text>
                            </View>

                          </View>
                        </View>
                        <View style={{ height: "65%", width: "98%", justifyContent: 'center', alignItems: 'center' }}>
                          <View style={{ height: "98%", width: "98%" }}>
                            <Image
                              source={{ uri: `${item.image}` }}
                              style={{ flex: 1, resizeMode: 'contain' }}
                            />
                          </View>
                        </View>
                        <View style={{ height: "15%", width: "100%", alignItems: 'flex-end', flexDirection: 'row' }}>
                          <View style={{ height: "100%", width: "50%", justifyContent: 'center', alignItems: 'flex-start' }}>
                            <View style={{ height: "100%", width: "60%", justifyContent: 'center', alignItems: 'center' }}>
                              <Text style={{ fontSize: 10, color: "white" }}>
                                Plantilla {index + 1}
                              </Text>
                            </View>
                          </View>
                          <View style={{ height: "100%", width: "50%", justifyContent: 'center', alignItems: 'flex-end' }}>
                            <TouchableOpacity style={{ height: "100%", width: "60%", justifyContent: 'center', alignItems: 'center' }} onPress={() => handleModalBackground(item)}>
                              <MaterialCommunityIcons name="cards" size={15} color="white" />
                              <Text style={{ fontSize: 9, color: "white" }}>
                                Cambiar {'\n'}  fondo
                              </Text>
                            </TouchableOpacity>
                          </View>
                        </View>
                      </View>
                    </View>
                  );
                }}
              />
            }
          </View>
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
          onPress={() => handleTabPress('Professional')}
          style={homeStyles.tabnav}>
          <Icon name="briefcase" size={25} color="black" />
          <Text>PRO</Text>
        </TouchableOpacity>
      </View>

      {
        dataBackgrounds?.data &&
        <ModalBackground
          isModalOpen={isModalOpen}
          handleModalBackground={handleModalBackground}
          dataBackgrounds={dataBackgrounds.data as BackgroundImages[]}
          data={data && data}
          optionSelected={tab}
          handleSelectBackground={() => handleSelectBackground}
          selectedTemplate={selectedTemplate}
        />
      }

    </SafeAreaView >
  );
};

export default Main;