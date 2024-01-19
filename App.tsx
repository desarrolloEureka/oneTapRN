import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/views/home/Home';
import PreviewTemplate from './src/views/home/components/main/home/PreviewTemplate';
import ProfileScreen from './src/views/home/components/main/profile/Profile';
import ChangePassword from './src/views/home/components/main/profile/ChangePassword';
import Login from './src/views/login/Login';
import OnboardingOne from './src/views/onboardings/OnboardigndOne';
import OnboardingTwo from './src/views/onboardings/OnboargindTwo';
import OnboardingThree from './src/views/onboardings/OnboardingThree';
import OnboardingInicioSesion from './src/views/onboardings/OnboardingInicioSesion';
import Main from './src/views/home/components/main/Main';
import RecoveryPassword from './src/views/recovery/components/main/RecoveryPassword';
import RecoveryCode from './src/views/recovery/components/main/RecoveryCode';
import CreateNewPassword from './src/views/recovery/components/main/CreateNewPassword';
import PasswordChanged from './src/views/recovery/components/main/PasswordChanged';
import AcercaDe from './src/views/opcionesMenu/AcercaDe';
import Terminos from './src/views/opcionesMenu/Terminos';
import Politicas from './src/views/opcionesMenu/Politicas';
import Plantillas from './src/views/home/components/main/home/Plantillas';
import webViewPassword from './src/views/recovery/components/main/webViewPassword';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false, // Oculta la barra de navegación en todas las pantallas
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="PreviewTemplate" component={PreviewTemplate} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="ChangePassword" component={ChangePassword} />
        <Stack.Screen name="OnboardingOne" component={OnboardingOne} />
        <Stack.Screen name="OnboardingTwo" component={OnboardingTwo} />
        <Stack.Screen name="OnboardingThree" component={OnboardingThree} />
        <Stack.Screen name="OnboardingInicioSesion" component={OnboardingInicioSesion} />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="RecoveryPassword" component={RecoveryPassword} />
        <Stack.Screen name="RecoveryCode" component={RecoveryCode} />
        <Stack.Screen name="CreateNewPassword" component={CreateNewPassword} />
        <Stack.Screen name="PasswordChanged" component={PasswordChanged} />
        <Stack.Screen name="AcercaDe" component={AcercaDe} />
        <Stack.Screen name="Terminos" component={Terminos} />
        <Stack.Screen name="Politicas" component={Politicas} />
        <Stack.Screen name="Plantillas" component={Plantillas} />
        <Stack.Screen name="webViewPassword" component={webViewPassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
