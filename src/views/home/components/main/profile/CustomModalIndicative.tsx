import React from 'react';
import { View, TouchableOpacity, Modal, Text, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { countries } from '../../../../../globals/constants';
import CountryFlag from "react-native-country-flag";
import { handleDataProps, IndexDataForm } from '../../../../../types/profile';

function CustomModalIndicative({
    isModalAlert,
    handleModalAlert,
    isClosed,
    handleData,
    itemIndicative
}: {
    isModalAlert: boolean;
    handleModalAlert: (e: boolean) => void;
    isClosed?: boolean;
    itemIndicative: any
    handleData: ({
        name,
        subindex,
        key,
        currentDataRef,
    }: handleDataProps) => void;
}) {
    return isModalAlert && (
        <Modal animationType="slide" transparent={true} visible={isModalAlert} onRequestClose={() => (isClosed ? handleModalAlert(false) : null)}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(128, 128, 128, 0.1)' }}>
                <View style={{ height: '70%', width: '90%', justifyContent: 'center', alignItems: 'center', backgroundColor: '#02AF9B', borderRadius: 25 }}>

                    <View style={{ height: '10%', width: '100%', justifyContent: 'center', alignItems: 'flex-end' }}>
                        <TouchableOpacity style={{ height: '100%', width: '23%', justifyContent: 'center', alignItems: 'center' }}
                            onPress={() => handleModalAlert(false)}>
                            <Icon name="close" size={25} color="white" />
                        </TouchableOpacity>
                    </View>

                    <View style={{ height: '90%', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ height: '95%', width: '90%' }}>
                            {countries && (
                                <FlatList
                                    data={countries}
                                    keyExtractor={item => item.id}
                                    renderItem={({ item, index }) => (
                                        <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', height: 50, width: '100%', justifyContent: 'center', alignItems: 'center', borderColor: 'black', borderTopWidth: 0.5 }}
                                            onPress={() => handleData({
                                                name: itemIndicative.name,
                                                key: itemIndicative.subindex,
                                                text: item.id,
                                                currentDataRef: itemIndicative.dataRef,
                                            })}
                                        >
                                            <View style={{ display: 'flex', flexDirection: 'row', height: '100%', width: "35%", justifyContent: 'center', alignItems: 'center' }}>
                                                <View style={{ height: '100%', width: "50%", justifyContent: 'center', alignItems: 'center' }}>
                                                    <CountryFlag isoCode={item.flag} size={20} />
                                                </View>
                                                <View style={{ height: '100%', width: "50%", justifyContent: 'center', alignItems: 'flex-start' }}>
                                                    <Text>
                                                        {item.code}
                                                    </Text>
                                                </View>
                                            </View>
                                            <View style={{ height: '100%', width: "65%", justifyContent: 'center', alignItems: 'flex-start' }}>
                                                <Text>
                                                    {item.name}
                                                </Text>
                                            </View>
                                        </TouchableOpacity>
                                    )}
                                />
                            )}
                        </View>
                    </View>

                </View>
            </View>
        </Modal>
    );
}

export default CustomModalIndicative;
