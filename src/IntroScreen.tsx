import React from 'react'
import {View, StyleSheet, Image, ImageSourcePropType} from 'react-native'
import {Text, Heading, Button} from 'native-base'
import AppIntroSlider from 'react-native-app-intro-slider'
import NextButton from './components/NextButton'
import SkipButton from './components/SkipButton'


// styles
const styles = StyleSheet.create({
container: {
  flex: 1,
  padding: 10,
},
  heading: {
  fontSize: 24,
  paddingTop: 10,
  lineHeight: 20,
  fontWeight: '400',
  color: '#080808',
  textAlign: 'center',
},
text: {
  fontSize: 24,
  paddingTop: 10,
  lineHeight: 20,
  fontWeight: '400',
  color: '#080808',
  textAlign: 'center',
}
})


// interface
interface ISlide {
  key: string
  title: string
  text: string
  image: ImageSourcePropType
  backgroundColor: string
}


// slides
const slides = [
  {
    key: 'one',
    title: 'Title 1',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
    image: require('../assets/image/logo2.png'),
    backgroundColor: '#59b2ab',
  },
  {
    key: 'two',
    title: 'Title 2 ',
    text: 'Lorem ipsum dolor sit amet consectetur.',
    image: require('../assets/image/logo4.png'),
    backgroundColor: '#59b2ab',
  },
  {
    key: 'three',
    title: 'Title 3',
    text: 'Lorem ipsum dolor sit amet.',
    image: require('../assets/image/logo5.png'),
    backgroundColor: '#59b2ab',
  }
]


// main
const IntroScreen = ({navigation}) => {
  // return (
  //   <Box style={styles.container}>
  //   <View>
  //     <Heading> Main Page </Heading>
  //     <Image 
  //      resizeMode='contain'
  //      source={require('../assets/image/logo2.png')}/>
  //      <Text style={styles.text}> Lorem ipsum dolor sit amet consectetur 
  //               adipisicing elit. Cupiditate illum doloremque 
  //               dolor eligendi, vel enim tempore nemo aut cum 
  //               incidunt.
  //       </Text>
  //       <Button size = 'md'>Next</Button>
  //   </View>
  //   </Box>
  // )


  const _renderItem = ({item}: {item: ISlide}) => {
    return (
      <View>
        <Heading style={styles.heading}>{item.title}</Heading>
        <Image style={{width: 350, height: 350, marginTop: 50}}
        resizeMode='contain'
        source={item.image}
        />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    )
  }

  
   return (
    <View style={styles.container}>
      <AppIntroSlider 
        data={slides} 
        renderItem={_renderItem} 
        activeDotStyle={{width: 10, backgroundColor: '#080808'}}
        dotStyle={{width: 10, backgroundColor: '#00033333'}}
        showDoneButton={true}
        showSkipButton={true}
        showNextButton={true}
      />
      <NextButton>Next</NextButton>
      <SkipButton onPress={()=>navigation.navigate('SignUp')}>Skip</SkipButton>
    </View>
  )
}


export default IntroScreen