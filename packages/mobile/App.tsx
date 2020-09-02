/* eslint-disable react/style-prop-object */
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import SplashScreen from 'react-native-splash-screen';
import { ThemeProvider } from 'styled-components';
import {
  useFonts,
  Archivo_400Regular,
  Archivo_700Bold,
} from '@expo-google-fonts/archivo';
import {
  Poppins_400Regular,
  Poppins_600SemiBold,
} from '@expo-google-fonts/poppins';

import lightTheme from './src/styles/themes/light';
import AppStack from './src/routes/AppStack';

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  SplashScreen.hide();

  return (
    <ThemeProvider theme={lightTheme}>
      <StatusBar style="light" />
      <AppStack />
    </ThemeProvider>
  );
};

export default App;
