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


const BankAccount = ({navigation}) => {
  return (
    <View>
      <Text>Settings Screen</Text>
      {/* <Button onPress={()=>navigation.navigate('Profile')} size='sm' variant='solid' style={styles.button}>
            <Text style={styles.buttonText}> Next </Text>
          </Button> */}
          <Button onPress={()=>navigation.goBack('Settings')} size='sm' variant='outline' style={styles.button}>
            <Text style={styles.buttonText}> Back </Text>
          </Button>
    </View>
  )
}


export default BankAccount
