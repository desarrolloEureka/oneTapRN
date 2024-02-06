import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, TextInput, Alert } from 'react-native';
import { Text } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { UpdatePassword } from '../../../../../reactQuery/users';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const ChangePassword = () => {
    const navigation = useNavigation();
    const [showPasswordOne, setShowPasswordOne] = useState(false);
    const [showPasswordTwo, setShowPasswordTwo] = useState(false);
    const [password, setPassword] = useState<string>();
    const [passwordConfirm, setPasswordConfirm] = useState<string>();
    const [errorForm, setErrorForm] = useState(0);
    const [stateUpdate, setStateUpdate] = useState(false);

    const handleSeePassword = () => {
        setShowPasswordOne(!showPasswordOne)
    }

    const handleSeePasswordTwo = () => {
        setShowPasswordTwo(!showPasswordTwo)
    }

    const handleChangePassword = async () => {
        if (password && passwordConfirm && password === passwordConfirm) {
            setErrorForm(0);
            const resUpdate = await UpdatePassword(password);
            setStateUpdate(resUpdate);
            if (resUpdate === true) {
                Alert.alert('Éxito', 'La contraseña se cambió correctamente.');
            } else {
                Alert.alert('Error', 'Ocurrió un error y no fue posible cambiar la contraseña. Por favor, inténtalo de nuevo.');
            }
        } else {
            if (!password) {
                setErrorForm(1);
            } else if (!passwordConfirm) {
                setErrorForm(2);
            } else if (password !== passwordConfirm) {
                setErrorForm(3);
            }
        }
    }

    const handleBackPress = () => {
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <View style={{ height: 100, width: "100%" }}>
                <TouchableOpacity style={{ height: "100%", width: "18%", alignItems: 'center', justifyContent: 'center' }} onPress={handleBackPress}>
                    <Icon name="arrow-back-ios" size={27} color="black" />
                </TouchableOpacity>
            </View>
            <View>
                <Text style={styles.title}>
                    Cambiar Contraseña
                </Text>
            </View>
            <Text style={styles.labelPassword}>
                Contraseña
            </Text>

            <View style={{ height: 65, width: "95%" }}>
                <View style={{ height: "80%", width: "100%", borderBottomWidth: 1, borderBottomColor: '#396593', flexDirection: 'row' }}>
                    <View style={{ height: "100%", width: "85%" }}>
                        <TextInput
                            style={styles.input}
                            placeholder="Contraseña"
                            placeholderTextColor="#396593"
                            underlineColorAndroid="transparent"
                            secureTextEntry={!showPasswordOne}
                            onChangeText={(text) => setPassword(text)}
                        />
                    </View>
                    <TouchableOpacity style={{ height: "100%", width: "15%", alignItems: 'center', justifyContent: 'center' }} onPress={handleSeePassword}>
                        {showPasswordOne ?
                            <MaterialCommunityIcons name="eye-outline" size={30} color="#02AF9B" />
                            :
                            <MaterialCommunityIcons name="eye-off-outline" size={30} color="#02AF9B" />
                        }
                    </TouchableOpacity>
                </View>

            </View>

            {errorForm === 1 &&
                <Text style={{ color: 'red', marginTop: 3, marginRight: 200, marginBottom: 12 }}>
                    La contraseña está vacía.
                </Text>
            }

            <Text style={styles.label}>
                Confirmar Contraseña
            </Text>

            <View style={{ height: 65, width: "95%" }}>
                <View style={{ height: "80%", width: "100%", borderBottomWidth: 1, borderBottomColor: '#396593', flexDirection: 'row' }}>
                    <View style={{ height: "100%", width: "85%" }}>
                        <TextInput
                            style={styles.input}
                            placeholder="Contraseña"
                            placeholderTextColor="#396593"
                            underlineColorAndroid="transparent"
                            secureTextEntry={!showPasswordTwo}
                            onChangeText={(text) => setPasswordConfirm(text)}
                        />
                    </View>
                    <TouchableOpacity style={{ height: "100%", width: "15%", alignItems: 'center', justifyContent: 'center' }} onPress={handleSeePasswordTwo}>
                        {showPasswordTwo ?
                            <MaterialCommunityIcons name="eye-outline" size={30} color="#02AF9B" />
                            :
                            <MaterialCommunityIcons name="eye-off-outline" size={30} color="#02AF9B" />
                        }
                    </TouchableOpacity>
                </View>

            </View>

            {errorForm === 2 &&
                <Text style={{ color: 'red', marginTop: 3, marginRight: 70, marginBottom: 12 }}>
                    La confirmación de contraseña está vacía.
                </Text>
            }

            {errorForm === 3 &&
                <Text style={{ color: 'red', marginTop: 3, marginRight: 155, marginBottom: 12 }}>
                    Las contraseñas no coinciden.
                </Text>
            }

            <TouchableOpacity style={styles.button} onPress={handleChangePassword}>
                <Text style={styles.buttonText}>
                    Continuar
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        //paddingTop: 50,
    },
    title: {
        color: '#396593',
        fontSize: 24,
        marginTop: 10,
        marginBottom: 50,
    },
    input: {
        height: 52,
        width: 386,
        fontSize: 16,
        color: '#396593',
        marginBottom: 10,
        paddingLeft: 10,
    },
    label: {
        color: '#008F9E',
        marginTop: 3,
        marginRight: 220,
    },
    labelPassword: {
        color: '#008F9E',
        marginTop: 3,
        marginRight: 280,
    },
    button: {
        width: 265,
        height: 45,
        backgroundColor: '#02AF9B',
        marginTop: 300,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
});

export default ChangePassword;