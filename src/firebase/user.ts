import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
  updateDoc,
} from 'firebase/firestore';
import {
  getAuth, updatePassword
} from 'firebase/auth';
import {
  AllRefPropsFirebase,
  GetUserByLoginProps,
  LoginRefProps,
  RefPropsFirebase,
} from '../types/userFirebase';
import { dataBase } from './firebaseConfig';
import { UserData } from '../types/user';

export const updateUserData = async (userId: string, newData: any) => {
  const userDocRef = doc(dataBase, 'users', userId);
  await updateDoc(userDocRef, newData);
};

export const updatePasswordFirebase = async (newPassword: string) => {
  console.log("newPassword ", newPassword);
  const auth = getAuth();
  const user = auth.currentUser;

  /* if (user) {
    updatePassword(user, "dmsdemo12345").then(() => {
      console.log("Correcto");
    }).catch((error) => {
      console.log("Fallo");
    });
  } */
};

export const updateSwitchProfileFirebase = async (userId: string, switchState: any) => {
  const userDocRef = doc(dataBase, 'users', userId);
  await updateDoc(userDocRef, switchState);
};

export const updateSwitchActivateCard = async (userId: string, switchState: any) => {
  const userDocRef = doc(dataBase, 'users', userId);
  const res = await updateDoc(userDocRef, switchState)
};

export const updateTemplateSelectedFirebase = async (userId: string, newData: any) => {
  const userDocRef = doc(dataBase, 'users', userId);
  await updateDoc(userDocRef, newData);
};