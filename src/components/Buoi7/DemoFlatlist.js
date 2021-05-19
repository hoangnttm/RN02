import React, { Component } from 'react'
import { FlatList, Text, View, StyleSheet } from 'react-native'

export default class DemoFlatlist extends Component {

    state={isRefreshing:false}
    itemArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    randomColor = (index) => {

        let color = Math.floor(Math.random() * 2 ** 24).toString(16).padStart(6, '0');
        console.log(`#${color}`);
        return `#${color}`;
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.itemArray}
                    refreshing={this.state.isRefreshing}
                    
                    onRefresh={()=>{
                        this.setState({isRefreshing:true})
                        console.log("ADsdas");
                        setTimeout(()=>{this.setState({isRefreshing:false})},2000)
                    }}
                    keyExtractor={item => item.toString()}
                    renderItem={({ item }) => {
                        var abc='dasds';
                        return (
                            <View style={[styles.item, { backgroundColor: this.randomColor(item) }]}>
                                <Text> Text {item}</Text>
                            </View>
                        )
                    }}
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 20,
        paddingHorizontal: 10,
    },
    item: {
        borderRadius: 20,
        height: 120,
        marginVertical: 5,
        backgroundColor: '#fad',
        alignItems: 'center',
        justifyContent: 'center'
    }

})
