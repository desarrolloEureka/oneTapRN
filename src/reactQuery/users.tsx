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

  const GetLoginQuery = ({ user, password, sendLogin }: GetLoginQueryProps) => {
    const query = useQuery({
      queryKey: ['user'],
      queryFn: async () => {
        const resultUser = await loginFirebase({
          user: user!,
          password: password!,
        });
  
        if (resultUser && resultUser.user) {
          const docSnap = await getUserById(resultUser.user.uid);
          if (docSnap.exists()) {
            const user = docSnap.data() as UserDb;
            const getUser = userDataToSend(user, resultUser);
            console.log('getUser', getUser);
  
            localStorage.setItem('@user', JSON.stringify(getUser));
            return getUser;
          } else {
            return null;
          }
        } else {
          //create account if user not exist and exist in woocommerce
          return null;
        }
      },
      retry: false,
      enabled: sendLogin,
    });
    return query;
  };

  await updateTemplateSelectedFirebase(userId, { templateData });
};

export { SendDataImage, UpdatePassword, SendSwitchProfile, SendSwitchActivateCard, SendTemplateSelected };