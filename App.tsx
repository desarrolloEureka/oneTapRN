import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/views/home/Home';
import PreviewTemplate from './src/views/home/components/main/home/PreviewTemplate';
import ProfileScreen from './src/views/home/components/main/profile/Profile';
import ChangePassword from './src/views/home/components/main/profile/ChangePassword';
import Login from './src/views/login/Login';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="PreviewTemplate" component={PreviewTemplate} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="ChangePassword" component={ChangePassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;