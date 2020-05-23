import React from 'react'
import { View ,StyleSheet, TextInput,} from 'react-native'

const Txtinput = (props) => {
    return (
        <View style={styles.Main}>
           <View style={styles.Box1}>
           <TextInput
           style={styles.txtinp}
           value={props.name}
           onChangeText={input=>props.textChange(input)}
           ></TextInput>
           </View>
        </View>
    )
}
export default Txtinput;

const styles = StyleSheet.create({
    Main:{
        flex:1,
        
        justifyContent:'center',   
    },
    Box1:{
        height:"100%",
        width:"100%",
        backgroundColor:'white',
        alignSelf:'center',
        borderRadius:5
    },
    txtinp:{
        fontSize:18,
        paddingLeft:5,
        color:'black',
        paddingTop:5

    }
    
    
})

