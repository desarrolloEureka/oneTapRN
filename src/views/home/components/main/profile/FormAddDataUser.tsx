'use client';
import { SafeAreaView } from 'react-native';
import {
  CareerDataFormValues,
  DataFormValues,
  EducationDataFormValues,
  ProfessionalDataForm,
  SocialDataForm,
  handleDataNetworksProps,
  handleDataProps,
} from '../../../../../types/profile';
import { UserData } from '../../../../../types/user';

import ItemFormBasicInfo from './ItemFormBasicInfo';
import ItemFormEducation from './ItemFormEducation';
import ItemFormProfessional from './ItemFormProfessional';
import ItemFormUrl from './ItemFormUrl';

const FormAddDataUser = ({
  isDetailOpen,
  itemDetail,
  isProUser,
  dataForm,
  handleDataSet,
  handleModalAlert,
  data,
  handleData,
  user,
  handleSwitch,
  handleAddData,
  handleModalAlertLimit,
  isModalAlertLimit,
  handleDataNetworks,
  setModalIcons,
  itemUrlKey,
  itemUrlSelected,
  handleModalIcons,
  isModalIcons,
  handleDeleteData,
}: {
  isDetailOpen: boolean;
  itemDetail: number;
  isProUser: boolean;
  dataForm: SocialDataForm | ProfessionalDataForm;
  handleDataSet: (e: SocialDataForm | ProfessionalDataForm) => void;
  handleModalAlert: ({
    index,
    subindex,
  }: {
    index: string;
    subindex: string;
  }) => void;
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
  handleAddData: (index: string) => void;
  handleModalAlertLimit: () => void;
  isModalAlertLimit: boolean;
  handleDataNetworks: ({
    name,
    text,
    subindex,
    key,
  }: handleDataNetworksProps) => void;
  setModalIcons: (e: any) => void;
  itemUrlKey: number;
  itemUrlSelected: any;
  handleModalIcons: (item: any, key: any) => void;
  isModalIcons: boolean;
  handleDeleteData: () => void;
}) => {

  return (
    <SafeAreaView>
      {data.map((value, key) => {
        const index = value[0] as keyof typeof dataForm;
        const validation =
          value[0] == 'phones' ||
          value[0] == 'education' ||
          value[0] == 'emails' ||
          value[0] == 'urls' ||
          value[0] == 'professional_career';
        const labelArray:
          | DataFormValues[]
          | EducationDataFormValues[]
          | CareerDataFormValues[] = validation ? value[1] : null;
        if (labelArray) {
          if (isProUser) {
            return value[0] == 'phones' || value[0] == 'emails' ? (
              <ItemFormBasicInfo
                key={key}
                dataForm={dataForm}
                handleDataSet={(e) => handleDataSet(e)}
                index={index}
                labelArray={labelArray}
                value={value}
                itemDetail={itemDetail}
                isDetailOpen={isDetailOpen}
                social={false}
                handleModalAlert={({ index, subindex }) =>
                  handleModalAlert({ index, subindex })
                }
                isProUser={isProUser}
                handleData={handleData}
                user={user}
                handleSwitch={handleSwitch}
                handleAddData={handleAddData}
                handleModalAlertLimit={handleModalAlertLimit}
                isModalAlertLimit={isModalAlertLimit}
                handleDeleteData={handleDeleteData}
              />
            ) : value[0] == 'education' ? (
              <ItemFormEducation
                key={key}
                dataForm={dataForm}
                handleDataSet={(e) => handleDataSet(e)}
                index={index}
                labelArray={labelArray}
                handleModalAlert={({ index, subindex }) =>
                  handleModalAlert({ index, subindex })
                }
                isProUser={isProUser}
                handleData={handleData}
                user={user}
                handleSwitch={handleSwitch}
                handleAddData={handleAddData}
                handleModalAlertLimit={handleModalAlertLimit}
                isModalAlertLimit={isModalAlertLimit}
                handleDeleteData={handleDeleteData}
              />
            ) : value[0] == 'professional_career' ? (
              <ItemFormProfessional
                key={key}
                dataForm={dataForm}
                handleDataSet={(e) => handleDataSet(e)}
                index={index}
                labelArray={labelArray}
                handleModalAlert={({ index, subindex }) =>
                  handleModalAlert({ index, subindex })
                }
                isProUser={isProUser}
                handleData={handleData}
                user={user}
                handleSwitch={handleSwitch}
                handleAddData={handleAddData}
                handleModalAlertLimit={handleModalAlertLimit}
                isModalAlertLimit={isModalAlertLimit}
                handleDeleteData={handleDeleteData}
              />
            ) : (
              <ItemFormUrl
                key={key}
                dataForm={dataForm}
                handleDataSet={(e) => handleDataSet(e)}
                index={index}
                labelArray={labelArray}
                value={value}
                handleModalAlert={({ index, subindex }) =>
                  handleModalAlert({ index, subindex })
                }
                isProUser={isProUser}
                handleData={handleData}
                user={user}
                handleSwitch={handleSwitch}
                handleAddData={handleAddData}
                handleDataNetworks={handleDataNetworks}
                setModalIcons={setModalIcons}
                itemUrlKey={itemUrlKey}
                itemUrlSelected={itemUrlSelected}
                handleModalIcons={handleModalIcons}
                isModalIcons={isModalIcons}
                handleDeleteData={handleDeleteData}
              />
            );
          } else {
            return value[0] == 'phones' || value[0] == 'emails' ? (
              <ItemFormBasicInfo
                key={key}
                dataForm={dataForm}
                handleDataSet={(e) => handleDataSet(e)}
                index={index}
                labelArray={labelArray}
                value={value}
                itemDetail={itemDetail}
                isDetailOpen={isDetailOpen}
                social={true}
                handleModalAlert={({ index, subindex }) =>
                  handleModalAlert({ index, subindex })
                }
                isProUser={isProUser}
                handleData={handleData}
                user={user}
                handleSwitch={handleSwitch}
                handleAddData={handleAddData}
                handleModalAlertLimit={handleModalAlertLimit}
                isModalAlertLimit={isModalAlertLimit}
                handleDeleteData={handleDeleteData}
              />
            ) : value[0] == 'urls' ? (
              <ItemFormUrl
                key={key}
                dataForm={dataForm}
                handleDataSet={(e) => handleDataSet(e)}
                index={index}
                labelArray={labelArray}
                value={value}
                handleModalAlert={({ index, subindex }) =>
                  handleModalAlert({ index, subindex })
                }
                isProUser={isProUser}
                handleData={handleData}
                user={user}
                handleSwitch={handleSwitch}
                handleAddData={handleAddData}
                handleDataNetworks={handleDataNetworks}
                setModalIcons={setModalIcons}
                itemUrlKey={itemUrlKey}
                itemUrlSelected={itemUrlSelected}
                handleModalIcons={handleModalIcons}
                isModalIcons={isModalIcons}
                handleDeleteData={handleDeleteData}
              />
            ) : null;
          }
        }
      })}
    </SafeAreaView>
  );
};

export default FormAddDataUser;