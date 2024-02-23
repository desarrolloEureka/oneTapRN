import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';

import {
  CareerDataFormValues,
  IndexDataForm,
  DataFormValues,
  EducationDataFormValues,
  DataForm,
  NetworksSubIndexDataForm,
} from '../../../../../types/profile';
import ProfileHook from './hooks/ProfileHook';
import FormUrl from './FormUrl';
import ModalIcons from './ModalIcons';

const ItemFormUrl = ({
  dataForm,
  handleDataSet,
  handleSeeMore,
  index,
  label,
  labelArray,
  value,
  itemDetail,
  isDetailOpen,
  icon,
  social,
  handleModalAlert,
}: {
  dataForm: DataForm;
  handleDataSet: (e: DataForm) => void;
  handleSeeMore: (e: number) => void;
  index: IndexDataForm;
  label?: string;
  labelArray:
    | DataFormValues[]
    | EducationDataFormValues[]
    | CareerDataFormValues[];
  value: any;
  itemDetail: number;
  isDetailOpen: boolean;
  icon?: string;
  social: boolean;
  handleModalAlert: ({
    index,
    subindex,
  }: {
    index: string;
    subindex: string;
  }) => void;
}) => {
  const {
    handleSwitch,
    handleDataNetworks,
    handleAddData,
    handleDeleteData,
    handleData,
    user,
    isModalIcons,
    setModalIcons,
    itemUrlSelected,
    itemUrlKey,
    handleModalIcons,
  } = ProfileHook({
    handleDataSet,
  });

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
        style={{
          minHeight: 230,
          width: '100%',
          justifyContent: 'center',
          backgroundColor: '#e9e9e9',
        }}>
        <View style={{height: 40, width: '100%', alignItems: 'flex-end'}}>
          <TouchableOpacity
            style={{
              height: '100%',
              width: '35%',
              justifyContent: 'center',
              flexDirection: 'row',
            }}
            onPress={() => {
              handleAddData('urls', social);
            }}>
            <View
              style={{
                height: '100%',
                width: '20%',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Icon name="plus-circle" size={20} color="#02AF9B" />
            </View>
            <View
              style={{height: '100%', width: '50%', justifyContent: 'center'}}>
              <Text style={{fontSize: 11, color: 'black'}}>Agregar URL</Text>
            </View>
          </TouchableOpacity>
        </View>

        {labelArray.map((val, key) => {
          const myValue = (user && user.profile && index == value[0]
            ? user.profile[index]
            : value[1]) as unknown as DataFormValues;
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
                      handleModalAlert={({index, subindex}) =>
                        handleModalAlert({index, subindex})
                      }
                      myValue={myValue}
                      dataForm={dataForm}
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
                        handleModalAlert={({index, subindex}) =>
                          handleModalAlert({index, subindex})
                        }
                        myValue={myValue}
                        dataForm={dataForm}
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
                      backgroundColor: 'white',
                      borderRadius: 80,
                    }}
                    onPress={() => handleModalIcons(val, key)}>
                    {/* <FontAwesome5 name="shopping-cart" size={23} color="#396593" /> */}
                    {/* <Ionicons name="apps-sharp" size={23} color="#396593" /> */}
                    {/* <Octicons name="apps" size={23} color="#396593" /> */}
                    {/* <MaterialIcons name="app-registration" size={27} color="#396593" /> */}
                    <Fontisto name="world-o" size={27} color="#396593" />
                  </TouchableOpacity>
                  <Text style={{fontSize: 12, textAlign: 'center'}}>
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
        })}
      </View>

      <ModalIcons
        isModalIcons={isModalIcons}
        setModalIcons={setModalIcons}
        value={value}
        val={itemUrlSelected}
        keyItem={itemUrlKey}
        handleDataNetworks={handleDataNetworks}
      />
    </View>
  );
};

export default ItemFormUrl;
