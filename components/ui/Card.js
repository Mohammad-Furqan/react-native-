
import Colors from "../../constant/colors";
import { View,Text ,StyleSheet,Dimensions} from "react-native";
function Card({children}){
    return(
        <View style={styles.card}>{children}</View>
    );
}

export default Card;

const deviceWidth=Dimensions.get("window").width;

const styles=StyleSheet.create({
    card:{
        // flex:1, 
        justifyContent:'center',
        alignItems:'center',
        marginTop:deviceWidth < 380 ? 18 : 36,
        marginHorizontal:24,
        padding:8,
        backgroundColor:Colors.primary500,
        borderRadius:10,
        elevation:10,
       
    },
})