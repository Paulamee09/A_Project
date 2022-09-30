import React from 'react'
import {NativeBaseProvider, Text} from 'native-base'
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'


//import screens
import IntroScreen from './src/IntroScreen'
import SignUp from './src/screens/SignUp'
import ForgotPassword from './src/screens/ForgotPassword'
import LogIn from './src/screens/LogIn'
import HomeScreen from './src/screens/HomeScreen'
import HelpScreen from './src/screens/HelpScreen'
import SettingsScreen from './src/screens/SettingsScreen'
import ProfileScreen from './src/screens/ProfileScreen'
import EditProfileScreen from './src/EditProfileScreen'
import FAQScreen from './src/screens/FAQScreen'
import ChangePricingScreen from './src/screens/ChangePricingScreen'
import ChangeLanguageScreen from './src/screens/ChangeLanguageScreen'
import BankAccountScreen from './src/screens/BankAccountScreen'


// create stack
const Stack = createNativeStackNavigator ()


const App = () => {
  return (
    <NativeBaseProvider>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='Intro' component={IntroScreen}/>
        <Stack.Screen name='SignUp' component={SignUp}/>
        <Stack.Screen name='LogIn' component={LogIn}/>
        <Stack.Screen name='ForgotPassword' component={ForgotPassword}/>
        <Stack.Screen name='Home' component={HomeScreen}/>
        <Stack.Screen name='Help' component={HelpScreen}/>
        <Stack.Screen name='Settings' component={SettingsScreen}/>
        <Stack.Screen name='Profile' component={ProfileScreen}/>
        <Stack.Screen name='FAQ' component={FAQScreen}/>
        <Stack.Screen name='ChangePricing' component={ChangePricingScreen}/>
        <Stack.Screen name='ChangeLanguage' component={ChangeLanguageScreen}/>
        <Stack.Screen name='BankAccount' component={BankAccountScreen}/>
        <Stack.Screen name='EditProfile' component={EditProfileScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
    </NativeBaseProvider>
  )
}


export default App