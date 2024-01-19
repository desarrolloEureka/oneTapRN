import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { profile } from '../../../../../initialData/profileInitialData';
import { DataForm } from '../../../../../types/profile';
import { Text } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { UpdatePassword } from '../../../../../reactQuery/users';

const ChangePassword = () => {
    const [showPasswordOne, setShowPasswordOne] = useState(false);
    const [showPasswordTwo, setShowPasswordTwo] = useState(false);

    const [password, setPassword] = useState<string>();
    const [passwordConfirm, setPasswordConfirm] = useState<string>();
    const [errorForm, setErrorForm] = useState(null);

    const handleSeePassword = () => {
        setShowPasswordOne(!showPasswordOne)
    }

    const handleSeePasswordTwo = () => {
        setShowPasswordTwo(!showPasswordTwo)
    }

    const handleChangePassword = () => {
        if (password && passwordConfirm && password === passwordConfirm) {
            setErrorForm(null);
            UpdatePassword(password);
        } else {
            console.log("Error");
        }
    }

    return (
        <View style={styles.container}>
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
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingTop: 50,
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

