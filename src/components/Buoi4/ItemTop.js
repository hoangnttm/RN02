import React, { Component } from 'react'
import { Text, View ,StyleSheet} from 'react-native'

export default class ItemTop extends Component {
    render() {
        return (
        <View style={styles.child_level2}>
          <View style={[styles.rectangle,{backgroundColor:'#ffffc2'}]}></View>
        </View>
        )
    }
}

const styles=StyleSheet.create({
    child_level2:{
        flex:1,
        flexDirection:'row',
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
});
