import { View ,Text,StyleSheet,Image,Dimensions,useWindowDimensions, ScrollView} from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Colors from "../constant/colors";


function GameOverScreen({roundsNumber,userNumber,onStartNewGame}){

    const {width,height} = useWindowDimensions();
    let imageSize=300;
    let margin=36;
    
    if(width < 380){
        imageSize=150;
    }

    if(height < 400){
        imageSize=80;
        margin=15;
    }

    const imageStyle={
        width:imageSize,
        height:imageSize,
        borderRadius:imageSize/2,
        margin:margin,
    }//use as a style (style={[,]})

    return (
        <ScrollView style={styles.screen}>
            <View style={styles.rootContainer}>
                <Title>Game Over!</Title>
                <View style={[styles.imageContainer,imageStyle]}>
                    <Image source={require('../assets/images/success.png' )} style={styles.image} />
                </View>
                <View >
                    <Text style={styles.summaryText}> Your phone needed 
                        <Text style={styles.highlight}> {roundsNumber}</Text> rounds to guess the number 
                        <Text style={styles.highlight}> {userNumber}</Text>.
                    </Text>
                    <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
                </View>
            </View>
        </ScrollView>
    );
}

export default GameOverScreen;

// const deviceWidth=Dimensions.get("window").width;


const styles=StyleSheet.create({
    screen:{
        flex:1,
    },
    imageContainer:{
        // width:deviceWidth <380 ? 150 : 300,
        // height:deviceWidth <380 ? 150 : 300,
        // borderRadius:deviceWidth <380 ? 75 : 150, //should be half of width and height 
        borderWidth:3,
        borderColor:Colors.accent400,
        overflow:'hidden',
        margin:36,

    },
    image:{
        width:'100%',
        height:'100%'
    },

    rootContainer:{
        flex:1,
        padding:24,
        justifyContent:'center',
        alignItems:'center',
        
    },
    summaryText:{
        fontFamily:'open-sans-regular',
        fontSize:20,
        textAlign:'center',
        marginVertical:24,
    },
    highlight:{
        fontFamily:'open-sans',
        color:Colors.primary500
    }


});