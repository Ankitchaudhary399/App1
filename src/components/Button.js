import React from 'react'
import { View ,StyleSheet, TouchableOpacity,Text} from 'react-native'

const Button = (props) => {
    return (
        <View style={styles.Container}>
        <TouchableOpacity>
            <View style={styles.Box}>
                    <Text style={styles.txt}>
                    {props.name}
                    </Text>
            </View>
            </TouchableOpacity>
        </View>
    )
}

export default Button;

const styles = StyleSheet.create({
    Container:{
        flex:1,
        backgroundColor:'yellow',
        justifyContent:'center'
    },
    Box:{
        justifyContent:'center',
        height:"70%",
        width:"80%",
        borderRadius:8,
        alignSelf:'center',
        backgroundColor:'red'
    },
    txt:{
        textAlign:'center'
    }
})

