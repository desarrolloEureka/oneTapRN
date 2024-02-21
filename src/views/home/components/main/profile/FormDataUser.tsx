import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import ItemForm from './ItemForm';
import ProfileHook from './hooks/ProfileHook';
import {
    CareerDataFormValues,
    DataForm,
    DataFormValues,
    EducationDataFormValues,
} from '../../../../../types/profile';
import TextAreaForm from './TextAreaForm';

const FormDataUser = ({
    isProUser,
    handleDataSet,
}: {
    isProUser: boolean;
    dataForm: DataForm;
    handleDataSet: (e: DataForm) => void;
}) => {
    const { handleSwitch, handleData, data, user, dataForm } = ProfileHook({
        handleDataSet,
    });

    return (
        <SafeAreaView>
            {data.map((value, key) => {
                const index = value[0] as keyof typeof dataForm;
                const labelArray:
                    | DataFormValues[]
                    | EducationDataFormValues[]
                    | CareerDataFormValues[] =
                    value[0] == 'phones' ||
                        value[0] == 'education' ||
                        value[0] == 'emails' ||
                        value[0] == 'urls' ||
                        value[0] == 'professional_career'
                        ? value[1]
                        : null;

                if (!labelArray) {
                    if (isProUser) {
                        console.log("key ", key, ' Label ', value[1].label);
                        if (
                            value[0] == 'professional_profile' ||
                            value[0] == 'other_competencies' ||
                            value[0] == 'skills' ||
                            value[0] == 'languages' ||
                            value[0] == 'achievements_recognitions'
                        ) {
                            const myValue =
                                user && user.profile && index == value[0]
                                    ? user.profile[index]?.text
                                    : undefined;
                            const myValue1 = (user && user.profile && index == value[0]
                                ? user.profile[index]
                                : undefined) as unknown as DataFormValues;
                            return (
                                <View style={{ paddingBottom: key === 16 ? 30 : undefined, marginBottom: key === 16 ? 25 : undefined, backgroundColor: "#e9e9e9" }} key={key}>
                                    <TextAreaForm
                                        label={value[1].label}
                                        handleSwitch={(e: any) => handleSwitch(e)}
                                        handleData={handleData}
                                        name={index}
                                        checked={value[1].checked}
                                        key={key}
                                        icon={value[1].icon}
                                        value={myValue}
                                        myValue={myValue1}
                                        dataForm={dataForm}
                                        index={index}
                                    />
                                </View>
                            );
                        } else {
                            const myValue = (user && user.profile && index == value[0]
                                ? user.profile[index]
                                : undefined) as unknown as DataFormValues;
                            return (
                                <View style={{ paddingTop: key === 0 ? 0 : key === 5 ? 0 : undefined, paddingBottom: key === 4 ? 15 : undefined, marginBottom: key === 4 ? 50 : undefined, backgroundColor: "#e9e9e9" }} key={key}>
                                    {key === 0 ?
                                        <View style={{ height: 60, width: "100%", justifyContent: 'center', alignItems: 'center' }}>
                                            <View style={{ height: "100%", width: "96%", justifyContent: 'center' }}>
                                                <Text style={{ color: '#02AF9B' }}>Datos Personales:</Text>
                                            </View>
                                        </View>
                                        :
                                        key === 5 ?
                                            <View style={{ height: 60, width: "100%", justifyContent: 'center', alignItems: 'center' }}>
                                                <View style={{ height: "100%", width: "96%", justifyContent: 'center' }}>
                                                    <Text style={{ color: '#02AF9B' }}>Datos Adicionales:</Text>
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
                                        value={value[1].text}
                                        myValue={myValue}
                                        dataForm={dataForm}
                                        index={index}
                                    />
                                </View>
                            );
                        }
                    } else {
                        const myValue = (user && user.profile && index == value[0]
                            ? user.profile[index]
                            : undefined) as unknown as DataFormValues;

                        return value[1].social == true ? (
                            <View style={{ paddingTop: key === 0 ? 0 : key === 5 ? 0 : undefined, paddingBottom: key === 4 ? 15 : undefined, marginBottom: key === 4 ? 50 : undefined, backgroundColor: "#e9e9e9" }} key={key}>
                                {key === 0 ?
                                    <View style={{ height: 60, width: "100%", justifyContent: 'center', alignItems: 'center' }}>
                                        <View style={{ height: "100%", width: "96%", justifyContent: 'center' }}>
                                            <Text style={{ color: '#02AF9B' }}>Datos Personales:</Text>
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
                                    dataForm={dataForm}
                                    index={index}
                                />
                            </View>
                        ) : null;
                    }
                }
            })}
        </SafeAreaView>
    );
};

export default FormDataUser;