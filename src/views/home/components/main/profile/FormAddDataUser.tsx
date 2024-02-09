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

const FormAddDataUser = ({
    isDetailOpen,
    itemDetail,
    handleSeeMore,
    isProUser,
    dataForm,
    handleDataSet,
    handleModalAlert,
}: {
    isDetailOpen: boolean;
    itemDetail: number;
    handleSeeMore: (numItem: number) => void;
    isProUser: boolean;
    dataForm: DataForm;
    handleDataSet: (e: DataForm) => void;
    handleModalAlert: ({
        index,
        subindex,
    }: {
        index: string;
        subindex: string;
    }) => void;
}) => {
    const { data } = ProfileHook({
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

                if (labelArray) {
                    //console.log("isProUser ", isProUser);
                    if (isProUser) {
                        return value[0] == 'phones' || value[0] == 'emails' ? (
                            <ItemFormBasicInfo
                                key={key}
                                dataForm={dataForm}
                                handleDataSet={(e) => handleDataSet(e)}
                                handleSeeMore={handleSeeMore}
                                index={index}
                                labelArray={labelArray}
                                value={value}
                                itemDetail={itemDetail}
                                isDetailOpen={isDetailOpen}
                                social={false}
                                handleModalAlert={({ index, subindex }) => handleModalAlert({ index, subindex })}
                            />
                        ) : value[0] == 'education' ? (
                            <ItemFormEducation
                                key={key}
                                dataForm={dataForm}
                                handleDataSet={(e) => handleDataSet(e)}
                                handleSeeMore={handleSeeMore}
                                index={index}
                                labelArray={labelArray}
                                value={value}
                                itemDetail={itemDetail}
                                isDetailOpen={isDetailOpen}
                                social={false}
                                handleModalAlert={({ index, subindex }) => handleModalAlert({ index, subindex })}
                            />

                        ) : value[0] == 'professional_career' ? (
                            <ItemFormProfessional
                                key={key}
                                dataForm={dataForm}
                                handleDataSet={(e) => handleDataSet(e)}
                                handleSeeMore={handleSeeMore}
                                index={index}
                                labelArray={labelArray}
                                value={value}
                                itemDetail={itemDetail}
                                isDetailOpen={isDetailOpen}
                                social={false}
                                handleModalAlert={({ index, subindex }) => handleModalAlert({ index, subindex })}
                            />
                        ) : (
                            <ItemFormUrl
                                key={key}
                                dataForm={dataForm}
                                handleDataSet={(e) => handleDataSet(e)}
                                handleSeeMore={handleSeeMore}
                                index={index}
                                labelArray={labelArray}
                                value={value}
                                itemDetail={itemDetail}
                                isDetailOpen={isDetailOpen}
                                social={false}
                                handleModalAlert={({ index, subindex }) => handleModalAlert({ index, subindex })}
                            />
                        );
                    } else {
                        //console.log("Entre social")
                        return value[0] == 'phones' || value[0] == 'emails' ? (
                            <ItemFormBasicInfo
                                key={key}
                                dataForm={dataForm}
                                handleDataSet={(e) => handleDataSet(e)}
                                handleSeeMore={handleSeeMore}
                                index={index}
                                labelArray={labelArray}
                                value={value}
                                itemDetail={itemDetail}
                                isDetailOpen={isDetailOpen}
                                social={true}
                                handleModalAlert={({ index, subindex }) => handleModalAlert({ index, subindex })}
                            />
                        ) : value[0] == 'urls' ? (
                            <ItemFormUrl
                                key={key}
                                dataForm={dataForm}
                                handleDataSet={(e) => handleDataSet(e)}
                                handleSeeMore={handleSeeMore}
                                index={index}
                                labelArray={labelArray}
                                value={value}
                                itemDetail={itemDetail}
                                isDetailOpen={isDetailOpen}
                                social={true}
                                handleModalAlert={({ index, subindex }) => handleModalAlert({ index, subindex })}
                            />
                        ) : null;
                    }
                }
            })}
        </SafeAreaView>
    );
};

export default FormAddDataUser;