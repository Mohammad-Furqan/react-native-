import { Text,View ,Platform,StyleSheet} from "react-native";
import Colors from "../../constant/colors";



function Title({children}){
    return (
        <Text style={styles.title}>{children}</Text>

    );

}

export default Title;
const styles=StyleSheet.create({
    title:{
        fontSize:24,
        fontWeight:'bold',
        color:Colors.accent500,
        textAlign:'center',
        // borderWidth:Platform.OS ==='android' ? 2 : 0,
        // borderWidth:Platform.select({ios:0,android:2}),
        borderWidth:4,
        borderColor:Colors.accent500,
        padding:12,
        fontFamily:'open-sans-regular',
        maxWidth:'50%',
        width:300,
    }
});