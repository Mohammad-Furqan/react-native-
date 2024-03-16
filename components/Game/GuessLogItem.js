import { Text,View ,StyleSheet} from "react-native";
import Colors from "../../constant/colors";

function GuessLogItem({roundNumer,guess}){
    return( 
        <View style={styles.listItem}>
        <Text style={styles.itemText}>#{roundNumer}</Text>
        <Text style={styles.itemText}>Opponent's Guess : {guess}</Text>
    </View>
    );
}

export default GuessLogItem;
const styles= StyleSheet.create({
    listItem:{
        borderColor:Colors.primary500,
        borderwith:2,
        borderRadius:40,
        padding:12,
        marginVertical:8,
        backgroundColor:Colors.accent500,
        flexDirection:'row',
        justifyContent:'space-around',
        width:'100%',   
        elevation:4,
        shadowColor:'black',
        shadowOffset:{width:0, height:0},
        shadowOpacity:0.25,
        shadowRadius:3,
                
    },
    
    itemText:{
        fontFamily:'open-sans-regular'
    }
   
});