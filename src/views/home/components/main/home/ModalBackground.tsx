import React from 'react';
import { View, TouchableOpacity, Modal, FlatList, Image } from 'react-native';
import { Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign';
import { BackgroundImages, TemplateTypes, Templates } from '../../../../../types/home';
import { RadioButton } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ModalBackground = ({
    isModalOpen,
    handleModalBackground,
    dataBackgrounds,
}: {
    isModalOpen: boolean;
    handleModalBackground: () => void;
    dataBackgrounds: BackgroundImages[];
}) => {

    const data = [
        { id: '1', text: 'Item 1' },
        { id: '2', text: 'Item 2' },
        { id: '3', text: 'Item 3' },
        { id: '4', text: 'Item 4' },
        { id: '5', text: 'Item 5' },
        { id: '6', text: 'Item 6' },
        { id: '7', text: 'Item 7' },
        //{ id: '8', text: 'Item 8' },
    ];

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={isModalOpen}
            onRequestClose={() => {
                handleModalBackground();
            }}
        >
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(128, 128, 128, 0.7)' }}>
                <View style={{ height: "75%", width: "90%", justifyContent: 'center', alignItems: 'center', backgroundColor: "#02AF9B", borderRadius: 25 }}>

                    <View style={{ height: "10%", width: "100%", justifyContent: 'center', alignItems: 'flex-end' }}>

                        <View style={{ height: "100%", width: "90%", justifyContent: 'center', alignItems: 'flex-start' }}>
                            <Text>Seleccionar fondo</Text>
                        </View>

                        <TouchableOpacity style={{ height: "100%", width: "20%", justifyContent: 'center', alignItems: 'center', position: 'absolute' }} onPress={handleModalBackground}>
                            <Icon name="close" size={25} color="white" />
                        </TouchableOpacity>

                    </View>

                    <View style={{ height: "80%", width: "90%", justifyContent: 'center', alignItems: 'center' }}>
                        <FlatList
                            data={dataBackgrounds}
                            keyExtractor={item => item.id}
                            numColumns={2}
                            renderItem={({ item, index }) => (
                                <View style={{ height: 240, width: "50%", justifyContent: 'center', alignItems: 'center' }}>
                                    <View style={{ height: "90%", width: "90%", backgroundColor: "white", borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>

                                        <View style={{ height: "15%", width: "100%", alignItems: 'flex-end' }}>
                                            <TouchableOpacity style={{ height: "100%", width: "30%", justifyContent: 'center', alignItems: 'center' }}>
                                                <Ionicons name="radio-button-on-outline" size={20} color="#396593" />
                                            </TouchableOpacity>
                                        </View>

                                        <View style={{ height: "70%", width: "98%", justifyContent: 'center', alignItems: 'center' }}>
                                            <View style={{ height: "98%", width: "98%" }}>
                                                <Image
                                                    source={{ uri: `${item.image}` }}
                                                    style={{ flex: 1, resizeMode: 'contain' }}
                                                />

                                            </View>
                                        </View>

                                        <View style={{ height: "15%", width: "98%", justifyContent: 'center' }}>
                                            <Text style={{ paddingLeft: 10 }}>Fondo {index + 1}</Text>
                                        </View>

                                    </View>
                                </View>
                            )}
                        />
                    </View>
                    <View style={{ height: "10%", width: "100%", justifyContent: 'center', alignItems: 'center', borderTopWidth: 1 }}>
                        <View style={{ height: "98%", width: "90%", justifyContent: 'center', alignItems: 'flex-start' }}>
                            <TouchableOpacity style={{ height: "100%", width: "35%", justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                                <Icon name="pluscircle" size={25} color="white" />
                                <Text style={{ paddingLeft: 10 }}>Guardar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>
            </View>
        </Modal>
    );
};

export default ModalBackground;