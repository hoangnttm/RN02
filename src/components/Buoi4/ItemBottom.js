import React, { Component } from 'react'
import { Text,StyleSheet, View } from 'react-native'

export default class ItemBottom extends Component {
    render() {
        return (
            <View style={[styles.child_level2,{flexDirection:'row'} ]}>
                <View style={styles.box}></View>
                <View style={styles.box}></View>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    child_level2:{
        flex:1,
        flexDirection:'row',
    },
    box:{
        flex:1,
        borderRadius:10,
        margin:15,
         backgroundColor:'#4f82c0',
        // justifyContent:'center',
        // alignItems:'center'
    }

});
