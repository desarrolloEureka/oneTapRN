import { BackgroundImages, LogosImages, Templates } from '../types/home';
import { AllRefPropsFirebase } from '../types/userFirebase';
import { collection, doc, getDocs } from 'firebase/firestore';
import { dataBase } from './firebaseConfig';

const allRef = ({ ref }: AllRefPropsFirebase) => collection(dataBase, ref);

const countriesRef = doc(dataBase, 'countries', 'sSbpwcKROo5wEi8Naxqj');

export const getAllTemplates = async () => {
  const templatesData: Templates[] = [];
  const querySnapshot = await getDocs(allRef({ ref: 'templates' }));
  if (!querySnapshot.empty) {
    querySnapshot.forEach((doc: any) => {
      const dataResult = doc.data() as Templates;
      templatesData.push({ ...dataResult, id: doc.id });
    });
  }
  return templatesData;
};

export const getAllBackgroundImages = async () => {
  const backgroundImages: BackgroundImages[] = [];
  const querySnapshot = await getDocs(allRef({ ref: 'background_images' }));
  if (!querySnapshot.empty) {
    querySnapshot.forEach((doc: any) => {
      const dataResult = doc.data() as BackgroundImages;
      backgroundImages.push({ ...dataResult, id: doc.id });
    });
  }
  return backgroundImages;
};

export const getAllLogosImages = async () => {
  const logosImages: LogosImages[] = [];
  const querySnapshot = await getDocs(allRef({ ref: 'social_icons' }));
  if (!querySnapshot.empty) {
    querySnapshot.forEach((doc: any) => {
      const dataResult = doc.data() as LogosImages;
      logosImages.push({ ...dataResult, id: doc.id });
    });
  }
  return logosImages;
};