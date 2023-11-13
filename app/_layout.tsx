import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';
import { useColorScheme, Text, View } from 'react-native';
import { StatusBar } from "expo-status-bar";

export const unstable_settings = {
  // Ensure any route can link back to `/`
  initialRouteName: 'login',
};

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'light' ? DarkTheme : DefaultTheme}>
      <StatusBar backgroundColor='black'/>
      <Stack 
        initialRouteName="login"
        screenOptions={{
          title: 'SisGeP', 
          headerStyle: {backgroundColor: '#58AF9B' }, 
          headerTintColor: '#fff',
          headerTitleAlign: 'center', 
          headerTitleStyle: {fontWeight: 'bold'}
        }}>
        <Stack.Screen name="login" />
        <Stack.Screen name="register" />
        <Stack.Screen name="index" />
        <Stack.Screen name="equipment" />
        <Stack.Screen name="location" />
      </Stack>  
    </ThemeProvider>
  );
}