import React, { Component } from 'react';
import {Text,View,StyleSheet,TouchableOpacity,FlatList,Image} from 'react-native';
import Button from '../components/Button'
import Txtinput from '../components/textInp';
import TodoItem from '../components/todoItem';

export default class Home extends Component {
    constructor(props){
        super(props);

        this.arr=[{
            id:1,title:'something',done:false
            }
            ,{
            id:2,title:'task2',done:false
            }],

        this.state={
            arrholder:[],
            txt:'',
            select:false
        }

    }

    flatlistsep = () => {
        return(
            <View style={{width:"100%",height:5}}/>       
        )
    }
    _addItem=()=>{
       this.arr.unshift({title:this.state.txt,done:false})
       this.setState({ arrholder: [...this.arr] })
       console.log(this.arr)
    }
    _delItem = (item) => {
        let arrholder = this.state.arrholder;
        arrholder = arrholder.filter((todo)=>todo.id !== item.id);
        this.setState({arrholder})
        // this.arr.pop()
        // this.setState({ arrholder: [...this.arr] })
    }
    _showItem = () => {
    }
    handletxt = (item) => { 
        this.setState({txt:item})
        console.log("item==>",this.state.txt);
    }
    toggle = () => {
        this.setState({select:!this.state.select})
        console.log("select",this.state.select)
    }
    toggleDone(item){
        let arrholder = this.state.arrholder;
        arrholder = arrholder.map((todo)=>{
            if(todo.id == item.id)
            {
                todo.done = !todo.done;
            }
            return todo;
        })
        this.setState({arrholder})
    }
    render() {
        return (
            <View style={styles.main}>
                <View style={styles.box}>
                    <Txtinput 
                    value={"Add task..."}
                    textChange={this.handletxt}
                    />
                    
                </View>
                <View style={styles.box2}>
                  <Button name="Add" onPress={this._addItem}/>
                  <Button name="Delete" onPress={this._delItem}/>
                  <Button name="Select all"/>
                </View>
                <FlatList 
                style={{flex:1,backgroundColor:'lightgrey',}}
                data={this.state.arrholder}
                width="100%"
                extraData={this.state}
                keyExtractor={(item,index) => index.toString()}
                renderItem={({item,index})=>{
                    return(<TodoItem todoItem={item} toggleDone={()=>this.toggleDone(item)}/>)}}
                ItemSeparatorComponent={this.flatlistsep}
                />    
            </View>
        )
    }
}

const styles = StyleSheet.create({

    main:{
        flex:1,
        backgroundColor:'gray',
    },
    box:{
        alignSelf:'center',
        height:"6%",
        width:"90%",
        backgroundColor:'lightgrey',
        borderRadius:10,
        marginTop:40,  
        marginLeft:5,
        flexDirection:'row',
    },
      box2:{
          height:"10%",
          flexDirection:'row',
          justifyContent:'space-around'
          
      }

})