import { Text ,StyleSheet,View} from "react-native";
import Colors from "../../constant/colors";

function InstructionText({children,styleprops}){
    return(
    <Text style={[styles.instructionText,styleprops]}>{children}</Text>

    );
}

export default InstructionText;

const styles=StyleSheet.create({
    instructionText:{
        color:Colors.accent400,
        fontSize:24, 
        fontFamily:'open-sans',
    },
});