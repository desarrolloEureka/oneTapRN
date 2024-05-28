import React from 'react';
import { View, TouchableOpacity, Modal, Text } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

function CustomModalAlertSave({
    isModalAlert,
    handleModalAlert,
    title,
    description,
    isClosed,
    handleAcept,
    handleCancel
}: {
    isModalAlert: boolean;
    handleModalAlert: (e: boolean) => void;
    handleAcept: () => void;
    handleCancel: () => void;
    description: string;
    title: string;
    isClosed?: boolean;
}) {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={isModalAlert}
            onRequestClose={() => (isClosed ? handleModalAlert(false) : null)}
        >
            <View
                style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(128, 128, 128, 0.7)' }}>
                <View style={{ height: 180, width: '90%', justifyContent: 'center', alignItems: 'center', backgroundColor: '#02AF9B', borderRadius: 25 }}>

                    <View style={{ height: '20%', width: '100%', justifyContent: 'center', alignItems: 'flex-end' }}>
                        <TouchableOpacity
                            style={{ height: '100%', width: '20%', justifyContent: 'center', alignItems: 'center' }}
                            onPress={() => handleModalAlert(false)}>
                            <Icon name="close" size={25} color="white" />
                        </TouchableOpacity>
                    </View>
                    <View style={{ height: '42%', width: '98%', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: 'white', fontSize: 19, paddingBottom: 12 }}>
                            {title}
                        </Text>
                        <Text style={{ color: 'white', fontSize: 15, textAlign: 'center', justifyContent: 'center' }}>
                            {description}
                        </Text>
                    </View>
                    <View style={{ height: '38%', width: '100%', justifyContent: 'flex-end', alignItems: 'center' }}>
                        <View style={{ height: '80%', width: '100%', justifyContent: 'center', alignItems: 'center', borderTopWidth: 1, borderTopColor: 'white', flexDirection: 'row' }}>
                            <TouchableOpacity style={{ height: '100%', width: '50%', justifyContent: 'center', alignItems: 'center', borderRightWidth: 1, borderRightColor: 'white' }}
                                onPress={() => handleCancel()}
                            >
                                <Text style={{ fontSize: 15, color: 'white' }}>Cancelar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ height: '100%', width: '50%', justifyContent: 'center', alignItems: 'center' }}
                                onPress={handleAcept}
                            >
                                <Text style={{ fontSize: 15, color: 'white' }}>Aceptar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </Modal>
    );
}

export default CustomModalAlertSave;