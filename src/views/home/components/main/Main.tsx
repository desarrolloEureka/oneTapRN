import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity, View, FlatList, Image, BackHandler } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigation } from '../../../../types/navigation';
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
import TabNav from '../tabNav/TabNav';

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
  const navigation = useNavigation<StackNavigation>();
  const { tab, setTab } = HomeHook();
  const queryClient = useQueryClient();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const templates = GetAllTemplates();
  const dataBackgrounds = GetAllBackgroundImages();
  const route = useRoute();
  const dataTemplateFilter = templates.data?.filter(elemento => elemento.type === tab);
  const { data, refetch } = GetUser();
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
  const [isAlertProfileSocial, setIsAlertProfileSocial] = useState(false);
  const [isAlertProfilePro, setIsAlertProfilePro] = useState(false);
  const [fakeData, setFakeData] = useState(data?.templateData || []);
  const firstBackgroundId = dataBackgrounds.data && dataBackgrounds.data.length > 0 ? dataBackgrounds.data[0]?.id : null;
  const [isUpdate, setIsUpdate] = useState(false);

  const handleModalAlertBg = (status: boolean) => setIsModalAlertBg(!isModalAlertBg);
  const handleAlertProfileSocial = (status: boolean) => setIsAlertProfileSocial(!isAlertProfileSocial);
  const handleAlertProfilePro = (status: boolean) => setIsAlertProfilePro(!isAlertProfilePro);
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
      } else if (tabName === 'ShareQR') {
        navigation.navigate('ShareQR');
      } else {
        navigation.navigate('Home');
      }
    }
  };

  const handleNavigatePreview = async (background: TemplateData | undefined) => {
    console.log('PreviewTemplate ',tab)
    if (tab === 'social') {
      if (data?.profile?.social) {
        if (background) {
          navigation.navigate('PreviewTemplate', { tab: tab });
        } else {
          setIsModalAlertBg(true);
        }
      } else {
        setIsAlertProfileSocial(true);
      }
    } else {
      if (data?.profile?.professional) {
        if (background) {
          navigation.navigate('PreviewTemplate', { tab: tab });
        } else {
          setIsModalAlertBg(true);
        }
      } else {
        setIsAlertProfilePro(true);
      }
    }
  };

  const onBackPress = () => {
    const index = navigation.getState().index;
    if (index < 2) {
      BackHandler.exitApp();
      return true;
    }
  };

  useEffect(() => {
    const subscription = BackHandler.addEventListener('hardwareBackPress', onBackPress);
    return () => subscription.remove();
  }, []);

  useEffect(() => {
    refetch();
  }, []);

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
      setIsModalOpen(!isModalOpen);
    } else {
      setIsLoadingSendData(false);
    }
  };

  const copyToClipboard = () => {
    const url = data?.preview;
    Clipboard.setString("" + url);
    setIscopiedText(true);

    // Después de 5 segundos, cambiar el estado de copiedText a false
    setTimeout(() => {
      setIscopiedText(false);
    }, 5000);
  };

  const selectTemplate = async (value: { id: string }) => {
    setIsLoadingSendData(true);
    const userId = data?.uid;
    const optionSelected = tab as TemplateTypes;

    let updatedFakeData = [...fakeData];
    if (fakeData.length > 0) {
      updatedFakeData = updatedFakeData.filter((val) => val.type !== optionSelected);
    }
    updatedFakeData.push({
      type: optionSelected,
      id: value.id,
      checked: true,
      background_id: '7ynTMVt3M6VFV3KykOXQ',
    });

    await setFakeData(updatedFakeData);
    if (userId) {
      await SendTemplateSelected(userId, updatedFakeData, queryClient);
    }
    setIsUpdate(!isUpdate);
    setIsLoadingSendData(false);
  };

  return (
    <SafeAreaView style={homeStyles.rootContainer}>
      <View style={{ height: 145, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ height: '50%', width: '100%', flexDirection: 'row' }}>

          <View style={{ height: '100%', width: '20%', flexDirection: 'row' }}>
            <View style={{ height: '95%', width: '55%', justifyContent: 'center', alignItems: 'flex-end', marginLeft: 14, marginTop: 3 }}>
              <Image
                resizeMode='contain'
                style={{ width: '100%', height: '100%' }}
                source={require('../../../../images/logo_inicio.png')}
              />
            </View>
          </View>

          <View style={{ height: '100%', width: '60%', alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
            <View style={{ height: '100%', width: '40%', justifyContent: 'center', alignItems: 'center' }}>
              {/* <TouchableOpacity style={{ height: '94%', width: '95%', justifyContent: 'center', alignItems: 'center' }} onPress={copyToClipboard}>
                <Text style={{ fontSize: 11, fontWeight: 'bold', color: '#030124' }}>Copiar URL</Text>
                <Feather name="copy" size={23} color="#396593" />
                {copiedText === true &&
                  <Text style={{ fontSize: 11, fontWeight: 'bold', color: '#030124' }}>¡Copiado!</Text>
                }
              </TouchableOpacity> */}
            </View>
          </View>

          <View style={{ height: '100%', width: '20%', alignItems: 'flex-end', justifyContent: 'flex-end', flexDirection: 'row' }}>
            <View style={{ height: '100%', width: '100%', justifyContent: 'center', alignItems: 'flex-end' }}>
              <MenuSuperior />
            </View>
          </View>
        </View>

        <View style={{ height: '50%', width: '90%', flexDirection: 'row' }}>
          <View style={{ height: '100%', width: '50%', justifyContent: 'center' }}>
            <View style={{ backgroundColor: 'white', height: '55%', width: '58%', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={homeStyles.buttonText}>
                <Icon name="eye" size={19} color="#396593" />  {data && data?.views}
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
                          <TouchableOpacity /* disabled={itemData ? !itemData?.checked : true} */ style={{ height: "100%", width: "60%", justifyContent: 'center', alignItems: 'center' }} onPress={() => handleNavigatePreview(background)}>
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

                      <TouchableOpacity
                        disabled={itemData ? itemData?.checked : false}
                        style={{ height: "65%", width: "98%", justifyContent: 'center', alignItems: 'center' }} onPress={() => selectTemplate(item)}>
                        <View style={{ height: "98%", width: "98%" }}>
                          <Image
                            source={{ uri: `${item.image}` }}
                            style={{ flex: 1, resizeMode: 'contain' }}
                          />
                        </View>
                      </TouchableOpacity>

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


      <TabNav
        handleTabPress={handleTabPress}
        numberNav={1}
      />

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
        description={"No es posible mostrar la vista previa porque no has seleccionado esta plantilla"}
        isClosed={true}
      />

      {/*  <CustomModalAlert
        isModalAlert={isModalAlertBg}
        handleModalAlert={handleModalAlertBg}
        title="One Tap dice!"
        description={"No se ha seleccionado un fondo para la plantilla"}
        isClosed={true}
      /> */}

      <CustomModalAlert
        handleModalAlert={handleAlertProfileSocial}
        title="One Tap dice!"
        description={"Debes registrar los datos en el perfil social"}
        isModalAlert={isAlertProfileSocial}
        isClosed={true}
      />
      <CustomModalAlert
        handleModalAlert={handleAlertProfilePro}
        title="One Tap dice!"
        description={"Debes registrar los datos en el perfil profesional"}
        isModalAlert={isAlertProfilePro}
        isClosed={true}
      />

      <CustomModalLoading
        isLoadingSendData={isLoadingSendData}
      />

    </SafeAreaView >
  );
};

export default Main;