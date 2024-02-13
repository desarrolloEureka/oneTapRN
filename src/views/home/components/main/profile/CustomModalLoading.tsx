import React from 'react';
import { View, Modal, ActivityIndicator } from 'react-native';
import { Text } from 'react-native-paper';

function CustomModalLoading({
    isLoadingSendData,
}: {
    isLoadingSendData: boolean;
}) {

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={isLoadingSendData}
        >
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(128, 128, 128, 0.7)' }}>
                <View style={{ height: "100%", width: "100%", justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator size="large" color='#FFFFFF' />
                    <Text style={{ color: 'white' }}>{'\n'}Espera un momento...</Text>
                </View>
            </View>
        </Modal>
    );
};

export default CustomModalLoading;