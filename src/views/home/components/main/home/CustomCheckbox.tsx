import React, { useRef, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { RadioButton } from 'react-native-paper';

import { TemplateData, UserData } from '../../../../../types/user';
import { TemplateTypes } from '../../../../../types/home';
import { SendTemplateSelected } from '../../../../../reactQuery/users';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useQueryClient } from '@tanstack/react-query';

interface TemplateType {
    id: string;
    name: string;
    image: string;
}

interface BackgroundType {
    id: string;
    name: string;
    image: string;
}

const CustomCheckbox = ({
    uid,
    value,
    optionSelected,
    setTemplateSelect,
    handleSelectBackground,
    templates,
    checked,
    selectedTemplate,
    handleModal,
}: {
    uid?: string;
    value: any;
    optionSelected: TemplateTypes;
    setTemplateSelect?: (e: TemplateType) => void;
    handleSelectBackground?: (e: BackgroundType) => void;
    templates?: TemplateData[];
    checked: boolean;
    selectedTemplate?: string;
    handleModal?: () => void;
}) => {
    const queryClient = useQueryClient();
    const [isUpdate, setIsUpdate] = useState(false);
    const [fakeData, setFakeData] = useState(templates || []);
    const [isChecked, setIsChecked] = useState(checked ? checked : false);

    const handleSaveTemplate = async (background_id: string) => {

    };

    const handleSelectTemplate = async () => {
        console.log("handleSelectTemplate");
        if (handleSelectBackground) {
            /* Logica para fondos */
        } else {
            const userId = uid;
            console.log("value.id ---> ", value.id);
            console.log("userId ---> ", userId);
            if (userId && fakeData.length > 0) {
                const fakeDataClone = [...fakeData];
                const fakeDataCloneFilter = fakeDataClone.filter(
                    (val) => val.type !== optionSelected
                );
                fakeDataCloneFilter.push({
                    type: optionSelected,
                    id: value.id,
                    checked: true,
                });
                setFakeData(fakeDataCloneFilter);
                await SendTemplateSelected(userId, fakeDataCloneFilter, queryClient);
                setIsUpdate(!isUpdate);
            }
        }
    };

    return (
        <TouchableOpacity
            onPress={handleSelectTemplate}
            disabled={isChecked}
            style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}
        >
            <Ionicons
                name={isChecked ? 'radio-button-on-outline' : 'radio-button-off-outline'}
                size={19}
                color={'white'}
            />
        </TouchableOpacity>
    );
};

export default CustomCheckbox;