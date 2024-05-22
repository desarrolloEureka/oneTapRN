import React from 'react';
import { View, TouchableOpacity, Modal, ScrollView, Text, FlatList, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const ModalIcons = ({
  isModalIcons,
  setModalIcons,
  value,
  val,
  keyItem,
  handleDataNetworks,
  dataLogos
}: {
  isModalIcons: boolean;
  setModalIcons: (e: boolean) => void;
  handleDataNetworks: (e: any) => void;
  value: any;
  val: any;
  keyItem: any;
  dataLogos: any;
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isModalIcons}
      onRequestClose={() => {
        setModalIcons(false);
      }}>
      <View
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(128, 128, 128, 0.7)' }}>
        <View style={{ height: '85%', width: '90%', justifyContent: 'center', alignItems: 'center', backgroundColor: '#02AF9B', borderRadius: 25 }}>
          <View style={{ height: '8%', width: '100%', justifyContent: 'center', alignItems: 'flex-end' }}>
            <TouchableOpacity style={{ height: '100%', width: '20%', justifyContent: 'center', alignItems: 'center' }}
              onPress={() => setModalIcons(false)}>
              <Icon name="close" size={25} color="white" />
            </TouchableOpacity>
          </View>
          <View style={{ height: '92%', width: '98%', justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ height: '95%', width: '95%', justifyContent: 'center', alignItems: 'center' }}>

              {dataLogos && (
                <FlatList
                  data={dataLogos}
                  keyExtractor={item => item.id.toString()}
                  numColumns={4}
                  renderItem={({ item, index }) => {

                    return (
                      <View style={{ height: 100, width: "25%", justifyContent: 'center', alignItems: 'center',/*  backgroundColor: index % 2 === 0 ? 'red' : 'yellow', borderColor: 'black', borderWidth: 1 */ }}>


                        <View style={{ height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                          <View style={{ height: '30%', width: '95%', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: 'white', fontSize: 13 }}>{item.name.length > 8 ? item.name.substring(0, 10) : item.name}</Text>
                          </View>
                          <View style={{ height: '60%', width: '95%', justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity
                              style={{ height: '85%', width: '65%', justifyContent: 'center', alignItems: 'center', backgroundColor: val.icon === item.name ? '#babcbf' : 'white', flexDirection: 'row', borderRadius: 10 }}
                              onPress={(text: any) =>
                                handleDataNetworks({
                                  name: value[0],
                                  text: item.name,
                                  subindex: 'icon',
                                  key: keyItem
                                })
                              }>
                              <View style={{ height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                                <Image
                                  source={{ uri: item.image }}
                                  style={{ width: '80%', height: '80%', resizeMode: 'contain' }}
                                />

                              </View>

                            </TouchableOpacity>
                          </View>
                        </View>

                      </View>
                    );
                  }}
                />
              )}
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalIcons;
