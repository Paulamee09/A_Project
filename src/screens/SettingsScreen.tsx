import { Button } from 'native-base'
import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'


const styles = StyleSheet.create({
  button: {
    backgroundColor: '#080808',
    borderRadius: 16,
    height: 60,
    paddingVertical: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffff',
    fontSize: 16,
  }
})


const SettingsScreen = ({navigation}) => {
  return (
    <View>
      <Text>Settings Screen</Text>
      <Button onPress={()=>navigation.navigate('ChangePricing')} size='sm' variant="solid" style={styles.button}>
            <Text style={styles.buttonText}> ChangePricing </Text>
          </Button>
          <Button onPress={()=>navigation.navigate('ChangeLanguage')} size="sm" variant="outline" style={styles.button}>
            <Text style={styles.buttonText}> ChangeLanguage </Text>
          </Button>
          <Button onPress={()=>navigation.navigate('BankAccount')} size='sm' variant="solid" style={styles.button}>
            <Text style={styles.buttonText}> BankAccount </Text>
          </Button>
          <Button onPress={()=>navigation.goBack('Home')} size="sm" variant="outline" style={styles.button}>
            <Text style={styles.buttonText}> Home </Text>
          </Button>
    </View>
  )
}

export default SettingsScreen
