import React,{ Component } from "react";
import { View,Text,StyleSheet,Image } from "react-native";
import ItemBottom from './ItemBottom.js'
import ItemTop from './ItemTop.js'

export class Buoi4 extends Component{
    render(){

        const sayHello='Hello - ';
        return (
            <View style={styles.container}>
      <View style={styles.child_level1}>
      {/* <Image style={styles.image} source={{uri:'http://www.saimonthidan.com/photos/photos/3/16603.jpg'}}></Image> */}
      <Image style={styles.image} source={require('../img/moon.jpg') }></Image>
      <Text style={styles.text} >{sayHello}</Text>
      </View>
        <View style={[styles.child_level1,{backgroundColor:'#c8c8fA',marginTop:5,marginBottom:0}]}>
        <ItemBottom />
        <ItemBottom />
      </View>
    </View>
   );
};
}


const styles=StyleSheet.create({
    image:{
    height:150,
    width:150,
    borderRadius:150,
    borderWidth:5,
    alignSelf:'center',
    borderColor:"#fff",
    },
    child_level1:{
      flex:1,
      backgroundColor:'#A1c99A',
      borderRadius:10,
      marginBottom:5,
    },
   
    container:{
      flex:1,
      paddingVertical:20,
      paddingHorizontal:10,
    },
    text:{
        fontSize:15,
        alignSelf:'center',
        color:'#fff'
    } 
  });