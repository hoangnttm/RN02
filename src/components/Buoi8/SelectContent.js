import React, { Component } from 'react'
import { StyleSheet, Image, TouchableOpacity, View } from 'react-native'

export default class SelectContent extends Component {
    render() {
        return this.props.imageArray.map(item => (
            <TouchableOpacity>
                <Image style={styles.buttonImage} source={item.image}></Image>
            </TouchableOpacity>
        ))

    }
}
const styles = StyleSheet.create({
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
    }, buttonImage: {
        width: 60,
        height: 60,
    },
});
