import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'

export default class BaiTapScrollView extends Component {
    itemArray=[1,2,3,4,5,6,7,8,9,10];
    randomColor=(index)=>{

        let color=Math.floor(Math.random() * 2 ** 24).toString(16).padStart(6, '0');
        console.log(`#${color}`);
        return `#${color}`;
    }
    
    renderItem=()=>{
        // let background='#fad';
        return this.itemArray.map((item,index)=>
            (
                <View key={item} style={[styles.item,{backgroundColor:this.randomColor(item)}]}>
                    <Text> Text {item}</Text>
            </View>
            ));
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                {this.renderItem()}
               </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 20,
        paddingHorizontal:10,
    },
    item: {
        borderRadius:20,
        height: 150,
        marginVertical:2,
        backgroundColor: '#fad',
        alignItems: 'center',
        justifyContent: 'center'
    }

})
