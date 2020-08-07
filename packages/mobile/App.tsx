/* eslint-disable react/style-prop-object */
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { AppLoading } from 'expo';

import {
  useFonts,
  Archivo_400Regular,
  Archivo_700Bold,
} from '@expo-google-fonts/archivo';
import {
  Poppins_400Regular,
  Poppins_600SemiBold,
} from '@expo-google-fonts/poppins';

import AppStack from './src/routes/AppStack';

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar style="light" />
      <AppStack />
    </>
  );
};

export default App;
