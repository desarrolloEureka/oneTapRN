import React, { useState } from 'react';
import { View, SafeAreaView } from 'react-native';
import { profileStyles } from '../../../styles/profileStyles';
import ItemForm from './ItemForm';
import ProfileHook from './hooks/ProfileHook';
import {
    CareerDataFormValues,
    DataForm,
    DataFormValues,
    EducationDataFormValues,
    UrlDataFormValues,
    handleDataProps
} from '../../../../../types/profile';
import TextAreaForm from './TextAreaForm';

const dataAux = [{ value: 'phones' }, { value: 'education' }, { value: 'emails' }, { value: 'professional_career' }, { value: 'name' }, { value: 'lastName' }]

const FormDataUser = ({ dataForm, isProUser }: { dataForm: DataForm; isProUser: boolean; }) => {
    const { data } = ProfileHook({
        dataForm,
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
                        return value[0] == 'professional_profile' || value[0] == 'other_competencies' || value[0] == 'skills' || value[0] == 'languages' || value[0] == 'achievements_recognitions' ? (
                            <TextAreaForm
                                label={value[1].label}
                                key={key}
                                icon={value[1].icon}
                            />
                        ) : (
                            <ItemForm
                                label={value[1].label}
                                key={key}
                                icon={value[1].icon}
                            />
                        );
                    } else {
                        return value[1].social == true ? (
                            <ItemForm
                                label={value[1].label}
                                key={key}
                                icon={value[1].icon}
                            />
                        ) : (
                            null
                        );
                    }
                }
            })}
        </SafeAreaView>

    );
};

export default FormDataUser;