import { connect } from 'react-redux';
import PlayerItem from './PlayerItem'
import React, { Component } from 'react'
import { ImageBackground, Image, StyleSheet, Text, View, SafeAreaView, StatusBar, TouchableOpacity } from 'react-native'
import { BackgroundGame, Paper, Player, Bot, Rock, Scissor } from './../../assets/index'
import AntDesign from '../../assets/Icons/index'
import LinearGradient from 'react-native-linear-gradient'

class GameS_P_R extends Component {
    render() {
        //sort-down
        return (
            <ImageBackground style={styles.container} source={BackgroundGame}>
                <StatusBar barStyle='light-content' />
                <View style={styles.overlay}>
                    <SafeAreaView style={{ flex: 1 }}>
                        <View style={styles.playerContent}>
                            <PlayerItem player={this.props.realPlayer} avatar={Player}></PlayerItem>
                            <PlayerItem player={this.props.botPlayer} avatar={Bot}></PlayerItem>

                        </View>
                        <View style={styles.playerContent}>
                            {/* <SelectContent imageArray={this.state.arrayItem}></SelectContent> */}
                        </View>
                        <View style={styles.playArea}>

                            <View style={{ flex: 1 }}>
                                <Text style={styles.infoText}>Score: 9</Text>
                                <Text style={styles.infoText}>Times: 0</Text>
                            </View>
                        </View>
                        <View style={styles.inforContent}>
                            <TouchableOpacity style={styles.buttonPlay}>
                                <LinearGradient colors={['#fc00fc', '#ff9aff']} style={styles.linearGradient}>

                                    <Text style={styles.buttonText}>Play</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttonPlay}>
                                <LinearGradient colors={['#ff7b00', '#fecd34', '#ffe084']} start={{ x: 0.25, y: 0.00 }} end={{ x: 0.75, y: 1.0 }}
                                    locations={[0, 0.5, 1]}
                                    style={styles.linearGradient}>
                                    <Text style={styles.buttonText}>
                                        Reset
                                        </Text>
                                </LinearGradient>
                            </TouchableOpacity>
                            <View></View>
                        </View>
                    </SafeAreaView>
                </View>
            </ImageBackground>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#43d'
    },
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.3)'
        // backgroundColor: '#000',
        // opacity: 0.2,

    },
    playerContent: {
        paddingHorizontal: 10,
        flex: 1,
        // backgroundColor: 'red',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    playArea: {
        flex: 1,
        // backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center'
    },
    playContent: {
        flex: 1,
        //  backgroundColor: 'green',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    inforContent: {
        flex: 1,
        // backgroundColor: 'yellow',
        flexDirection: 'row',
        justifyContent: 'space-evenly',

    },
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
    gameIcon: {
        width: 80,
        height: 80,
    },
    buttonImage: {
        width: 60,
        height: 60,
    },

    infoText: {
        color: '#00fecd',
        fontSize: 30,
        fontWeight: 'bold',
    },
    buttonText: {
        color: '#fff',
        fontSize: 26,
        fontWeight: 'bold',
    },
    buttonPlay: {
        width: 140,
        height: 50,

    },
    buttonPlayReset: {
        width: 140,
        height: 50,
    },
    linearGradient: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    },
});

const mapStateToProps = state => ({
    realPlayer: state.gameReducer.realPlayer,
    botPlayer:state.gameReducer.botPlayer,
    arrayItem:state.gameReducer.arrayItem
});

export default connect(mapStateToProps)(GameS_P_R);