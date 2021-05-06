import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native'
import GameTemplate from '../Buoi5/GameTemplate'
import gameData from '../../data/gameData'

export default class GameScrollView extends Component {
    renderGame = () => {
        return gameData.map((game, index) => (
            <GameTemplate game={game}/>
        ));

    };
    renderGame2 = () => {
        return gameData.map((game, index) => (
            <GameTemplate  game={game}/>
        ));

    };

    render() {
        return (
            <View style={styles.container}>
              <ScrollView>

                {this.renderGame()}
                {this.renderGame2()}
                {/* </ScrollView> */}
              </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#343434',
    }
})


