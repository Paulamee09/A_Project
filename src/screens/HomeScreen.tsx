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


const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text> HOME </Text>
      <Button onPress={()=>navigation.goBack('LogIn')} size= 'md' variant='solid'>
            <Text> Log Out </Text>
          </Button>
          <Button onPress={()=>navigation.navigate('Help')} size='sm' variant='solid' style={styles.button}>
            <Text style={styles.buttonText}> Help </Text>
          </Button>
          <Button onPress={()=>navigation.navigate('Settings')} size='sm' variant='outline' style={styles.button}>
            <Text style={styles.buttonText}> Settings </Text>
          </Button>
          <Button onPress={()=>navigation.navigate('Profile')} size='sm' variant='solid' style={styles.button}>
            <Text style={styles.buttonText}> Profile </Text>
          </Button>
    </View>
  )
}


export default HomeScreen
