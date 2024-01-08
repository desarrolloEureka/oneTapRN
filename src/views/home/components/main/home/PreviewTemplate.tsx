import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const PreviewTemplate = () => {
    return (
        <View style={styles.container}>
            <Text>Aquí va vista Previa</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingTop: 50,
    },
});

export default PreviewTemplate;