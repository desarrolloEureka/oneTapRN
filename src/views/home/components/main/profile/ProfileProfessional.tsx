import React, { useState } from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
  TouchableWithoutFeedback
} from 'react-native';
import PhotoUser from './PhotoUser';
import { profileStyles } from '../../../styles/profileStyles';
import FormDataUser from './FormDataUser';
import FormAddDataUser from './FormAddDataUser';
import { SocialDataForm } from '../../../../../types/profile';
import ModalAlert from './ModalAlert';
import ModalSuccessDelete from './ModalSuccessDelete';
import CustomModalAlert from './CustomModalAlert';
import CustomSwitchGeneral from './CustomSwitchGeneral';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import CustomModalLoading from './CustomModalLoading';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { GetUser } from '../../../../../reactQuery/users';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteStackParamList, StackNavigation } from '../../../../../types/navigation';
import ProfileProfessionalHook from './hooks/ProfileProfessoinalHook';
import CustomModalAlertSave from './CustomModalAlertSave';
import TabNav from '../../tabNav/TabNav';

const ProfileProfessional = () => {
  const {
    handleModalAlert,
    handleSeeMore,
    handleDeleteData,
    isDetailOpen,
    itemDetail,
    isModalAlert,
    handleModalAux,
    dataForm,
    setDataForm,
    handleSendProfile,
    isSuccessDelete,
    handleSuccessDelete,
    isDataError,
    isDataSuccess,
    setIsDataError,
    setIsDataSuccess,
    handleSwitchAll,
    status,
    isEmailPhoneRight,
    setisEmailPhoneRight,
    noDeleted,
    data,
    user,
    handleSwitch,
    handleData,
    handleAddData,
    handleModalAlertLimit,
    isModalAlertLimit,
    handleDataNetworks,
    setModalIcons,
    itemUrlKey,
    itemUrlSelected,
    handleModalIcons,
    isModalIcons,
    isLoadingSendData,
    setIsLoadingSendData,
    switchValue,
    isAlertSave,
    isAlertEmptyData,
    setIsEmptyData,
    isAlertEmptyDataAll,
    setIsEmptyDataAll,
    setIsAlertSave,
    isChangeData,
    setIsChangeData,
    navigationItem,
    setNavigationItem
  } = ProfileProfessionalHook({
    isProUser: true
  });

  const navigation = useNavigation<StackNavigation>();
  const [isModalAlertNavigation, setIsModalAlertNavigation] = useState(false);
  const userData = GetUser();

  const handleDataSet = (data: SocialDataForm) => {
    setDataForm(data);
  };

  const handleBackPress = () => {
    if (isChangeData) {
      setIsAlertSave(true);
    } else {
      navigation.goBack();
    }
  };

  const handleTabPress = (tabName: string) => {
    if (tabName === 'Professional' && userData?.data?.plan === 'standard') {
      setIsModalAlertNavigation(true);
    } else {
      if (isChangeData) {
        setIsAlertSave(true);
        setNavigationItem(tabName);
      } else {
        setIsAlertSave(false);
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
    }
  };

  const handleAcept = async () => {
    setIsAlertSave(false);
    setIsChangeData(false);
    await handleSendProfile(false);
    setTimeout(() => {
      setIsDataSuccess(false);
      if (navigationItem) {
        if (navigationItem === 'Social') {
          navigation.navigate('Profile');
        } else if (navigationItem === 'Professional') {
          navigation.navigate('ProfileProfessional');
        } else if (navigationItem === 'ShareQR') {
          navigation.navigate('ShareQR');
        } else {
          navigation.navigate('Home');
        }
      }
    }, 1200);

  };

  const handleCancel = async () => {
    setIsAlertSave(false);
    setIsChangeData(false);
    if (navigationItem) {
      if (navigationItem === 'Social') {
        navigation.navigate('Profile');
      } else if (navigationItem === 'Professional') {
        navigation.navigate('ProfileProfessional');
      } else if (navigationItem === 'ShareQR') {
        navigation.navigate('ShareQR');
      } else {
        navigation.navigate('Home');
      }
    }
  };

  return (
    data &&
    user && (
      <SafeAreaView style={{ flex: 1 }}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{ flex: 1 }}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ScrollView
              contentContainerStyle={profileStyles.scrollViewContainer}>
              <View style={{ height: 50, width: '100%' }}>
                <TouchableOpacity
                  style={{
                    height: '100%',
                    width: '18%',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                  onPress={handleBackPress}>
                  <Icon name="arrow-back-ios" size={27} color="black" />
                </TouchableOpacity>
              </View>

              <PhotoUser
                name={user.profile && user?.profile?.professional ? user?.profile?.professional?.name?.text || '' : ''}
                isProUser={true}
                isAlertSave={isAlertSave}
              />

              <View
                style={{
                  height: 100,
                  width: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: 12
                }}>
                <CustomSwitchGeneral
                  name="all_true"
                  handleSwitch={(e: any) => handleSwitchAll(e)}
                  checked={switchValue}
                />
              </View>

              <View
                style={{
                  height: 100,
                  width: '100%',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#02AF9B',
                    height: '45%',
                    width: '40%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 22,
                    shadowColor: '#000'
                  }}
                  onPress={() => handleSendProfile(true)}>
                  <Text style={{ color: 'white' }}>Guardar</Text>
                </TouchableOpacity>
              </View>

              <FormDataUser
                isProUser={true}
                dataForm={dataForm}
                handleDataSet={e => handleDataSet(e)}
                data={data}
                handleData={handleData}
                user={user}
                handleSwitch={handleSwitch}
              />
              <FormAddDataUser
                isProUser={true}
                dataForm={dataForm}
                handleDataSet={e => handleDataSet(e)}
                isDetailOpen={isDetailOpen}
                itemDetail={itemDetail}
                handleModalAlert={({ index, subindex }) =>
                  handleModalAlert({ index, subindex })
                }
                data={data}
                handleData={handleData}
                user={user}
                handleSwitch={handleSwitch}
                handleAddData={handleAddData}
                handleModalAlertLimit={handleModalAlertLimit}
                isModalAlertLimit={isModalAlertLimit}
                handleDataNetworks={handleDataNetworks}
                setModalIcons={setModalIcons}
                itemUrlKey={itemUrlKey}
                itemUrlSelected={itemUrlSelected}
                handleModalIcons={handleModalIcons}
                isModalIcons={isModalIcons}
                handleDeleteData={handleDeleteData}
              />

              <View
                style={{
                  height: 210,
                  width: '100%',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  marginTop: 90
                }}>
                <View
                  style={{
                    height: '50%',
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}>
                  <TouchableOpacity
                    style={{
                      backgroundColor: '#02AF9B',
                      height: '45%',
                      width: '40%',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 22,
                      shadowColor: '#000'
                    }}
                    onPress={() => handleSendProfile(true)}>
                    <Text style={{ color: 'white' }}>Guardar</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <ModalAlert
                isModalAlert={isModalAlert}
                handleModalAlert={handleModalAux}
                handleDeleteData={handleDeleteData}
                noDeleted={noDeleted}
              />

              <CustomModalAlert
                isModalAlert={isModalAlertNavigation}
                handleModalAlert={setIsModalAlertNavigation}
                title="Acceso Restringido"
                description="Actualmente no tienes acceso a las opciones de profesional porque estás utilizando un plan básico."
              />

              <ModalSuccessDelete
                isSuccessDelete={isSuccessDelete}
                handleSuccessDelete={handleSuccessDelete}
              />

              <CustomModalAlert
                isModalAlert={isDataError}
                handleModalAlert={setIsDataError}
                title={'One Tap dice!'}
                description={
                  'La información del usuario no pudo ser registrada, por favor intenta de nuevo.'
                }
              />
              <CustomModalAlert
                isModalAlert={isDataSuccess}
                handleModalAlert={setIsDataSuccess}
                title={'One Tap dice!'}
                description={
                  'La información del usuario ha sido registrada con éxito.'
                }
              />

              <CustomModalAlertSave
                isModalAlert={isAlertSave}
                handleModalAlert={setIsAlertSave}
                title={'One Tap dice!'}
                handleAcept={handleAcept}
                handleCancel={handleCancel}
                description={'Has modificado tus datos. ¿Deseas guardar los cambios antes de continuar?'}
              //description={'Ha realizado cambios. ¿Desea continuar sin guardar?'}
              />

              <CustomModalAlert
                isModalAlert={isAlertEmptyData}
                handleModalAlert={setIsEmptyData}
                title={'One Tap dice!'}
                description={
                  'No se encontró información registrada para ese dato.'
                }
              />


              <CustomModalAlert
                isModalAlert={isAlertEmptyDataAll}
                handleModalAlert={setIsEmptyDataAll}
                title={'One Tap dice!'}
                description={"No fue posible activar ciertos datos porque están vacíos."}
                isClosed
              />

              <CustomModalAlert
                isModalAlert={isEmailPhoneRight}
                handleModalAlert={setisEmailPhoneRight}
                title={'One Tap dice!'}
                description={status}
              />

              <CustomModalLoading isLoadingSendData={isLoadingSendData} />
            </ScrollView>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>


        <TabNav
          handleTabPress={handleTabPress}
          numberNav={3}
        />

      </SafeAreaView>
    )
  );
};

export default ProfileProfessional;
