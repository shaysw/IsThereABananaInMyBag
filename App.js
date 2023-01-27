import { Text, View } from 'react-native';
import { AsyncStorage, Animated } from 'react-native';
import { useEffect, useState } from "react";
import { IsThereABananaInMyBagText } from "./IsThereABananaInMyBagText.js"
import { styles } from "./styles.js"
import ShoppingBagComponent from './ShoppingBagComponent.js';
import BananaComponent from './BananaComponent.js';
import { useFonts } from 'expo-font';
import { AnimatedBackground } from './AnimatedBackground.js';


export default function App() {
  const [isThereABananaInMyBag, setIsThereABananaInMyBag] = useState(false);
  const [fontsLoaded, error] = useFonts({
    'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf')
  });
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
    console.log(isThereABananaInMyBag, '- Has changed')
  }, [isThereABananaInMyBag])

  function changeBananaStatus() {
    var newValue = !isThereABananaInMyBag
    saveIsThereABananaInMyBag(newValue)
    setIsThereABananaInMyBag(newValue)

    startAnimation()
  }

  async function loadIsThereABananaInMyBag() {
    try {
      AsyncStorage.getItem('isThereABananaInMyBag').then((response) => {
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
    } catch (error) {
      console.log('Error setting')
    }
  }

  return (
    <View style={styles.baseContainer} onTouchStart={changeBananaStatus}>
      <AnimatedBackground />
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
    </View>
  );
}

let launched = false;
