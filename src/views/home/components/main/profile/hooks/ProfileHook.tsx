import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import {
  CareerDataFormValues,
  DataForm,
  DataFormValues,
  EducationDataFormValues,
  UrlDataFormValues,
  handleDataProps
} from '../../../../../../types/profile';

const ProfileHook = ({
  dataForm,
  setDataForm
}: {
  dataForm: DataForm;
  setDataForm?: (e: DataForm) => void;
}) => {
  const [allChecked, setAllChecked] = useState(false);
  const [isModalAlertLimit, setIsModalAlertLimit] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalAlert, setIsModalAlert] = useState(false);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [itemDetail, setItemDetail] = useState(0);
  const [itemDelete, setItemDelete] = useState('');

  const handleDataSet = useCallback((data: DataForm) => {
    if (setDataForm)
      setDataForm(data);

  }, [setDataForm]);

  const handleModalAlertLimit = (isOpen: boolean) => {
    setIsModalAlertLimit(isOpen);
  };

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleModalAlert = (name: string) => {
    if (!isModalAlert) {
      setItemDelete(name);
    } else {
      setItemDelete('');
    }

    setIsModalAlert(!isModalAlert);
  };

  const handleModalAux = () => {
    setIsModalAlert(!isModalAlert);
  };

  const handleSeeMore = (numItem: number) => {
    if (itemDetail != 0) {
      setItemDetail(0);
    } else {
      setItemDetail(numItem);
    }
  };

  const handleSwitch = (value: ChangeEvent<HTMLInputElement>) => {

  };

  const handleData = ({ name, text, subindex }: handleDataProps) => {
    const dataFormClone = { ...dataForm };
    const index = name as keyof typeof dataFormClone;
    if (
      index != 'phones' &&
      index != 'education' &&
      index != 'emails' &&
      index != 'urls' &&
      index != 'professional_career'
    ) {
      dataFormClone[index]!.text = text;
      handleDataSet(dataFormClone);
    } else {
      if (index == 'phones' || index == 'emails') {
        const dataAux = dataFormClone[index];
        dataAux?.map((val) => {
          val.text = text;
          handleDataSet(dataFormClone);
        });
      } else if (index == 'education') {
        /* const dataAux = dataFormClone[index];
        //const EducationDataFormValuesClone = { ...EducationDataFormValues };
        const key = subindex as keyof typeof EducationDataFormValues
        if (subindex) {

          console.log("subindex ", subindex);
          console.log("dataAux ", dataAux);
          dataAux?.map((val) => {
            val[key] = text;
            handleDataSet(dataFormClone);
          });
        } */
      } else {
        //console.log("professional_career");
      }
    }
  };

  const handleDeleteData = ({ name }: { name: string }) => {

  };

  const handleAddData = (index: keyof typeof dataFormClone, social: boolean) => {

    console.log("Llegue handleAddData ");
    const dataFormClone = { ...dataForm };

    if (
      index == 'phones' ||
      index == 'education' ||
      index == 'emails' ||
      index == 'urls' ||
      index == 'professional_career'
    ) {
      const countProfessional = dataFormClone[index]?.filter((item: any) => item.professional).length;
      const countSocial = dataFormClone[index]?.filter((item: any) => item.social).length;
      const count = social ? countSocial : countProfessional;

      if (index === 'phones') {
        if (count && count < 3) {
          dataFormClone[index]?.push({
            label: 'Teléfono',
            text: '',
            checked: false,
            principal: false,
            social: social,
            professional: !social,
            icon: 'phone'
          });
        }
      }
      if (index === 'emails') {
        if (count && count < 3) {
          dataFormClone[index]?.push({
            label: 'Correo',
            text: '',
            checked: false,
            principal: false,
            social: social,
            professional: !social,
            icon: 'email-outline'
          });
        }
      }
      if (index === 'education') {
        if (count && count < 3) {
          dataFormClone[index]?.push({
            label: 'Educación y formación académica',
            title: '',
            institution: '',
            year: '',
            checked: false,
            principal: false,
            social: social,
            professional: !social,
            icon: ''
          });
        }
      }
      if (index === 'professional_career') {
        if (count && count < 3) {
          dataFormClone[index]?.push({
            label: 'Profesión',
            company: '',
            position: '',
            data_init: '',
            data_end: '',
            checked: false,
            principal: false,
            social: social,
            professional: !social,
            icon: ''
          });
        }
      }
      if (index === 'urls') {
        if (count && count < 3) {
          dataFormClone[index]?.push({
            label: 'URL',
            name: '',
            url: '',
            icon: '',
            checked: false,
            principal: false,
            social: social,
            professional: !social,
          });
        }
      }
      if (count && count >= 3) {
        handleModalAlertLimit(true);
      }

      handleDataSet(dataFormClone);
    }
  };

  const checkedItems = (
    data: DataFormValues[] | EducationDataFormValues[] | CareerDataFormValues[],
    value: string,
    checked?: boolean,
    label?: string
  ) => {
    data.map((el) => {
      el.checked = checked;
      el.label = label ?? el.label;
    });
    return [value, data];
  };

  const checkedItem = (
    data: DataFormValues,
    value: string,
    checked?: boolean,
    label?: string
  ) => {
    data.checked = checked;
    data.label = label ?? data.label;
    return [value, data];
  };

  const validLabel = useCallback(
    (key: string) => {
      let label = '';
      switch (key) {
        case 'name':
          label = "Nombres";
          break;
        case 'last_name':
          label = "Apellidos";
          break;
        case 'profession':
          label = "Profesión";
          break;
        case 'occupation':
          label = "Ocupación";
          break;
        case 'address':
          label = "Dirección";
          break;
        case 'company':
          label = "Empresa";
          break;
        case 'position':
          label = "Cargo";
          break;
        case 'professional_profile':
          label = "Perfil Profesional";
          break;
        case 'other_competencies':
          label = "Otras Competencias";
          break;
        case 'skills':
          label = "Habilidades";
          break;
        case 'languages':
          label = "Idiomas";
          break;
        case 'achievements_recognitions':
          label = "Logros y reconocimientos";
          break;
      }
      return label;
    },
    []
  );

  const handleSwitchAll = (value: ChangeEvent<HTMLInputElement>) => {

  };

  useEffect(() => {
    if (dataForm?.name?.label == '') {
      const dataFormClone = { ...dataForm };
      const items = Object.entries(dataFormClone);
      const newData = items.map((value) => {
        if (value[0] == 'phones') {
          const data = value[1] as DataFormValues[];
          return checkedItems(
            data,
            value[0],
            false,
            "Telefono"
          );
        } else if (value[0] == 'emails') {
          const data = value[1] as DataFormValues[];
          return checkedItems(
            data,
            value[0],
            false,
            "Correo"
          );
        } else if (value[0] == 'education') {
          const data = value[1] as EducationDataFormValues[];
          return checkedItems(
            data,
            value[0],
            false,
            "Educacion"
          );
        } else if (value[0] == 'professional_career') {
          const data = value[1] as CareerDataFormValues[];
          return checkedItems(
            data,
            value[0],
            false,
            "Profesion"
          );
        } else if (value[0] == 'urls') {
          const data = value[1] as UrlDataFormValues[];
          return checkedItems(
            data,
            value[0],
            false,
            "urls"
          );
        } else {
          const data = value[1] as DataFormValues;
          const label = validLabel(value[0]);
          return checkedItem(data, value[0], false, label);
        }
      });
      const dataFormChecked = Object.fromEntries(newData);
      handleDataSet(dataFormChecked);
    }
  }, [dataForm, handleDataSet, validLabel]);

  useEffect(() => {
    if (allChecked && dataForm) {
      const dataFormClone = { ...dataForm };
      handleDataSet(dataFormClone);
      setAllChecked(false);
    }
  }, [allChecked, dataForm, handleDataSet]);

  return {
    handleSwitch,
    handleData,
    handleAddData,
    handleSwitchAll,
    data: dataForm && Object.entries(dataForm),
    handleDeleteData,
    handleModalAux,
    handleModal,
    handleModalAlert,
    handleSeeMore,
    handleDataSet,
    isDetailOpen,
    itemDetail,
    isModalOpen,
    isModalAlert,
    itemDelete,
    isModalAlertLimit,
    handleModalAlertLimit
  };
};

export default ProfileHook;