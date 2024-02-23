import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import {
  CareerDataFormValues,
  DataForm,
  DataFormValues,
  EducationDataFormValues,
  IndexDataForm,
  EducationSubIndexDataForm,
  CareerSubIndexDataForm,
  UrlDataFormValues,
  handleDataProps,
  handleDataNetworksProps,
  NetworksSubIndexDataForm,
} from '../../../../../../types/profile';
import { profile } from '../../../../../../initialData/profileInitialData';
import { GetUser, SendDataUserProfile } from '../../../../../../reactQuery/users';
import { validateEmail, validatePhoneNumber } from '../../../../../../globals/validateData';

const ProfileHook = ({
  handleDataSet,
}: {
  handleDataSet?: (e: DataForm) => void;
}) => {
  const { data, error } = GetUser();
  const dataProfile = (data?.profile ?? {}) as DataForm;
  const [dataForm, setDataForm] = useState<DataForm>(
    dataProfile.name ? dataProfile : (profile as DataForm)
  );

  const objectDataSort = Object.entries(dataForm).sort((a, b) => {
    const aa = a[1].length ? a[1][0].order : a[1].order;
    const bb = b[1].length ? b[1][0].order : b[1].order;
    return aa - bb;
  });

  const [allChecked, setAllChecked] = useState(false);
  const [isModalAlertLimit, setIsModalAlertLimit] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalAlert, setIsModalAlert] = useState(false);
  const [isSuccessDelete, setSuccessDelete] = useState(false);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [itemDetail, setItemDetail] = useState(0);
  const [itemDelete, setItemDelete] = useState<{ index: string; subindex: string } | {}>();
  const [isDataSuccess, setIsDataSuccess] = useState(false);
  const [isDataError, setIsDataError] = useState(false);
  const [isDataLoad, setIsDataLoad] = useState(false);
  const [switchValue, setSwitchValue] = useState(false);
  const [isLoadingSendData, setIsLoadingSendData] = useState(false);
  //Modal Iconos
  const [isModalIcons, setModalIcons] = useState(false);
  const [itemUrlSelected, setItemUrlSelected] = useState([]);
  const [itemUrlKey, setItemUrlKey] = useState(0);
  // Errores
  const [isEmailPhoneRight, setisEmailPhoneRight] = useState(false);
  const [status, setStatus] = useState<string>('');
  const [noDeleted, setNoDeleted] = useState(false);

  const handleSendProfile = async (isProUser: boolean) => {
    const userId = data?.uid;
    const emails = dataForm?.emails?.map((email) => email.text);
    const phones = dataForm?.phones?.map((phone) => phone.text);
    const urls = dataForm?.urls?.map((urls) => urls);
    const education = dataForm?.education?.map((education) => education);
    const professionalCareer = dataForm?.professional_career?.map((proCareer) => proCareer);

    if (emails) {
      const isEmailValid = emails.every((email) => validateEmail(email as string));
      if (!isEmailValid) {
        setStatus("El correo no es valido ó no se pueden dejar espacios en blanco");
        setisEmailPhoneRight(true);
        return;
      }
    }
    if (phones) {
      const isPhoneValid = phones.every((phone) => validatePhoneNumber(phone as string));
      if (!isPhoneValid) {
        setStatus("El teléfono no es valido ó no se pueden dejar espacios en blanco");
        setisEmailPhoneRight(true);
        return;
      }
    }

    if (urls) {
      const allObjectsFilled = dataForm?.urls?.every(obj => obj.name !== "" && obj.url !== "" && obj.icon !== "");
      if (!allObjectsFilled) {
        setStatus("No se pueden dejar espacios en blanco en urls");
        setisEmailPhoneRight(true);
        return;
      }
    }

    if (isProUser && education) {
      const allObjectsFilled = dataForm?.education?.every(obj => obj.title !== "" && obj.institution !== "" && obj.year !== "");
      if (!allObjectsFilled) {
        setStatus("No se pueden dejar espacios en blanco en educación");
        setisEmailPhoneRight(true);
        return;
      }
    }

    if (isProUser && professionalCareer) {
      const allObjectsFilled = dataForm?.professional_career?.every(obj => obj.company !== "" && obj.position !== "" && obj.data_init !== "" && obj.data_end !== "");
      if (!allObjectsFilled) {
        setStatus("No se pueden dejar espacios en blanco en trayectoria");
        setisEmailPhoneRight(true);
        return;
      }
    }

    setIsLoadingSendData(true);
    if (userId) {
      const isSendDataProfile = await SendDataUserProfile(userId, dataForm);
      if (isSendDataProfile?.success) {
        setIsDataError(false);
        setIsDataSuccess(true);
        setIsLoadingSendData(false);
      } else {
        setIsDataError(true);
        setIsDataSuccess(false);
        setIsLoadingSendData(false);
      }
    } else {
      setIsLoadingSendData(false);
    }
  };

  const handleModalAlert = (itemDelete: { index: string; subindex: string }) => {
    if (!isModalAlert) {
      setItemDelete(itemDelete);
    } else {
      setItemDelete('');
    }
    setIsModalAlert(!isModalAlert);
  };

  const handleSuccessDelete = () => {
    setSuccessDelete(!isSuccessDelete);
  };

  const handleModalIcons = (item: any, key: any) => {
    setItemUrlSelected(item ? item : []);
    setItemUrlKey(key);
    setModalIcons(!isModalIcons);
  };

  const handleModalAux = () => {
    setIsModalAlert(!isModalAlert);
    setNoDeleted(!noDeleted);
  };

  const handleSeeMore = (numItem: number) => {
    if (itemDetail != 0) {
      setItemDetail(0);
    } else {
      setItemDetail(numItem);
    }
  };

  const handleSwitch = ({
    currentDataRef,
    checked,
    name,
    subindex
  }: {
    currentDataRef?: any;
    checked?: boolean;
    name?: string
    subindex?: number
  }) => {
    const isChecked = checked;
    const dataFormClone = { ...dataForm };
    const index = name as keyof typeof dataFormClone;
    if (
      index != 'phones' &&
      index != 'education' &&
      index != 'emails' &&
      index != 'professional_career' &&
      index != 'urls'
    ) {
      dataFormClone[index]!.checked = !isChecked;
      handleDataSet && handleDataSet(dataFormClone);
    } else {
      let dataAux = dataFormClone[index];
      if (dataAux && subindex != undefined && dataAux[subindex].checked != undefined) {
        dataAux[subindex].checked = !isChecked;
        currentDataRef.current[subindex].checked = !isChecked;
        handleDataSet && handleDataSet(dataFormClone);
      }
    }
  };

  const fillFields = (
    index: IndexDataForm,
    key: number,
    text: string,
    subindexEducation?: EducationSubIndexDataForm,
    subindexCareer?: CareerSubIndexDataForm,
    subindexUrl?: NetworksSubIndexDataForm
  ) => {
    const dataFormClone = { ...dataForm };
    dataFormClone && index == 'education' && subindexEducation
      ? (dataFormClone[index]![key][subindexEducation] = text)
      : index == 'professional_career'
        ? subindexCareer && (dataFormClone[index]![key][subindexCareer] = text)
        : index == 'urls' &&
        subindexUrl &&
        (dataFormClone[index]![key][subindexUrl] = text);

    handleDataSet && handleDataSet(dataFormClone);
    setIsDataLoad(true);
  };

  const handleDataNetworks = ({
    name,
    text,
    subindex,
    key,
  }: handleDataNetworksProps) => {
    const dataFormClone = { ...dataForm };
    const index = name as keyof typeof dataFormClone;
    key != undefined &&
      subindex &&
      fillFields(index, key, text, undefined, undefined, subindex);
  };

  const handleData = async ({
    name,
    text,
    subindex,
    key,
    currentDataRef,
  }: handleDataProps) => {
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
      currentDataRef.current.text = text;
      handleDataSet && handleDataSet(dataFormClone);
      setIsDataLoad(true);
    } else {
      if (index == 'phones' || index == 'emails') {
        const dataAux = dataFormClone[index];
        if (dataAux && key != undefined) {
          dataAux[key]!.text = text;
          await dataAux && handleDataSet && handleDataSet(dataFormClone);
        }
      } else if (
        index == 'education' &&
        (subindex == 'title' ||
          subindex == 'year' ||
          subindex == 'institution') &&
        key != undefined
      ) {
        currentDataRef.current[key][subindex] = await text;
        await fillFields(index, key, text, subindex);
      } else if (
        index == 'professional_career' &&
        (subindex == 'company' ||
          subindex == 'data_end' ||
          subindex == 'data_init' ||
          subindex == 'position') &&
        key != undefined
      ) {
        currentDataRef.current[key][subindex] = await text;
        await fillFields(index, key, text, undefined, subindex);
      } else if (
        index == 'urls' &&
        (subindex == 'name' || subindex == 'url' || subindex == 'icon') &&
        key != undefined
      ) {
        currentDataRef.current[key][subindex] = await text;
        await fillFields(index, key, text, undefined, undefined, subindex);
      }
    }
  };

  const handleDeleteData = () => {
    setIsDataLoad(false);

    const index = itemDelete && 'index' in itemDelete ? itemDelete['index'] : undefined;
    const subindex = itemDelete && 'subindex' in itemDelete ? itemDelete['subindex'] : undefined;
    const dataFormClone = { ...dataForm };
    const dataAux = dataFormClone[index as keyof typeof dataForm];

    if (dataAux && dataAux?.length > 1 && Array.isArray(dataAux) && subindex !== undefined) {
      dataAux.splice(parseInt(subindex, 10), 1);
      handleDataSet && handleDataSet(dataFormClone);

      setTimeout(() => {
        setIsModalAlert(false);
        setSuccessDelete(true);
      }, 300);
    } else {
      setNoDeleted(true);
    }
  };

  const handleAddData = async (index: keyof typeof dataForm, social: boolean) => {
    const dataFormClone = { ...dataForm };

    if (
      index == 'phones' ||
      index == 'education' ||
      index == 'emails' ||
      index == 'urls' ||
      index == 'professional_career'
    ) {

      /* const countProfessional = await dataFormClone[index]?.filter(
        (item: any) => item.professional
      ).length;
      const countSocial = await dataFormClone[index]?.filter(
        (item: any) => item.social
      ).length;
      const count = await social ? countSocial : countProfessional; */

      const count = dataFormClone?.[index]?.length;

      if (index === 'phones' && (!count || count < 3)) {
        dataFormClone[index]?.unshift({
          label: dataFormClone[index]![0].label,
          text: '',
          checked: true,
          principal: false,
          social: social,
          professional: !social,
          icon: 'LocalPhoneOutlinedIcon',
          order: 9,
        });
      } else if (index === 'emails' && (!count || count < 3)) {
        dataFormClone[index]?.unshift({
          label: dataFormClone[index]![0].label,
          text: '',
          checked: true,
          principal: false,
          social: social,
          professional: !social,
          icon: 'EmailOutlinedIcon',
          order: 10,
        });
      } else if (index === 'education' && (!count || count < 3)) {
        dataFormClone[index]?.unshift({
          label: dataFormClone[index]![0].label,
          title: '',
          institution: '',
          year: '',
          checked: true,
          principal: false,
          social: social,
          professional: !social,
          icon: '',
          order: 11,
        });
      } else if (index === 'professional_career' && (!count || count < 3)) {
        dataFormClone[index]?.unshift({
          label: dataFormClone[index]![0].label,
          company: '',
          position: '',
          data_init: '',
          data_end: '',
          checked: true,
          principal: false,
          social: social,
          professional: !social,
          icon: '',
          order: 12,
        });
      } else if (index === 'urls') {
        dataFormClone[index]?.unshift({
          label: dataFormClone[index]![0].label,
          name: '',
          url: '',
          icon: '',
          checked: true,
          principal: false,
          social: social,
          professional: !social,
          order: 13,
        });
      } else {
        setIsModalAlertLimit(true);
      }

      handleDataSet && handleDataSet(dataFormClone);
    }
  };

  const handleModalAlertLimit = () => {
    setIsModalAlertLimit(false);
  }

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

  const handleSwitchAll = (val: any) => {
    setSwitchValue(!switchValue);

    const isChecked = val?.checked;
    const dataFormClone = { ...dataForm };
    const items = Object.entries(dataFormClone);

    const newData = items.map((value) => {
      if (value[0] == 'phones' || value[0] == 'emails') {
        const data = value[1] as DataFormValues[];
        return checkedItems(data, value[0], !isChecked);
      } else if (value[0] == 'education') {
        const data = value[1] as EducationDataFormValues[];
        return checkedItems(data, value[0], !isChecked);
      } else if (value[0] == 'professional_career') {
        const data = value[1] as CareerDataFormValues[];
        return checkedItems(data, value[0], !isChecked);
      } else if (value[0] == 'urls') {
        const data = value[1] as UrlDataFormValues[];
        return checkedItems(data, value[0], !isChecked);
      } else {
        const data = value[1] as DataFormValues;
        return checkedItem(data, value[0], !isChecked);
      }
    });

    const dataFormChecked = Object.fromEntries(newData);
    handleDataSet && handleDataSet(dataFormChecked);
    setAllChecked(true);
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
      handleDataSet && handleDataSet(dataFormChecked);
    }
  }, [dataForm, handleDataSet, validLabel]);

  useEffect(() => {
    if (allChecked && dataForm) {
      const dataFormClone = { ...dataForm };
      handleDataSet && handleDataSet(dataFormClone);
      setAllChecked(false);
    }
  }, [allChecked, dataForm, handleDataSet]);

  return {
    handleSwitch,
    handleData,
    handleDataNetworks,
    handleAddData,
    handleSwitchAll,
    data: objectDataSort,
    handleDeleteData,
    handleModalAux,
    handleModalAlert,
    handleSeeMore,
    isModalAlertLimit,
    isDetailOpen,
    itemDetail,
    isModalOpen,
    isModalAlert,
    isSuccessDelete,
    itemDelete,
    isDataSuccess,
    setIsDataSuccess,
    isDataError,
    setIsDataError,
    user: data,
    isDataLoad,
    dataForm,
    setDataForm,
    handleSendProfile,
    setIsModalAlert,
    handleSuccessDelete,
    switchValue,
    setSwitchValue,
    isLoadingSendData,
    setIsLoadingSendData,
    isModalIcons,
    setModalIcons,
    handleModalIcons,
    itemUrlSelected,
    itemUrlKey,
    status,
    isEmailPhoneRight,
    setisEmailPhoneRight,
    noDeleted,
    handleModalAlertLimit
  };
};

export default ProfileHook;