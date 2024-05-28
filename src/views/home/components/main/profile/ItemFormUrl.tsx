import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';

import {
  CareerDataFormValues,
  IndexDataForm,
  DataFormValues,
  EducationDataFormValues,
  DataForm,
  NetworksSubIndexDataForm,
  SocialDataForm,
  ProfessionalDataForm,
  handleDataProps,
  handleDataNetworksProps,
} from '../../../../../types/profile';
import FormUrl from './FormUrl';
import ModalIcons from './ModalIcons';
import { UserData } from '../../../../../types/user';
import { GetAllLogosImages } from '../../../../../reactQuery/home';

const ItemFormUrl = ({
  dataForm,
  handleDataSet,
  index,
  labelArray,
  value,
  handleModalAlert,
  isProUser,
  handleData,
  user,
  handleSwitch,
  handleAddData,
  handleDataNetworks,
  setModalIcons,
  itemUrlKey,
  itemUrlSelected,
  handleModalIcons,
  isModalIcons,
  handleDeleteData,
}: {
  dataForm: SocialDataForm | ProfessionalDataForm;
  handleDataSet: (e: SocialDataForm | ProfessionalDataForm) => void;
  index: IndexDataForm;
  labelArray:
  | DataFormValues[]
  | EducationDataFormValues[]
  | CareerDataFormValues[];
  value: any;
  handleModalAlert: ({
    index,
    subindex,
  }: {
    index: string;
    subindex: string;
  }) => void;
  isProUser: boolean;
  handleData: ({
    name,
    text,
    subindex,
    key,
    currentDataRef,
  }: handleDataProps) => void;
  user: UserData;
  handleSwitch: (e: any) => void;
  handleAddData: (index: any) => void;
  handleDataNetworks: ({
    name,
    text,
    subindex,
    key,
  }: handleDataNetworksProps) => void;
  setModalIcons: (e: any) => void;
  itemUrlKey: number;
  itemUrlSelected: any;
  handleModalIcons: (item: any, key: any) => void;
  isModalIcons: boolean;
  handleDeleteData: () => void;
}) => {
  const { data } = GetAllLogosImages();

  return (
    <View
      style={{
        height: 'auto',
        minHeight: 280,
        width: '100%',
        justifyContent: 'center',
        paddingTop: 20,
        marginBottom: 20,
      }}>
      <View
        style={{ minHeight: 230, width: "100%", justifyContent: 'center', alignItems: 'center', backgroundColor: "#e9e9e9" }}>
        <View style={{ height: 50, width: "95%", alignItems: 'flex-end', flexDirection: 'row' }}>
          <View style={{ height: "100%", width: "65%", justifyContent: 'flex-start', alignItems: 'flex-end', flexDirection: 'row' }}>
            <View style={{ height: "75%", width: "48%", justifyContent: 'center', alignItems: 'center', backgroundColor: '#02af9b', borderRadius: 5 }}>
              <Text style={{ fontSize: 13, color: 'white' }}>Registro de URLs</Text>
            </View>
          </View>
          <TouchableOpacity style={{ height: "100%", width: "35%", justifyContent: 'center', flexDirection: 'row' }} onPress={() => { handleAddData('urls'); }}>
            <View style={{ height: '100%', width: '20%', alignItems: 'center', justifyContent: 'center', }}>
              <Icon name="plus-circle" size={20} color="#396593" />
            </View>
            <View
              style={{ height: '100%', width: '50%', justifyContent: 'center' }}>
              <Text style={{ fontSize: 11, color: 'black' }}>Agregar URL</Text>
            </View>
          </TouchableOpacity>
        </View>

        {labelArray.map((val, key) => {
          const datafilter = data?.find(item => item.name === val.icon);
          //console.log('datafilter ', datafilter);

          if (index == 'urls') {
            const myValue = (user && user.profile
              ? isProUser
                ? user.profile.professional
                  ? user.profile.professional?.[index]
                  : dataForm && dataForm[index]
                : user.profile.social
                  ? user.profile?.social?.[index]
                  : dataForm && dataForm[index]
              : dataForm && dataForm[index]) as unknown as DataFormValues;

            return (
              <View
                key={key}
                style={{
                  height: 230,
                  justifyContent: 'center',
                  borderBottomWidth:
                    key !== labelArray.length - 1 ? 2 : undefined,
                  borderBlockColor:
                    key !== labelArray.length - 1 ? '#d4d4d4' : undefined,
                  marginTop: 10,
                }}>
                <View
                  style={{
                    height: '60%',
                    width: '100%',
                    justifyContent: 'center',
                    flexDirection: 'row',
                  }}>
                  <View
                    style={{
                      height: '100%',
                      width: '98%',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <View
                      style={{
                        height: '40%',
                        width: '90%',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <FormUrl
                        label={'Nombre: '}
                        handleSwitch={(e: any) => handleSwitch(e)}
                        handleData={handleData}
                        name={index}
                        checked={val.checked}
                        subindex={key}
                        icon={val.icon}
                        deleteAction={true}
                        handleDeleteData={handleDeleteData}
                        handleModalAlert={({ index, subindex }) =>
                          handleModalAlert({ index, subindex })
                        }
                        myValue={myValue}
                        index={index}
                        withCheck={true}
                        subLabel={'name' as NetworksSubIndexDataForm}
                      />
                    </View>

                    <View
                      style={{
                        height: '40%',
                        width: '90%',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <View
                        style={{
                          height: '100%',
                          width: '100%',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexDirection: 'row',
                        }}>
                        <FormUrl
                          label={'Sitio Web/URL: '}
                          handleSwitch={(e: any) => handleSwitch(e)}
                          handleData={handleData}
                          name={index}
                          checked={val.checked}
                          subindex={key}
                          icon={val.icon}
                          deleteAction={true}
                          handleDeleteData={handleDeleteData}
                          handleModalAlert={({ index, subindex }) =>
                            handleModalAlert({ index, subindex })
                          }
                          myValue={myValue}
                          index={index}
                          withCheck={false}
                          subLabel={'url' as NetworksSubIndexDataForm}
                        />
                      </View>
                    </View>
                  </View>
                </View>

                <View
                  style={{
                    height: '40%',
                    width: '100%',
                    justifyContent: 'center',
                    flexDirection: 'row',
                  }}>
                  <View
                    style={{
                      height: '100%',
                      width: '20%',
                      justifyContent: 'center',
                      alignItems: 'center',
                      paddingLeft: 1,
                    }}>
                    <TouchableOpacity
                      style={{
                        height: '55%',
                        width: '68%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        //backgroundColor: 'white',
                        borderRadius: 80,
                      }}
                      onPress={() => handleModalIcons(val, key)}>

                      {datafilter ?
                        <Image
                          source={{ uri: datafilter.image }}
                          style={{ width: '80%', height: '80%', resizeMode: 'contain' }}
                        />
                        :
                        /* <Fontisto name="world-o" size={32} color="#396593" /> */
                        <Feather name="link-2" size={30} color="#9ca3af" />
                      }
                    </TouchableOpacity>
                    <Text style={{ fontSize: 12, textAlign: 'center', color: 'black' }}>
                      Seleccionar Icono
                    </Text>
                  </View>
                  <View
                    style={{
                      height: '100%',
                      width: '80%',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  />
                </View>
              </View>
            );
          }
        })}
      </View>

      <ModalIcons
        isModalIcons={isModalIcons}
        setModalIcons={setModalIcons}
        value={value}
        val={itemUrlSelected}
        keyItem={itemUrlKey}
        handleDataNetworks={handleDataNetworks}
        dataLogos={data}
      />
    </View>
  );
};

export default ItemFormUrl;