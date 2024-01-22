import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import HomeScreen from './src/views/home/Home';
import Plantillas from './src/views/home/components/main/home/Plantillas';
import PreviewTemplate from './src/views/home/components/main/home/PreviewTemplate';
import ChangePassword from './src/views/home/components/main/profile/ChangePassword';
import ProfileScreen from './src/views/home/components/main/profile/Profile';
import Login from './src/views/login/Login';
import OnboardingOne from './src/views/onboardings/OnboardigndOne';
import OnboardingInicioSesion from './src/views/onboardings/OnboardingInicioSesion';
import OnboardingThree from './src/views/onboardings/OnboardingThree';
import OnboardingTwo from './src/views/onboardings/OnboargindTwo';
import Splash from './src/views/onboardings/Splash';
import AcercaDe from './src/views/opcionesMenu/AcercaDe';
import Politicas from './src/views/opcionesMenu/Politicas';
import Terminos from './src/views/opcionesMenu/Terminos';
import CreateNewPassword from './src/views/recovery/components/main/CreateNewPassword';
import PasswordChanged from './src/views/recovery/components/main/PasswordChanged';
import RecoveryCode from './src/views/recovery/components/main/RecoveryCode';
import RecoveryPassword from './src/views/recovery/components/main/RecoveryPassword';
import webViewPassword from './src/views/recovery/components/main/webViewPassword';
import {RouteStackParamList} from './src/types/navigation';

const Stack = createNativeStackNavigator<RouteStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false // Oculta la barra de navegación en todas las pantallas
        }}
        initialRouteName="Splash">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="PreviewTemplate" component={PreviewTemplate} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="ChangePassword" component={ChangePassword} />
        <Stack.Screen name="OnboardingOne" component={OnboardingOne} />
        <Stack.Screen name="OnboardingTwo" component={OnboardingTwo} />
        <Stack.Screen name="OnboardingThree" component={OnboardingThree} />
        <Stack.Screen
          name="OnboardingInicioSesion"
          component={OnboardingInicioSesion}
        />
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
        <Stack.Screen name="Splash" component={Splash} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
