import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackNavigationProp } from '@react-navigation/stack';

export type RouteStackParamList = {
  Home: undefined;
  PreviewTemplate: { tab: string };
  Profile: undefined;
  ProfileProfessional: undefined;
  ChangePassword: undefined;
  OnboardingOne: undefined;
  OnboardingTwo: undefined;
  OnboardingThree: undefined;
  OnboardingInicioSesion: undefined;
  Login: undefined;
  RecoveryPassword: undefined;
  RecoveryCode: undefined;
  CreateNewPassword: undefined;
  PasswordChanged: undefined;
  AcercaDe: undefined;
  Terminos: undefined;
  Politicas: undefined;
  Plantillas: undefined;
  Splash: undefined;
  CameraView: undefined;
  ShareQR: undefined;
};

export type StackNavigation = StackNavigationProp<RouteStackParamList>;
export type SplashNavigation = NativeStackScreenProps<
  RouteStackParamList,
  'Splash'
>;
