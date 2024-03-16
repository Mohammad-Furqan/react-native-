import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet,ImageBackground,SafeAreaView,Text,View} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading';

import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import Colors from './constant/colors';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {
  const [userNumber,setUserNumber] = useState();
  const [gameIsOver,setGameIsOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);

  const [fontsLoaded ]=useFonts({
    'open-sans':require('./assets/fonts/OpenSans-Bold.ttf'),
    'open-sans-regular':require('./assets/fonts/OpenSans-Regular.ttf')
  });

  if(!fontsLoaded){
    return <AppLoading/>;
  }

  function pickNumberHandler(pickNumber){
    setUserNumber(pickNumber);
    setGameIsOver(false);

  }
 
  function gameOverHandler(numberOfRounds){
    setGameIsOver(true);
    setGuessRounds(numberOfRounds);
  }

  function startNewGameHandler(){
    setUserNumber(null);
    setGuessRounds(0);
  }

  let screen= <StartGameScreen onPickNumber={pickNumberHandler} />;
  
  if (userNumber){
    screen=<GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />;
  }

  if(gameIsOver && userNumber){ //is user number is chosen 
    screen=<GameOverScreen userNumber={userNumber} roundsNumber={guessRounds} onStartNewGame={startNewGameHandler} />
  }



  return (
    <LinearGradient colors={[Colors.primary400,Colors.accent400,]} style={styles.rootScreen}>
      <ImageBackground 
      source={require('./assets/images/background.png')}
      resizeMode='cover'
      style={styles.rootScreen}
      imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground> 
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen:{
    flex:1,
    // backgroundColor:'#ddb52f', x  
  },
  backgroundImage:{
    opacity:0.20,
  },
});
 