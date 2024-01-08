import React from 'react';
import { SafeAreaView } from 'react-native';
import ItemFormBasicInfo from './ItemFormBasicInfo';
import ItemFormEducation from './ItemFormEducation';
import ItemFormProfessional from './ItemFormProfessional';
import ItemFormUrl from './ItemFormUrl';
import ProfileHook from './hooks/ProfileHook';
import {
    CareerDataFormValues,
    DataForm,
    DataFormValues,
    EducationDataFormValues,
} from '../../../../../types/profile';

const FormAddDataUser = ({ dataForm, isProUser, handleSeeMore, itemDetail }: { dataForm: DataForm; isProUser: boolean; handleSeeMore: (numItem: number) => void; itemDetail: number; }) => {
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

                if (labelArray) {
                    if (isProUser) {
                        return value[0] == 'phones' || value[0] == 'emails' ? (
                            <ItemFormBasicInfo
                                key={key}
                                index={index}
                                labelArray={labelArray}
                                social={false}
                                value={value}
                                dataForm={dataForm}
                                handleSeeMore={handleSeeMore}
                                itemDetail={itemDetail}
                            />
                        )
                            : (
                                value[0] == 'education' ? (
                                    <ItemFormEducation
                                        key={key}
                                        index={index}
                                        labelArray={labelArray}
                                        social={false}
                                        value={value}
                                        dataForm={dataForm}
                                        handleSeeMore={handleSeeMore}
                                        itemDetail={itemDetail}
                                    />

                                ) :
                                    value[0] == 'professional_career' ?
                                        (
                                            <ItemFormProfessional
                                                key={key}
                                                index={index}
                                                labelArray={labelArray}
                                                social={false}
                                                value={value}
                                                dataForm={dataForm}
                                                handleSeeMore={handleSeeMore}
                                                itemDetail={itemDetail}
                                            />
                                        )
                                        :
                                        <ItemFormUrl
                                            key={key}
                                            index={index}
                                            labelArray={labelArray}
                                            social={false}
                                            value={value}
                                            dataForm={dataForm}
                                        />
                            );
                    } else {
                        return value[0] == 'phones' || value[0] == 'emails' ? (
                            <ItemFormBasicInfo
                                key={key}
                                index={index}
                                labelArray={labelArray}
                                social={false}
                                value={value}
                                dataForm={dataForm}
                                handleSeeMore={handleSeeMore}
                                itemDetail={itemDetail}
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

export default FormAddDataUser;