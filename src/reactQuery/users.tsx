import { loginFirebase } from '../firebase/auth';
import {
  getAllUsers,
  getUserById,
  updateDataUserProfile,
  updatePasswordFirebase,
  updateSwitchActivateCard,
  updateSwitchAllFirebase,
  updateSwitchProfileFirebase,
  updateTemplateSelectedFirebase,
  updateUserData,
  updateInactiveUser
} from '../firebase/user';
import { useQuery } from '@tanstack/react-query';
import { UserData, TemplateData } from '../types/user';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GetLoginQueryProps } from '../types/userQuery';
import { DataForm } from '../types/profile';


const GetAllUserQuery = () => {
  const query = useQuery({
    queryKey: ['user'],
    queryFn: async () => await getAllUsers(),
    refetchOnWindowFocus: false,
  });
  return query;
};

const userDataToSend = (user: UserData, resultUser: any) => {
  user.uid = resultUser.user.uid;
  user.email = resultUser.user.email;
  user.emailVerified = resultUser.user.emailVerified;
  user.displayName = resultUser.user.name;
  user.isAdmin = user.is_admin;
  return user;
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
          const user = await docSnap.data() as UserData;
          const getUser = await userDataToSend(user, resultUser);
          await AsyncStorage.setItem('@user', JSON.stringify(getUser));
          const userLogged = await AsyncStorage.getItem('@user');
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

/* Actualizar react query*/
const SendDataImage = async (userId: string, base64String: string) => {
  await updateUserData(userId, { image: base64String });
  const updatedUser = await getUserById(userId);
  if (updatedUser.exists()) {
    const userData = await updatedUser.data() as UserData;
    const getUser = await reBuildUserData(userData);
    await AsyncStorage.setItem('@user', JSON.stringify(getUser));
  }
};

const reBuildUserData = async (userData: UserData) => {
  const userStorage = await AsyncStorage.getItem('@user');
  if (userStorage) {
    const user = JSON.parse(userStorage);
    return userDataToSend(userData, { user });
  } else {
    return userData;
  }
};

const SendSwitchProfile = async (userId: string, switchState: boolean) => {
  await updateSwitchProfileFirebase(userId, {
    switch_profile: switchState,
    preview: "http://localhost:3000/es/views/cardView?uid=" + userId + "&type=" + (switchState ? "professional" : "social")
  });
  const updatedUser = await getUserById(userId);
  if (updatedUser.exists()) {
    const userData = await updatedUser.data() as UserData;
    const getUser = await reBuildUserData(userData);
    await AsyncStorage.setItem('@user', JSON.stringify(getUser));
  }
};

const SendSwitchActivateCard = async (userId: string, switchState: boolean) => {
  await updateSwitchActivateCard(userId, { switch_activateCard: switchState });
  const updatedUser = await getUserById(userId);
  if (updatedUser.exists()) {
    const userData = await updatedUser.data() as UserData;
    const getUser = await reBuildUserData(userData);
    await AsyncStorage.setItem('@user', JSON.stringify(getUser));
  }
};

const UpdatePassword = async (password: string) => {
  const res = await updatePasswordFirebase(password);
  return res;
};

const SendBackgroundSelected = async (
  userId: string,
  backgroundSelect: string,
  templateSelect: string
) => {
  const templateData = {
    template_id: templateSelect,
    background_id: backgroundSelect,
  };
  await updateTemplateSelectedFirebase(userId, { templateData });
};

const SendTemplateSelected = async (
  userId: string,
  data: TemplateData[],
  queryClient: any
) => {
  const templateData = data;
  await updateTemplateSelectedFirebase(userId, { templateData });
  const updatedUser = await getUserById(userId);
  if (updatedUser.exists()) {
    const userData = await updatedUser.data() as UserData;
    const getUser = await reBuildUserData(userData);
    await AsyncStorage.setItem('@user', JSON.stringify(getUser));
    await queryClient.setQueryData(['user'], () => getUser);
  }
};

const SendSwitchAllForm = async (userId: string, dataForm: any) => {
  await updateSwitchAllFirebase(userId, { switchAllForm: dataForm });
};

const SendDataUserProfile = async (userId: string, data: DataForm) => {
  return updateDataUserProfile(userId, data)
    .then(async (response) => {
      const updatedUser = await getUserById(userId);
      if (updatedUser.exists()) {
        const userData = await updatedUser.data() as UserData;
        const getUser = await reBuildUserData(userData);
        await AsyncStorage.setItem('@user', JSON.stringify(getUser));
        return { success: true, error: false };
      }
    })
    .catch((error) => {
      console.error(error.message);
      return { success: false, error: error.message };
    });
};

const SendInactiveUser = async (userId: string) => {
  const res = await updateInactiveUser(userId, { isActive: false });
  return res;
};

const GetUser = () =>
  useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      const userLogged = await AsyncStorage.getItem('@user');
      if (userLogged) {
        const user = await JSON.parse(userLogged) as UserData;
        const updatedUser = await getUserById(user.uid);
        if (updatedUser.exists()) {
          const userData = await updatedUser.data() as UserData;
          const getUser = await reBuildUserData(userData);
          await AsyncStorage.setItem('@user', JSON.stringify(getUser));
          return getUser;
        } else {
          return user;
        }
      } else {
        return null;
      }
    },
  });

export {
  GetAllUserQuery,
  GetLoginQuery,
  GetUser,
  SendDataImage,
  SendDataUserProfile,
  SendSwitchActivateCard,
  SendSwitchAllForm,
  SendSwitchProfile,
  SendTemplateSelected,
  UpdatePassword,
  SendBackgroundSelected,
  SendInactiveUser
};