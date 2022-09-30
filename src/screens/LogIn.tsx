import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Pressable, StyleSheet } from 'react-native'
import { Center, Box, Heading, VStack, FormControl, Input, Button, Text } from 'native-base'


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


const LogIn = ({navigation}) => {
  return <Center w='100%'>
      <Box safeArea p='2' w='90%' maxW='290' py='8'>
        <Heading size='lg' color='coolGray.800' _dark={{
        color: 'warmGray.50'
      }} fontWeight='semibold'>
          Welcome
        </Heading>
        <Heading mt='1' color='coolGray.600' _dark={{
        color: 'warmGray.200'
      }} fontWeight='medium' size='xs'>
          Log In to continue!
        </Heading>
        <VStack space={3} mt='5'>
          <FormControl>
            <FormControl.Label>Email</FormControl.Label>
            <Input />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input type='password' />
          </FormControl>
          <FormControl>
            <FormControl.Label>Confirm Password</FormControl.Label>
            <Input type='password' />
          </FormControl>
          <Button mt='2' colorScheme='indigo'>
            Log In
          </Button>
          <Button mt='2' colorScheme='indigo'>
            Log Out
          </Button>
        </VStack>
      </Box>
      <Button onPress={() =>navigation.navigate('ForgotPassword')} size='sm' variant='solid' style={styles.button}>
            <Text style={styles.buttonText}> Next </Text>
          </Button>
          <Button onPress={() =>navigation.goBack('SignUp')} size='sm' variant='outline' style={styles.button}>
            <Text style={styles.buttonText}> Back </Text>
          </Button>
    </Center>
}


export default LogIn
