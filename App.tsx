import React from 'react';
import AppNavigator from './src/routes/AppNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components';
import { theme } from './src/styles';
import { Platform, StatusBar } from 'react-native';

export default function App() {

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'}
        backgroundColor={theme.colors.secondary_600}
      />
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
}
