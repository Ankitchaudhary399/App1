import React, { Component } from 'react'
import { Text ,StyleSheet,Button,TouchableOpacity,Image} from 'react-native'


/*class component which return the item */

export default class TodoItem extends Component {
    constructor(props){
        super(props);
        this.state={
            check:false,
        }

    }
    selected = ()=>{
        this.setState({check:!this.state.check})
    }
    render() {
        const todoItem = this.props.todoItem;
        return (
            <TouchableOpacity style={styles.container}
            onPress={()=>this.props.toggleDone()}
            >
                <Text style={(todoItem.done)?{color:'grey'}:{color:'black'}}>{todoItem.title}</Text>
                <TouchableOpacity onPress={()=>this.props.removeTodo()}/>
               <Button title="remove" 
               color={(todoItem.done)?'grey':'red'}
               onPress={()=>this.props.removeTodo()}  />
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
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    txt:{
        color:'black',
        paddingTop:20,
        
        fontSize:20,
        alignSelf:'center'
        
    }
})