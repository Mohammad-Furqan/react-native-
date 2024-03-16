import {ImageBackground, Pressable, Text , View,StyleSheet} from 'react-native';
import Colors from '../../constant/colors';


function PrimaryButton({children,onPress}){
   
    
    return(
        <View style={styles.buttonOuterContainer}>
            <Pressable 
            onPress={onPress} 
            android_ripple={{color:'#D7B9C8'}}
            style={styles.buttonInnerContainer}
            >
                <Text style={styles.buttonText} >{children}</Text>
            </Pressable>
        </View>
    );
}
export default PrimaryButton;
const styles=StyleSheet.create({
    buttonOuterContainer:{
        borderRadius:28,
        margin:4,
        overflow:'hidden'
    },
    buttonInnerContainer:{
        backgroundColor:Colors.primary400,
        paddingHorizontal:16,
        paddingVertical:8,
        elevation:10,
    },
    buttonText:{
        textAlign:'center',
        color:'white',
    }
});
