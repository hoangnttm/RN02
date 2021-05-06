import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'

export default class GameTemplate extends Component {
    render() {
        return (
            <View key={this.props.game.id *4} style={[styles.box, { backgroundColor: this.props.game.backgroundColor }]}>
                <View style={{ flex: 1 }}>
                    <Image style={styles.image}
                        source={this.props.game.icon}>
                    </Image>
                </View>
                <View style={styles.boxTitle}>
                    <Text style={styles.title}>{this.props.game.title}</Text>
                    <Text style={styles.subtitle}>{this.props.game.subTitle} </Text>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    box: {
        backgroundColor: '#fff',
        borderRadius: 8,
        width:'95%',
        // alignContent: 'space-around',
        // alignItems: 'center',
        paddingVertical: 20,
        flexDirection: 'row',
        marginVertical:5,
    },
    boxTitle: { flex: 3 },
    title: {
        color: '#fff',
        
        fontSize: 16,
        fontWeight: 'bold'
    },
    subtitle: {color: '#fff', fontSize: 13 },
    image: {
        height: 60, width: 60,
        marginLeft:10,
        borderRadius: 10
    }
})

