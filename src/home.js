import React, { Component } from 'react';
import {Text,View,StyleSheet,TextInput,TouchableOpacity,FlatList,Image} from 'react-native';
import Button from './components/Button';
import Txtinput from './components/textInp';

export default class Home extends Component {
    constructor(props){
        super(props);

        this.arr=[{
            title:'something'
            }
            ,{
            title:'task2'
            }],

        this.state={
            arrholder:[],
            txt:'',
            select:false
        }

    }

    flatlistsep = () => {
        return(
            <View style={{width:"100%",height:"5%"}}/>       
        )
    }
    _addItem=()=>{
       this.arr.push({title:this.state.txt})
       this.setState({ arrholder: [...this.arr] })
       console.log(this.arr)

    }

    _delItem = () => {
        this.arr.pop()
        this.setState({ arrholder: [...this.arr] })
        
    }
    _showItem = () => {


    }

    handletxt = (item) => {
        
        this.setState({
            txt:item
        })
    
        console.log("item==>",this.state.txt);
    }
    toggle = () => {
        this.setState({select:!this.state.select})
        console.log("select",this.state.select)
    }
    render() {
        return (
            <View style={styles.main}>
                <View style={styles.box}>
                    <Txtinput name="search"/>
                </View>
                <View style={styles.box2}>
                  <Button name="Add" onPress={this._addItem}/>
                  <Button name="Delete"/>
                  <Button name="Select all"/>
                </View>
                <FlatList 
                style={{flex:1,backgroundColor:'blue',paddingTop:10,}}
                data={this.state.arrholder}
                width="100%"
                //extraData={this.state.arrholder}
                keyExtractor={(index) => index.toString()}
                renderItem={({item})=>
                <View style={{backgroundColor:'white',paddingTop:15,borderRadius:7,borderWidth:2,borderColor:'blue',flexDirection:'row'}}>
                <TouchableOpacity onPress={this.toggle}>
                <Image source={this.state.select ? require('./assests/check1.png') : require('./assests/uncheck.png')}/>
                </TouchableOpacity>
                <Text style={{paddingLeft:5,color:'white',fontSize:15,alignSelf:'center',color:'black',}}>{item.title}</Text>
                </View>}
                ItemSeparatorComponent={this.flatlistsep}
                />    
            </View>
        )
    }
}

const styles = StyleSheet.create({

    main:{
        flex:1,
        backgroundColor:'white',
    
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
    textinp:{
        height:"100%",
         width:"100%",
         paddingLeft:5,
         borderRadius:5

    },
    button: {
        marginLeft:5,
        height:"50%",
        width:"20%",
        borderRadius:20,
        backgroundColor: "darkgrey",
        justifyContent:'center',
        alignSelf:'center',
        marginTop:5
        
        
      },
      button1: {
        marginLeft:5,
        height:"50%",
        width:"20%",
        borderRadius:20,
        backgroundColor: "darkgrey",
        justifyContent:'center',
        alignSelf:'center',
        marginTop:5
        
      },
      button2: {
        marginLeft:5,
        height:"50%",
        width:"20%",
        borderRadius:20,
        backgroundColor: "darkgrey",
        justifyContent:'center',
        alignSelf:'center',
        marginTop:5
        
      },
      box2:{
        
          height:"10%",
          flexDirection:'row',
          justifyContent:'space-around'
          
      }

})