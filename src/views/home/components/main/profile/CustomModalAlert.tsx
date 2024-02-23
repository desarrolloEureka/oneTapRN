import React from 'react';
import {View, TouchableOpacity, Modal, Text} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

function CustomModalAlert({
  isModalAlert,
  handleModalAlert,
  title,
  description,
}: {
  isModalAlert: boolean;
  handleModalAlert: (e: boolean) => void;
  description: string;
  title: string;
}) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isModalAlert}
      onRequestClose={() => {
        handleModalAlert(false);
      }}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(128, 128, 128, 0.7)',
        }}>
        <View
          style={{
            height: 170,
            width: '90%',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#02AF9B',
            borderRadius: 25,
          }}>
          <View
            style={{
              height: '25%',
              width: '100%',
              justifyContent: 'center',
              alignItems: 'flex-end',
            }}>
            <TouchableOpacity
              style={{
                height: '100%',
                width: '20%',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => handleModalAlert(false)}>
              <Icon name="close" size={25} color="white" />
            </TouchableOpacity>
          </View>
          <View
            style={{
              height: '75%',
              width: '98%',
              justifyContent: 'center',
              alignItems: 'center',
              paddingBottom: 40,
            }}>
            <Text style={{color: 'white', fontSize: 19, paddingBottom: 15}}>
              {title}
            </Text>
            <Text
              style={{
                color: 'white',
                fontSize: 15,
                textAlign: 'center',
                justifyContent: 'center',
              }}>
              {description}
            </Text>
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default CustomModalAlert;
