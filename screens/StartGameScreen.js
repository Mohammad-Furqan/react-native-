import { TextInput,View,StyleSheet,Alert,Text ,Dimensions, useWindowDimensions, KeyboardAvoidingView,ScrollView} from "react-native";
import { useState } from "react";
import PrimaryButton from "../components/ui/PrimaryButton";
import  Colors  from '../constant/colors';
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";



function StartGameScreen({onPickNumber}){ //(props.onPickNumber)
    const [enteredNumber,setEnteredNumber]=useState('');

    //useWindowDimensions automatically updates all of its values when screen size or font scale changes.
    const {width , height} = useWindowDimensions();


    function numberInputHandler(enteredText){
        setEnteredNumber(enteredText);
    }
    function resetInputHandler(){
        setEnteredNumber('');
    }
    
    function confirmInputHandler(){
        const  chosenNumber=parseInt(enteredNumber);
        if(isNaN(chosenNumber) || chosenNumber<=0 || chosenNumber>90 ){
            Alert.alert(
                'Invalid Number ',
                'number has to be a number between 1 to 90',
                [{text:'Okay' ,style:'destructive' ,onPress:resetInputHandler}],
                
                );
            return;
        }
        onPickNumber(chosenNumber);   
        
    }
    
    const marginTopDistance = height < 380 ? 30 : 100;
    //whenever the function component re-execute when dimensions change this above line will adjust 
    //the device orientaion size .(change)
    return (
        <ScrollView style={styles.screen}>
            <KeyboardAvoidingView style={styles.screen} behavior='position'>
                <View style={[styles.rootContainer,{ marginTop:marginTopDistance}]}>
                    <Title>Guess the Number</Title>
                    <Card>
                        <InstructionText>Enter a number</InstructionText>
                        <TextInput 
                        style={styles.numberInput} 
                        maxLength={2} 
                        keyboardType='number-pad'
                        autoCapitalize='none'
                        autoCorrect={false}
                        value={enteredNumber}
                        onChangeText={numberInputHandler}
                        />
                        <View style={styles.buttonsContainer}>
                            <View style={styles.buttonContainer}>
                                <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                            </View>
                            <View style={styles.buttonContainer}>
                                <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                            </View>       
                        </View>
                    </Card>
                </View>
            </KeyboardAvoidingView>
        </ScrollView>
    );
}

export default StartGameScreen;

// const deviceHeight=Dimensions.get("window").height;
//this code is only executed once, so we have to set it in a way that it should adjusts to change 
//device orientation.// we use useWindowDimensions hook
const styles=StyleSheet.create({
    screen:{
        flex:1,
    },
    rootContainer:{
        flex:1,
        marginTop:100,
        alignItems:'center',

    },    
    numberInput:{
        height:50,
        width:50,
        textAlign:'center',
        fontSize:32,
        borderBottomColor:Colors.accent400,
        borderBottomWidth:2,
        color:Colors.accent500,
        marginVertical:8,
        fontWeight:'bold',
    },
    buttonsContainer:{
        flexDirection:'row',
    },
    buttonContainer:
    {
        flex:1,
    }
});

