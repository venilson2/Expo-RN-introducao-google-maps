import React from 'react';
import AppNavigator from './src/routes/AppNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components';
import { theme } from './src/styles';
import { Platform, StatusBar } from 'react-native';
import { CoordinatesProvider } from './src/context/CoordinatesContext';

export default function App() {

  return (
    <CoordinatesProvider>
      <ThemeProvider theme={theme}>
        <StatusBar
          barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'}
          backgroundColor={theme.colors.primary_500}
        />
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </ThemeProvider>
    </CoordinatesProvider>
  );
}
