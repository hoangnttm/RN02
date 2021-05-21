import React, { Component } from 'react'
import { StyleSheet,Image, Text, View } from 'react-native'

export default class PlayerItem extends Component {
    render() {
        return (
            <View key={this.props.player.id} style={{ alignItems: 'center' }}>
                <View style={styles.borderItem}>
                    <Image style={styles.gameIcon} source={this.props.player.image}></Image>
                </View>
                <View style={styles.triangle}></View>
                <Image style={styles.playerIcon} source={this.props.avatar}></Image>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    borderItem: {
        width: 90,
        height: 90,
        borderRadius: 10,
        marginHorizontal: 10,
        borderWidth: 3,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'yellow',
        backgroundColor: '#111'
    },
    triangle: {
        width: 0,
        height: 0,
        backgroundColor: "transparent",
        borderStyle: "solid",
        borderLeftWidth: 7,
        borderRightWidth: 7,
        borderTopWidth: 10,
        borderLeftColor: "transparent",
        borderRightColor: "transparent",
        borderTopColor: "yellow",
        // transform:[{rotate:'180deg'}]
    },
    playerIcon: {
        width: 90,
        height: 90,
    },
    gameIcon: {
        width: 80,
        height: 80,
    },
})
