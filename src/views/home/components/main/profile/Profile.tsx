import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import PhotoUser from './PhotoUser';
import { profileStyles } from '../../../styles/profileStyles';
import FormDataUser from './FormDataUser';
import FormAddDataUser from './FormAddDataUser';
import { DataForm } from '../../../../../types/profile';
import ProfileHook from './hooks/ProfileHook';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Text } from 'react-native-paper';
import ModalAlert from './ModalAlert';
import ModalSuccessDelete from './ModalSuccessDelete';
import CustomModalAlert from './CustomModalAlert';
import CustomSwitchGeneral from './CustomSwitchGeneral';

const Profile = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const [isProUser, setIsProUser] = useState(false);

    const {
        handleModal,
        handleModalAlert,
        handleSeeMore,
        handleDeleteData,
        isDetailOpen,
        itemDetail,
        isModalOpen,
        isModalAlert,
        handleModalAux,
        dataForm,
        setDataForm,
        handleSendProfile,
        setIsModalAlert,
        isSuccessDelete,
        handleSuccessDelete,
        isDataError,
        isDataSuccess,
        setIsDataError,
        setIsDataSuccess,
        handleSwitchAll,
        switchValue,
        setSwitchValue
    } = ProfileHook({
    });

    useEffect(() => {
        const isProUser = route.params && route?.params?.isProUser;
        if (isProUser !== undefined) {
            setIsProUser(isProUser)
        }
    }, []);

    const handleDataSet = (data: DataForm) => {
        setDataForm(data);
    };

    return (
        <SafeAreaView>
            <ScrollView contentContainerStyle={profileStyles.scrollViewContainer}>
                <PhotoUser />

                <View style={{ height: 100, width: "100%", justifyContent: 'center', alignItems: 'center', marginTop: 12 }}>
                    <CustomSwitchGeneral
                        name='all_true'
                        handleSwitch={(e: any) => handleSwitchAll(e)}
                        checked={switchValue}
                    />
                </View>

                <View style={{ height: 100, width: "100%", justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity style={{
                        backgroundColor: '#02AF9B',
                        height: '45%',
                        width: '40%',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 22,
                        shadowColor: '#000',
                    }} onPress={handleSendProfile} >
                        <Text style={{ color: "white" }}>Guardar</Text>
                    </TouchableOpacity>
                </View>

                <FormDataUser
                    isProUser={isProUser}
                    dataForm={dataForm}
                    handleDataSet={(e) => handleDataSet(e)}
                />

                <FormAddDataUser
                    isProUser={isProUser}
                    dataForm={dataForm}
                    handleDataSet={(e) => handleDataSet(e)}
                    isDetailOpen={isDetailOpen}
                    itemDetail={itemDetail}
                    handleSeeMore={handleSeeMore}
                    handleModalAlert={({ index, subindex }) => handleModalAlert({ index, subindex })}
                />

                <View style={{ height: 130, width: "100%", justifyContent: 'center', alignItems: 'center' }}>
                </View>

                <ModalAlert
                    isModalAlert={isModalAlert}
                    handleModalAlert={handleModalAux}
                    handleDeleteData={handleDeleteData}
                />

                <ModalSuccessDelete
                    isSuccessDelete={isSuccessDelete}
                    handleSuccessDelete={handleSuccessDelete}
                />

                <CustomModalAlert
                    isModalAlert={isDataError}
                    handleModalAlert={setIsDataError}
                    title={"One Tap dice!"}
                    description={"La información del usuario no pudo ser registrada, por favor intenta de nuevo."}
                />
                <CustomModalAlert
                    isModalAlert={isDataSuccess}
                    handleModalAlert={setIsDataSuccess}
                    title={"One Tap dice!"}
                    description={"La información del usuario ha sido registrada con éxito."}
                />

            </ScrollView>
        </SafeAreaView>
    );
};

export default Profile;