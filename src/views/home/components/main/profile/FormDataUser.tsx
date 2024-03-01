import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import ItemForm from './ItemForm';
import {
    DataFormValues,
    ProfessionalDataForm,
    SocialDataForm,
    handleDataProps,
} from '../../../../../types/profile';
import { UserData } from '../../../../../types/user';

const FormDataUser = ({
    handleDataSet,
    isProUser,
    dataForm,
    data,
    handleData,
    user,
    handleSwitch,
}:
    {
        dataForm: SocialDataForm | ProfessionalDataForm;
        handleDataSet: (e: SocialDataForm | ProfessionalDataForm) => void;
        isProUser: boolean;
        data: [string, any][];
        handleData: ({
            name,
            text,
            subindex,
            key,
            currentDataRef,
        }: handleDataProps) => void;
        user: UserData;
        handleSwitch: (e: any) => void;
    }) => {
    return (
        <SafeAreaView>
            {data.map((value, key) => {
                const index = value[0] as keyof typeof dataForm;
                if (
                    index == 'name' ||
                    index == 'last_name' ||
                    index == 'profession' ||
                    index == 'occupation' ||
                    index == 'address'
                ) {
                    const myValue = (user && user.profile
                        ? isProUser
                            ? user.profile.professional?.[index]
                            : user.profile?.social?.[index]
                        : dataForm && dataForm[index]) as unknown as DataFormValues;
                    return (
                        <View style={{ paddingTop: key === 0 ? 0 : key === 5 ? 0 : undefined, paddingBottom: key === 4 ? 15 : undefined, marginBottom: key === 4 ? 50 : undefined, backgroundColor: "#e9e9e9" }} key={key}>
                            {key === 0 ?
                                <View style={{ height: 60, width: "100%", justifyContent: 'center', alignItems: 'center' }}>
                                    <View style={{ height: "100%", width: "96%", justifyContent: 'center' }}>
                                        <View style={{ height: "65%", width: "35%", justifyContent: 'center', backgroundColor: '#02af9b', borderRadius: 5 }}>
                                            <Text style={{ color: 'white' }}> Datos Personales</Text>
                                        </View>
                                    </View>
                                </View>
                                :
                                null
                            }
                            <ItemForm
                                label={value[1].label}
                                handleSwitch={(e: any) => handleSwitch(e)}
                                handleData={handleData}
                                name={index}
                                checked={value[1].checked}
                                key={key}
                                icon={value[1].icon}
                                myValue={myValue}
                                index={index}
                            />
                        </View>
                    );
                }
            })}
            {isProUser && (
                <View>
                    {data.map((value, key) => {
                        if (
                            !Array.isArray(value[1]) &&
                            (value[0] == 'company' ||
                                value[0] == 'position' ||
                                value[0] == 'professional_profile' ||
                                value[0] == 'other_competencies' ||
                                value[0] == 'skills' ||
                                value[0] == 'languages' ||
                                value[0] == 'achievements_recognitions')
                        ) {
                            const index = value[0] as keyof typeof dataForm;
                            const myValue = (user && user.profile
                                ? isProUser
                                    ? user.profile.professional?.[index]
                                    : user.profile?.social?.[index]
                                : dataForm && dataForm[index]) as unknown as DataFormValues;
                            return (
                                <View style={{ paddingBottom: key === 16 ? 30 : undefined, marginBottom: key === 16 ? 25 : undefined, backgroundColor: "#e9e9e9" }} key={key}>
                                    {key === 5 ?
                                        <View style={{ height: 60, width: "100%", justifyContent: 'center', alignItems: 'center' }}>
                                            <View style={{ height: "100%", width: "96%", justifyContent: 'center' }}>
                                                <View style={{ height: "65%", width: "35%", justifyContent: 'center', backgroundColor: '#02af9b', borderRadius: 5 }}>
                                                    <Text style={{ color: 'white' }}> Datos Adicionales</Text>
                                                </View>
                                            </View>
                                        </View>
                                        :
                                        null
                                    }
                                    <ItemForm
                                        label={value[1].label}
                                        handleSwitch={(e: any) => handleSwitch(e)}
                                        handleData={handleData}
                                        name={index}
                                        checked={value[1].checked}
                                        key={key}
                                        icon={value[1].icon}
                                        myValue={myValue}
                                        index={index}
                                    />
                                </View>
                            );
                        }
                    })}
                </View>
            )}
        </SafeAreaView>
    );
};

export default FormDataUser;