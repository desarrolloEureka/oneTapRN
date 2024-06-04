import { useCallback, useEffect, useState } from 'react';
import {
  CareerDataFormValues,
  DataFormSorted,
  DataFormValues,
  EducationDataFormValues,
  IndexDataForm,
  UrlDataFormValues,
  handleDataProps,
  handleDataNetworksProps,
  NetworksSubIndexDataForm,
  SocialDataForm,
} from '../../../../../../types/profile';
import { profile } from '../../../../../../initialData/profileInitialData';
import { GetUser, SendDataUserProfile } from '../../../../../../reactQuery/users';
import { validateEmail, validatePhoneNumber } from '../../../../../../globals/validateData';

const ProfileHook = ({
  handleDataSet,
  isProUser
}: {
  handleDataSet?: (e: SocialDataForm) => void;
  isProUser: boolean;
}) => {
  const { data, error } = GetUser();
  const [dataForm, setDataForm] = useState<SocialDataForm>(profile.social);
  const [objectDataSort, setObjectDataSort] = useState<[string, any][]>([]);
  const [allChecked, setAllChecked] = useState(false);
  const [isModalAlertLimit, setIsModalAlertLimit] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalAlert, setIsModalAlert] = useState(false);
  const [isSuccessDelete, setSuccessDelete] = useState(false);
  const [isModalIcons, setModalIcons] = useState(false);
  const [itemUrlSelected, setItemUrlSelected] = useState([]);
  const [itemUrlKey, setItemUrlKey] = useState(0);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [itemDetail, setItemDetail] = useState(0);
  const [isAlertSave, setIsAlertSave] = useState(false);
  const [isChangeData, setIsChangeData] = useState(false);

  const [isAlertEmptyData, setIsEmptyData] = useState(false);
  const [isAlertEmptyDataAll, setIsEmptyDataAll] = useState(false);

  /* Delete items */
  const [itemDelete, setItemDelete] = useState<
    { index: string; subindex: string } | {}
  >();

  const [isDataSuccess, setIsDataSuccess] = useState(false);
  const [isDataError, setIsDataError] = useState(false);
  const [isDataLoad, setIsDataLoad] = useState(false);
  const [noDeleted, setNoDeleted] = useState(false);
  const [isEmailPhoneRight, setisEmailPhoneRight] = useState(false);
  const [status, setStatus] = useState<string>('');
  const [flag, setFlag] = useState(false);

  /* Propios */
  const [isLoadingSendData, setIsLoadingSendData] = useState(false);
  const [switchValue, setSwitchValue] = useState(false);
  const [navigationItem, setNavigationItem] = useState('');


  const handleSendProfile = async (isProUser: boolean) => {
    const userId = data?.uid;

    setIsLoadingSendData(true);
    if (userId) {
      const isSendDataProfile = await SendDataUserProfile(userId, dataForm, false);
      if (isSendDataProfile?.success) {
        setIsChangeData(false);
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

  /* const handleSendProfile = async (isProUser: boolean) => {
    const userId = data?.uid;
    const emails = dataForm?.emails?.map((email) => email.text);
    const phones = dataForm?.phones?.map((phone) => phone.text);
    const urls = dataForm?.urls?.map((urls) => urls);

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

    setIsLoadingSendData(true);
    if (userId) {
      const isSendDataProfile = await SendDataUserProfile(userId, dataForm, isProUser);
      if (isSendDataProfile?.success) {
        setIsChangeData(false);
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
  }; */

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
    //setIsAlertSave(true);
    setIsChangeData(true);
    const isChecked = checked;
    const dataFormClone = { ...dataForm };
    const index = name as keyof typeof dataFormClone;
    if (
      index != 'phones' &&
      index != 'emails' &&
      index != 'urls' &&
      (dataFormClone[index]?.label != 'phones' ||
        dataFormClone[index]?.label != 'education' ||
        dataFormClone[index]?.label != 'emails' ||
        dataFormClone[index]?.label != 'professional_career' ||
        dataFormClone[index]?.label != 'urls')
    ) {
      if (dataFormClone[index]?.text?.length === 0 && !isChecked) {
        setIsEmptyData(true);
      } else {
        dataFormClone[index]!.checked = !isChecked;
        setDataForm(dataFormClone);
      }

    } else {
      let dataAux = dataFormClone[index] as DataFormValues[];
      let dataUrl = dataFormClone[index] as UrlDataFormValues[];

      if (dataAux && subindex != undefined) {

        if (!isChecked && dataAux[subindex]) {
          const isEmptyText = dataAux[subindex].text?.length === 0 && index !== 'urls';
          const isEmptyUrls = index === 'urls' && (dataUrl[subindex]?.name?.length === 0 || dataUrl[subindex]?.url?.length === 0 || dataUrl[subindex]?.icon?.length === 0);

          if (isEmptyText || isEmptyUrls) {
            setIsEmptyData(true);
          } else {
            dataAux[subindex].checked = !isChecked;
            currentDataRef.current.length > 0 &&
              (currentDataRef.current[subindex].checked = !isChecked);
            setDataForm(dataFormClone);
          }
        } else {
          dataAux[subindex].checked = !isChecked;
          currentDataRef.current.length > 0 &&
            (currentDataRef.current[subindex].checked = !isChecked);
          setDataForm(dataFormClone);
        }
      }
    }
  };

  const fillFields = (
    index: IndexDataForm,
    key: number,
    text: string,
    subindexUrl?: NetworksSubIndexDataForm
  ) => {
    const dataFormClone = { ...dataForm };
    dataFormClone &&
      index == 'urls' &&
      subindexUrl &&
      (dataFormClone[index]![key][subindexUrl] = text);

    setDataForm(dataFormClone);
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
    key != undefined && subindex && fillFields(index, key, text, subindex);
    setTimeout(() => {
      setModalIcons(!isModalIcons);
    }, 500);
  };

  const handleData = ({
    name,
    text,
    subindex,
    key,
    currentDataRef,
  }: handleDataProps) => {
    setIsChangeData(true);
    const dataFormClone = { ...dataForm };
    const index = name as keyof typeof dataFormClone;
    if (
      index == 'name' ||
      index == 'last_name' ||
      index == 'profession' ||
      index == 'occupation' ||
      index == 'address'
    ) {
      dataFormClone[index]!.text = text;
      currentDataRef.current.text = text;
      setDataForm(dataFormClone);
      setIsDataLoad(true);
    } else {
      if (index == 'phones' || index == 'emails') {
        const dataAux = dataFormClone[index];
        if (dataAux && key != undefined) {
          dataAux[key].text = text;
          currentDataRef.current.length > 0 &&
            (currentDataRef.current[key].text = text);
          dataAux && setDataForm(dataFormClone);
        }
        setIsDataLoad(true);
      } else if (
        index == 'urls' &&
        (subindex == 'name' || subindex == 'url' || subindex == 'icon') &&
        key != undefined
      ) {
        currentDataRef.current[key][subindex] = text;
        fillFields(index, key, text, subindex);
      }
    }
  };

  const handleDeleteData = async () => {
    setIsChangeData(true);
    setIsDataLoad(false);
    const index =
      itemDelete && 'index' in itemDelete ? itemDelete['index'] : undefined;
    const subindex =
      itemDelete && 'subindex' in itemDelete
        ? itemDelete['subindex']
        : undefined;
    const dataFormClone = { ...dataForm };
    const dataAux: any = dataFormClone[index as keyof typeof dataForm];

    if (dataAux?.length > 1 && Array.isArray(dataAux) && subindex !== undefined) {
      dataAux.splice(parseInt(subindex, 10), 1); // Elimina el elemento en la posición subindex
      await setDataForm(dataFormClone);

      setTimeout(() => {
        setIsModalAlert(false);
        setSuccessDelete(true);
      }, 500);
    } else {
      //setNoDeleted(true);
      if (subindex !== undefined && subindex) {
        if (dataAux[subindex].label === "urls") {
          dataAux[subindex] = {
            label: 'urls',
            name: '',
            url: '',
            icon: '',
            checked: false,
            principal: true,
            social: false,
            professional: false,
            order: 13,
          };
          setDataForm(dataFormClone);
        } else if (dataAux[subindex].label === "emails") {
          dataAux[subindex] = {
            label: 'emails',
            text: '',
            checked: false,
            principal: true,
            social: true,
            professional: false,
            icon: 'EmailOutlinedIcon',
            order: 10,
          };
          setDataForm(dataFormClone);
        } else if (dataAux[subindex].label === "phones") {
          dataAux[subindex] = {
            label: 'phones',
            text: '',
            checked: false,
            principal: true,
            social: true,
            professional: false,
            icon: 'LocalPhoneOutlinedIcon',
            order: 9,
          };
          setDataForm(dataFormClone);
        }

        setTimeout(() => {
          setIsModalAlert(false);
          setSuccessDelete(true);
        }, 700);
      }
    }
  };

  const handleAddData = (index: string) => {
    const dataFormClone = { ...dataForm };
    if (index == 'phones' || index == 'emails' || index == 'urls') {
      const count = dataFormClone?.[index]?.length;
      if (index === 'phones') {
        if ((count != null || count != undefined) && count < 3) {
          if (count === 0) {
            dataFormClone.phones = [
              {
                label: "Teléfono",
                text: '',
                checked: false,
                principal: false,
                social: true,
                professional: true,
                icon: 'LocalPhoneOutlinedIcon',
                order: 9,
              },
            ];
          } else {
            dataFormClone[index]?.unshift({
              label: dataFormClone[index]![0].label,
              text: '',
              checked: false,
              principal: false,
              social: true,
              professional: true,
              icon: 'LocalPhoneOutlinedIcon',
              order: 9,
            });
          }
        } else {
          setIsModalAlertLimit(true);
        }
      }

      if (index === 'emails') {
        if ((count != null || count != undefined) && count < 3) {
          if (count === 0) {
            dataFormClone.phones = [
              {
                label: "Correo",
                text: '',
                checked: false,
                principal: false,
                social: true,
                professional: true,
                icon: 'EmailOutlinedIcon',
                order: 10,
              },
            ];
          } else {
            dataFormClone[index]?.unshift({
              label: dataFormClone[index]![0].label,
              text: '',
              checked: false,
              principal: false,
              social: true,
              professional: true,
              icon: 'EmailOutlinedIcon',
              order: 10,
            });
          }
        } else {
          setIsModalAlertLimit(true);
        }
      }
      if (index === 'urls') {
        //if ((count != null || count != undefined) && count < 3) {
        if (count === 0) {
          dataFormClone.urls = [
            {
              label: 'urls',
              name: '',
              url: '',
              icon: '',
              checked: false,
              principal: false,
              social: true,
              professional: true,
              order: 13,
            },
          ];
        } else {
          dataFormClone[index]?.unshift({
            label: dataFormClone[index]![0].label,
            name: '',
            url: '',
            icon: '',
            checked: false,
            principal: false,
            social: true,
            professional: true,
            order: 13,
          });
        }
      }
      setDataForm(dataFormClone);
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
      if (checked === true) {
        if (label === 'urls') {
          let urlData = el as UrlDataFormValues;
          if (urlData.name !== "" && urlData.icon !== "" && urlData.url !== "") {
            el.checked = checked;
            el.label = label ?? el.label;
          } else {
            setIsEmptyDataAll(true);
          }
        } else if (label === 'emails' || label === 'phones') {
          let textData = el as DataFormValues;
          if (textData.text !== "") {
            textData.checked = checked;
            textData.label = label;
          } else {
            setIsEmptyDataAll(true);
          }
        } else if (label === 'education') {
          let textData = el as EducationDataFormValues;
          if (textData.title !== "" && textData.institution !== "" && textData.year !== "") {
            el.checked = checked;
            el.label = label ?? el.label;
          } else {
            setIsEmptyDataAll(true);
          }
        } else if (label === 'professional_career') {
          let textData = el as CareerDataFormValues;
          if (textData.company !== "" && textData.position !== "" && textData.data_init !== "" && textData.data_end !== "") {
            el.checked = checked;
            el.label = label ?? el.label;
          } else {
            setIsEmptyDataAll(true);
          }
        }
      } else {
        el.checked = checked;
        el.label = label ?? el.label;
      }
    });
    return [value, data];
  };

  const checkedItem = (
    data: DataFormValues,
    value: string,
    checked?: boolean,
    label?: string
  ) => {
    if (checked === true) {
      if (data && data.text != '') {
        data.checked = checked;
        data.label = label ?? data.label;
      } else {
        setIsEmptyDataAll(true);
      }
    } else {
      data.checked = checked;
      data.label = label ?? data.label;
    }
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

  const handleSwitchAll = (val: any) => {
    //setIsAlertSave(true);
    setIsChangeData(true);
    setSwitchValue(!switchValue);
    const isChecked = val?.checked;
    const dataFormClone = { ...dataForm };
    const items = Object.entries(dataFormClone);

    const newData = items.map((value) => {
      if (value[0] == 'phones' || value[0] == 'emails') {
        const data = value[1] as DataFormValues[];
        return checkedItems(data, value[0], !isChecked, value[0]);
      } else if (value[0] == 'education') {
        const data = value[1] as EducationDataFormValues[];
        return checkedItems(data, value[0], !isChecked, value[0]);
      } else if (value[0] == 'professional_career') {
        const data = value[1] as CareerDataFormValues[];
        return checkedItems(data, value[0], !isChecked, value[0]);
      } else if (value[0] == 'urls') {
        const data = value[1] as UrlDataFormValues[];
        return checkedItems(data, value[0], !isChecked, value[0]);
      } else {
        const data = value[1] as DataFormValues;
        return checkedItem(data, value[0], !isChecked, value[0]);
      }
    });

    const dataFormChecked = Object.fromEntries(newData);
    handleDataSet && handleDataSet(dataFormChecked);
    setAllChecked(true);
  };

  useEffect(() => {
    const data = Object.entries(dataForm as DataFormSorted).sort((a, b) => {
      const aa = a[1].length ? a[1][0].order : a[1].order;
      const bb = b[1].length ? b[1][0].order : b[1].order;
      return aa - bb;
    });
    setObjectDataSort(data);
  }, [dataForm, isProUser]);


  /* 
    useEffect(() => {
    const data = Object.entries(dataForm as DataFormSorted).map(([key, value]): [string, any] => {
      // Cambiar el label a español
      const newValue = Array.isArray(value)
        ? value.map(item => ({ ...item, label: validLabel(key) }))
        : { ...value, label: validLabel(key) };
      return [key, newValue];
    }).sort((a, b) => {
      const aa = Array.isArray(a[1]) ? a[1][0].order : a[1].order;
      const bb = Array.isArray(b[1]) ? b[1][0].order : b[1].order;
      return aa - bb;
    });

    //console.log('DataSort ', data);
    setObjectDataSort(data);
  }, [dataForm, isProUser]);
  
  */

  useEffect(() => {
    setFlag(true);
    setTimeout(() => {
      setFlag(false);
    }, 1000);
  }, [dataForm]);

  useEffect(() => {
    let myDataForm = null;
    if (data?.profile) {
      myDataForm = data.profile.social ?? profile.social;
    } else {
      myDataForm = profile.social;
    }
    myDataForm && setDataForm(myDataForm);
  }, [data, isProUser]);



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
    handleModalAlertLimit,
    isAlertSave,
    isAlertEmptyData,
    setIsEmptyData,
    isAlertEmptyDataAll,
    setIsEmptyDataAll,
    setIsAlertSave,
    isChangeData,
    setIsChangeData,
    navigationItem,
    setNavigationItem
  };
};

export default ProfileHook;