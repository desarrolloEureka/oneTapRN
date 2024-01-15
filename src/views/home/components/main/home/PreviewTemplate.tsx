import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

const PreviewTemplate = () => {
    return (
        <View style={styles.imageContainer}>
        <Image source={require('src/images/social.png')} style={styles.image} />
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
    imageContainer: {
        width: 420,
        height: 844,
        marginTop: 10,
      },
      image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
      },
});

export default PreviewTemplate;