import { loginFirebase } from '../firebase/auth';
import { updateUserData, updateTemplateSelectedFirebase, updatePasswordFirebase, updateSwitchProfileFirebase, updateSwitchActivateCard } from '../firebase/user';

const SendDataImage = async (userId: string, base64String: string) => {
  await updateUserData(userId, { image: base64String });
};

const UpdatePassword = async (password: string) => {
  await updatePasswordFirebase(password);
};

const SendSwitchProfile = async (userId: string, switchState: boolean) => {
  await updateSwitchProfileFirebase(userId, { switch_profile: switchState });
};

const SendSwitchActivateCard = async (userId: string, switchState: boolean) => {
  await updateSwitchActivateCard(userId, { switch_activateCard: switchState });
};

const SendTemplateSelected = async (userId: string, backgroundSelect: string, templateSelect: string) => {
  const templateData = {
    template_id: templateSelect,
    background_id: backgroundSelect
  };

  await updateTemplateSelectedFirebase(userId, { templateData });
};

export { SendDataImage, UpdatePassword, SendSwitchProfile, SendSwitchActivateCard, SendTemplateSelected };