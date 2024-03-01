import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity, View, FlatList, Image } from 'react-native';
import { BackHandler } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteStackParamList } from '../../../../types/navigation';
import { homeStyles } from '../../styles/homeStyles';
import MenuSuperior from '../../../menuSuperior/MenuSuperior';
import CustomSwitch from './home/CustomSwitch';
import CustomCheckbox from './home/CustomCheckbox';
import ModalBackground from './home/ModalBackground';
import { BackgroundImages, TemplateTypes, Templates } from '../../../../types/home';
import { GetAllBackgroundImages, GetAllTemplates } from '../../../../reactQuery/home';
import { GetUser, SendTemplateSelected } from '../../../../reactQuery/users';
import HomeHook from '../../hooks/HomeHook';
import CustomModalAlert from './profile/CustomModalAlert';
import { useQueryClient } from '@tanstack/react-query';
import CustomModalLoading from './profile/CustomModalLoading';
import Clipboard from '@react-native-clipboard/clipboard';
import { TemplateData } from '../../../../types/user';

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
  const { tab, setTab } = HomeHook();
  const queryClient = useQueryClient();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const templates = GetAllTemplates();
  const dataBackgrounds = GetAllBackgroundImages();
  const route = useRoute();
  const dataTemplateFilter = templates.data?.filter(elemento => elemento.type === tab);
  const { data, error } = GetUser();
  const [selectedTemplate, setSelectedTemplate] = useState<string>();
  const [isLoadingSendData, setIsLoadingSendData] = useState(false);
  const [templateSelect, setTemplateSelect] = useState<TemplateType>({
    id: '',
    name: '',
    image: '',
  });
  const [isModalAlert, setIsModalAlert] = useState(false);
  const handleModalAlert = () => setIsModalAlert(!isModalAlert);
  const [copiedText, setIscopiedText] = useState(false);
  const [isModalAlertBg, setIsModalAlertBg] = useState(false);
  const handleModalAlertBg = (status: boolean) => setIsModalAlertBg(!isModalAlertBg);

  const navigation =
    useNavigation<StackNavigationProp<RouteStackParamList, 'Home'>>();

  const handleModalBackground = (item?: Templates) => {
    item && setSelectedTemplate(item.id);
    setIsModalOpen(!isModalOpen);
  }

  const handleTabPress = (tabName: string) => {
    if (tabName === "Professional" && data?.plan === "standard") {
      setIsModalAlert(true);
    } else {
      if (tabName === 'Social') {
        navigation.navigate('Profile');
      } else if (tabName === 'Professional') {
        navigation.navigate('ProfileProfessional');
      } else {
        navigation.navigate('Home');
      }
    }
  };

  const handleNavigatePreview = async (background: TemplateData | undefined) => {
    if (background) {
      navigation.navigate('PreviewTemplate', { tab: tab });
    } else {
      setIsModalAlertBg(true);
    }
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
  };

  const handleChangeTab = (option: string) => {
    if (option === "professional" && data?.plan === "standard") {
      setIsModalAlert(true);
    } else {
      setTab(option);
    }
  };

  const handleSelectTemplate = async (background_id: string) => {
    setIsLoadingSendData(true);
    const uid = data?.uid

    if (uid && selectedTemplate && templates) {
      const updatedTemplates = data?.templateData.map(template => {
        if (template.id === selectedTemplate) {
          return { ...template, background_id };
        }
        return template;
      });

      await SendTemplateSelected(uid, updatedTemplates, queryClient);
      await setIsLoadingSendData(false);

    } else {
      setIsLoadingSendData(false);
    }
  };

  const copyToClipboard = () => {
    const url = data?.preview
    Clipboard.setString("" + url);
    setIscopiedText(true);
  };

  return (
    <SafeAreaView style={homeStyles.rootContainer}>
      <View style={{ height: 145, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ height: '50%', width: '100%', flexDirection: 'row' }}>
          <View style={{ height: '100%', width: '50%' }}>
            <View style={{ height: '85%', width: '25%', justifyContent: 'center', alignItems: 'flex-end', marginLeft: 7 }}>
              <Image
                resizeMode='contain'
                style={{ width: '85%', height: '80%' }}
                source={require('../../../../images/logo_inicio.png')}
              />
            </View>
          </View>

          <View style={{ height: '100%', width: '50%', alignItems: 'flex-end', flexDirection: 'row' }}>
            <View style={{ height: '100%', width: '65%', justifyContent: 'center', alignItems: 'flex-end' }}>
              <TouchableOpacity style={{ height: '94%', width: '55%', justifyContent: 'center', alignItems: 'center' }} onPress={copyToClipboard}>
                <Text style={{ fontSize: 11, fontWeight: 'bold', color: '#030124' }}>Copiar URL</Text>
                <Feather name="copy" size={23} color="#396593" />
                {copiedText === true &&
                  <Text style={{ fontSize: 11, fontWeight: 'bold', color: '#030124' }}>Copiado!</Text>
                }
              </TouchableOpacity>
            </View>
            <View style={{ height: '100%', width: '35%', justifyContent: 'center', alignItems: 'flex-end' }}>
              <MenuSuperior />
            </View>
          </View>
        </View>

        <View style={{ height: '50%', width: '90%', flexDirection: 'row' }}>
          <View style={{ height: '100%', width: '50%', justifyContent: 'center' }}>
            <View style={{ backgroundColor: 'white', height: '60%', width: '65%', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={homeStyles.buttonText}>
                <Icon name="eye" size={20} color="#396593" />   {data && data?.views}
              </Text>
            </View>
          </View>

          <View style={{ height: '100%', width: '50%', flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-end' }}>
            <View style={[homeStyles.switchWrapper, { margin: 10 }]}>
              <Text style={[homeStyles.switchText, { color: '#030124' }]}>
                Modo{' '}
              </Text>
              <CustomSwitch
                profile={true}
                handleModalAlert={handleModalAlert}
              />
              <Text style={[homeStyles.switchText, { color: '#030124' }]}>
                Social | PRO
              </Text>
            </View>
            <View style={homeStyles.switchWrapper}>
              <Text style={[homeStyles.switchText, { color: '#030124' }]}>
                Inactivar Perfil
              </Text>
              <CustomSwitch
                profile={false}
              />
              <Text style={[homeStyles.switchText, { color: '#030124' }]}>
                OFF | ON
              </Text>
            </View>
          </View>
        </View>
      </View>

      <View style={{ height: 80, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ height: "50%", width: '100%', justifyContent: 'flex-end', alignItems: 'center' }}>
          <Text style={{ fontSize: 20, fontWeight: '700', color: '#396593', }}>Plantillas</Text>
        </View>
        <View style={{ height: "50%", justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ height: "100%", width: "95%", justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
            <TouchableOpacity style={{ height: "100%", width: "50%", justifyContent: 'center', alignItems: 'center', borderBottomWidth: tab === 'social' ? 4 : 2, borderColor: tab === 'social' ? '#396593' : '#7a7a7a' }} onPress={() => handleChangeTab('social')}>
              <Text style={{ color: tab === 'social' ? "#396593" : "#7a7a7a", fontWeight: tab === 'social' ? 'bold' : undefined }}>Social</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ height: "100%", width: "50%", justifyContent: 'center', alignItems: 'center', borderBottomWidth: tab === 'professional' ? 4 : 2, borderColor: tab === 'professional' ? '#396593' : '#7a7a7a' }} onPress={() => handleChangeTab('professional')}>
              <Text style={{ color: tab === 'professional' ? "#396593" : "#7a7a7a", fontWeight: tab === 'professional' ? 'bold' : undefined }}>Profesional</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={{ height: 475, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ height: "95%", width: "95%" }}>
          {dataTemplateFilter &&
            <FlatList
              data={dataTemplateFilter}
              keyExtractor={item => item.id.toString()}
              numColumns={2}
              renderItem={({ item, index }) => {
                const i = item.id;
                const itemData = data?.templateData?.find((val) => val.id === i);
                const background = data?.templateData?.find((val) => val.id === i && val.background_id);

                return (
                  <View style={{ height: 280, width: "50%", justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ height: "95%", width: "95%", backgroundColor: "#02AF9B", borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                      <View style={{ height: "20%", width: "100%", alignItems: 'flex-end', flexDirection: 'row' }}>
                        <View style={{ height: "100%", width: "50%", justifyContent: 'center' }}>
                          <TouchableOpacity disabled={itemData ? !itemData?.checked : true} style={{ height: "100%", width: "60%", justifyContent: 'center', alignItems: 'center' }} onPress={() => handleNavigatePreview(background)}>
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
                                uid={data?.uid}
                                optionSelected={tab as TemplateTypes}
                                value={item}
                                setTemplateSelect={setTemplateSelect}
                                templates={data?.templateData}
                                checked={itemData != undefined ? itemData ? itemData?.checked : false : false}
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
                        <View style={{ height: "100%", width: "50%", justifyContent: 'center' }}>
                          <View style={{ height: "100%", width: "60%", justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 10, color: "white" }}>

                            </Text>
                          </View>
                        </View>
                        <View style={{ height: "100%", width: "50%", justifyContent: 'center', alignItems: 'flex-end' }}>
                          <TouchableOpacity disabled={itemData ? !itemData?.checked : true} style={{ height: "100%", width: "60%", justifyContent: 'center', alignItems: 'center' }} onPress={() => handleModalBackground(item)}>
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

      <View style={{
        flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', backgroundColor: '#E9E9E9', height: 80, position: 'absolute', bottom: 0, width: '100%'
      }}>

        <TouchableOpacity style={{ height: "100%", width: "33.3%", alignItems: 'center', justifyContent: 'center', borderTopWidth: 3.5, borderColor: '#396593' }} onPress={() => handleTabPress('Home')}>
          <Icon name="home" size={25} color="black" />
          <Text style={{ color: 'black' }}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ height: "100%", width: "33.3%", alignItems: 'center', justifyContent: 'center' }} onPress={() => handleTabPress('Social')}>
          <Icon name="users" size={25} color="black" />
          <Text style={{ color: 'black' }}>Social</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ height: "100%", width: "33.3%", alignItems: 'center', justifyContent: 'center' }} onPress={() => handleTabPress('Professional')}>
          <Ionicons name="newspaper-sharp" size={28} color="black" />
          <Text style={{ color: 'black' }}>PRO</Text>
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
          handleSelectTemplate={handleSelectTemplate}
        />
      }

      <CustomModalAlert
        isModalAlert={isModalAlert}
        handleModalAlert={setIsModalAlert}
        title="Acceso Restringido"
        description="Actualmente no tienes acceso a las opciones de profesional porque estás utilizando un plan básico."
      />

      <CustomModalAlert
        isModalAlert={isModalAlertBg}
        handleModalAlert={handleModalAlertBg}
        title="One Tap dice!"
        description={"No se ha seleccionado un fondo para la plantilla"}
      />

      <CustomModalLoading
        isLoadingSendData={isLoadingSendData}
      />

    </SafeAreaView >
  );
};

export default Main;