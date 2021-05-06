import React, { Component } from 'react';
import {View,Text,StyleSheet} from 'react-native';

export class Buoi3 extends Component{
    render(){
        return (

            <View style={styles.container}>
             <View style={styles.box}>
               <Text style={styles.text}>Purple : #C9C9FF</Text>
             </View>
             <View style={[styles.box,{backgroundColor:'#3D85C6'}]}>
               <Text style={styles.text}>Blue : #3D85C6</Text>
             </View>
             <View style={[styles.box,{backgroundColor:'#96CC96'}]}>
               <Text style={styles.text}>Green : #96CC96</Text>
             </View>
             <View style={[styles.box,{backgroundColor:'#F4B940'}]}>
               <Text style={styles.text}>Yellow : #F4B940</Text>
             </View>
           </View>
            );
    };
}


const styles=StyleSheet.create({
    
  child_level1:{
    flex:1,
    backgroundColor:'#A1c99A',
    borderRadius:10,
    marginBottom:5,
  },
  child_level2:{
    flex:1,
  },
  container:{
    flex:1,
    paddingVertical:20,
    paddingHorizontal:10,
  }, 
  box:{
    flex:1,
    borderRadius:10,
    margin:15,
     backgroundColor:'#4f82c0',
    // justifyContent:'center',
    // alignItems:'center'
  },
  rectangle:{
    flex:1,
    borderRadius:10,
    marginVertical:25,
    marginHorizontal:15,
     backgroundColor:'#4f82c0',
    // justifyContent:'center',
    // alignItems:'center'
  },
  text:{
    // justifyContent:'center',
    textAlign:'center',
    // alignItems:'center',
    // justifyContent:'center'
  },
 
});