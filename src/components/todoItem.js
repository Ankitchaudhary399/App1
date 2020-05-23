import React, { Component } from 'react'
import { Text ,StyleSheet,Button,TouchableOpacity} from 'react-native'

export default class TodoItem extends Component {
    constructor(props){
        super(props);

    }
    render() {
        const todoItem = this.props.todoItem;
        return (
            <TouchableOpacity style={styles.container}
            onPress={()=>this.props.toggleDone()}
            >
                <Text style={(todoItem.done)?{color:'green'}:{color:'black'}}>{todoItem.title}</Text>
            </TouchableOpacity>
           
        )
    }
}
const styles = StyleSheet.create({
    container:{
        height:40,
        backgroundColor:'ghostwhite',
        borderRadius:10,
        borderWidth:2,
        paddingLeft:15,
        flexDirection:'row',
        alignItems:'center'
    },
    txt:{
        color:'black',
        paddingTop:20,
        
        fontSize:20,
        alignSelf:'center'
        
    }
})