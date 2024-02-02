import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { TemplateData } from '../../../../../types/user';
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

    const handleSaveTemplate = async (background_id: string) => {
        if (!uid || !selectedTemplate || !templates) {
            return;
        }

        const updatedTemplates = templates.map(template => {
            if (template.id === selectedTemplate) {
                return { ...template, background_id };
            }
            return template;
        });

        await SendTemplateSelected(uid, updatedTemplates, queryClient);
    };

    const handleSelectTemplate = async () => {
        if (handleSelectBackground) {
            await handleSaveTemplate(value.id);
        } else {
            const userId = uid;
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
                await setFakeData(fakeDataCloneFilter);
                await SendTemplateSelected(userId, fakeDataCloneFilter, queryClient);
                await setIsUpdate(!isUpdate);
            } else {
                const fakeDataClone = [...fakeData];
                fakeDataClone.push({
                    type: optionSelected,
                    id: value.id,
                    checked: true,
                });
                await setFakeData(fakeDataClone);
                userId &&
                    (await SendTemplateSelected(userId, fakeDataClone, queryClient));
                await setIsUpdate(!isUpdate);
            }
        }
    };

    return (
        <TouchableOpacity
            onPress={handleSelectTemplate}
            disabled={checked}
            style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}
        >
            <Ionicons
                name={checked ? 'radio-button-on-outline' : 'radio-button-off-outline'}
                size={19}
                color={handleSelectBackground ? '#5278a0' : 'white'}
            />
        </TouchableOpacity>
    );
};

export default CustomCheckbox;