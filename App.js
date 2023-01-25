import { Text, View } from 'react-native';
import { AsyncStorage, Animated } from 'react-native';
import { useEffect, useState } from "react";
import { IsThereABananaInMyBagText } from "./IsThereABananaInMyBagText.js"
import { styles } from "./styles.js"
import Toast from 'react-native-toast-message';
import ShoppingBagComponent from './ShoppingBagComponent.js';
import BananaComponent from './BananaComponent.js';
import { useFonts } from 'expo-font';
import BackgroundTimer from "react-native-background-timer"


export default function App() {
  const [isThereABananaInMyBag, setIsThereABananaInMyBag] = useState(false);
  const [fontsLoaded, error] = useFonts({
    'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf')
  });

  const [secondsLeft, setSecondsLeft] = useState(3601);

  const [lowerAnimation, setLowerAnimation] = useState(new Animated.Value(-250))
  const animatedStyles = {
    lower: {
      transform: [
        {
          translateY: lowerAnimation
        }
      ]
    }
  }
  const startAnimation = () => {
    // setActivated(!isThereABananaInMyBag)
    Animated.timing(lowerAnimation, {
      toValue: isThereABananaInMyBag ? -250 : 230,
      duration: 500,
      useNativeDriver: true
    }).start()
  }

  useEffect(() => {
    if (launched) {
      return;
    }
    else {
      loadIsThereABananaInMyBag()
    }
  }, []);

  useEffect(() => {
    Toast.show({
      type: 'success',
      text1: `isThereABananaInMyBag - Has changed to : ${isThereABananaInMyBag}`

    })
    console.log(isThereABananaInMyBag, '- Has changed')
    if (isThereABananaInMyBag) {
      startTimer()
    }
    else {
      BackgroundTimer.stopBackgroundTimer();
    }
    return () => {
      BackgroundTimer.stopBackgroundTimer();
    };
  }, [isThereABananaInMyBag])

  // Checks if secondsLeft = 0 and stop timer if so
  useEffect(() => {
    if (secondsLeft === 0) BackgroundTimer.stopBackgroundTimer()
  }, [secondsLeft])

  const startTimer = () => {
    BackgroundTimer.runBackgroundTimer(() => {
      setSecondsLeft(secs => {
        if (secs > 0) return secs - 1
        else return 0
      })
    }, 1000)
  }

  function changeBananaStatus() {
    var newValue = !isThereABananaInMyBag
    saveIsThereABananaInMyBag(newValue)
    setIsThereABananaInMyBag(newValue)

    startAnimation()
  }

  async function loadIsThereABananaInMyBag() {
    try {
      AsyncStorage.getItem('isThereABananaInMyBag').then((response) => {
        Toast.show({
          type: 'success',
          text1: `loadIsThereABananaInMyBag setting state to : ${response === 'true'}`
        })
        setIsThereABananaInMyBag(response === 'true')
        if (!launched) {
          setLowerAnimation(new Animated.Value(response === 'true' ? 230 : -250))
          launched = true;
        }
      }
      )
    } catch (error) {
      console.log('Error getting')
    }
  }

  async function saveIsThereABananaInMyBag(value) {
    try {
      await AsyncStorage.setItem(
        'isThereABananaInMyBag',
        value.toString(),
      );
      console.log(`222:/t${value}`);
    } catch (error) {
      console.log('Error setting')
    }
  }

  return (
    <View style={styles.baseContainer} onTouchStart={changeBananaStatus}>
      <View style={styles.topContainer}>
        <Text style={[
          styles.text,
          {
            marginTop: 38
          }]}>Is there a banana in my bag?</Text>
      </View>
      <Animated.View style={[styles.image, styles.banana, animatedStyles.lower]}>
        <BananaComponent />
      </Animated.View>
      <ShoppingBagComponent style={styles.image} />
      <View style={styles.bottomContainer}>
        <IsThereABananaInMyBagText text={isThereABananaInMyBag} />
      </View>
      <View style={styles.container}>
        <Text style={styles.time}>secondsLeft</Text>
      </View>
      <Toast />
    </View>
  );
}




let launched = false;

// const svgMarkup = `<svg height="100" width="100">
// <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" /></svg>`
// const svgMarkup = `<svg height="100" width="100"  ><path d="M352 160v-32C352 57.42 294.579 0 224 0 153.42 0 96 57.42 96 128v32H0v272c0 44.183 35.817 80 80 80h288c44.183 0 80-35.817 80-80V160h-96zm-192-32c0-35.29 28.71-64 64-64s64 28.71 64 64v32H160v-32zm160 120c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zm-192 0c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24z"/></svg>`

