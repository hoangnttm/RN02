import { connect } from 'react-redux';
import PlayerItem from './PlayerItem'
import React, { Component } from 'react'
import { ImageBackground, Image, StyleSheet, Text, View, SafeAreaView, StatusBar, TouchableOpacity, Alert } from 'react-native'
import { BackgroundGame, Paper, Player, Bot, Rock, Scissor } from './../../assets/index'
import AntDesign from '../../assets/Icons/index'
import LinearGradient from 'react-native-linear-gradient'
import PlayerArea from './PlayerArea';
import GameResult from './GameResult';
import { play, reset, showResult } from './redux/actions/gameAction';

class GameS_P_R extends Component {

    onPressPlayButton = () => {
        if (this.props.times === 0) {
            Alert.alert("Game over", "Hết lượt mẹ nó dzoi");
            return;
        }
        const random = setInterval(() => {
            const id = Math.floor(Math.random() * 3);
            this.props.playPress(id);
        }, 100);
        setTimeout(() => {
            clearInterval(random);
            this.props.compareResult();
        }, 2000)
    };
    // sort-down
    //  console.log(this.props.realPlayer);
    render() {
        return (
            <ImageBackground style={styles.container} source={BackgroundGame}>
                <StatusBar barStyle='light-content' />
                <View style={styles.overlay}>
                    <SafeAreaView style={{ flex: 1 }}>
                        <View style={styles.playerContent}>
                            <PlayerItem player={this.props.realPlayer} avatar={Player}></PlayerItem>
                            <PlayerItem player={this.props.botPlayer} avatar={Bot}></PlayerItem>

                        </View>
                        <View style={styles.playArea}>
                            <View style={styles.playContent}>
                                <PlayerArea ></PlayerArea>
                            </View>
                            <GameResult></GameResult>
                        </View>
                        <View style={{flex:1,alignItems:'center'}}>

                            <View style={styles.inforContent}>
                                <TouchableOpacity onPress={this.onPressPlayButton} style={styles.buttonPlay}>
                                    <LinearGradient colors={['#fc00fc', '#ff9aff']} style={styles.linearGradient}>
                                        <Text style={styles.buttonText}>Play</Text>
                                    </LinearGradient>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={this.props.playReset} style={styles.buttonPlay}>
                                    <LinearGradient colors={['#ff7b00', '#fecd34', '#ffe084']} start={{ x: 0.25, y: 0.00 }} end={{ x: 0.75, y: 1.0 }}
                                        locations={[0, 0.5, 1]}
                                        style={styles.linearGradient}>
                                        <Text style={styles.buttonText}>
                                            Reset
                                        </Text>
                                    </LinearGradient>
                                </TouchableOpacity>
                            </View>
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
        width: '100%',
        // backgroundColor: 'red',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    playArea: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    playContent: {
        flex: 1,
        flexDirection: 'row',
        width: '80%',
        justifyContent: 'space-between',
    },
    inforContent: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        paddingVertical:15,
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
    botPlayer: state.gameReducer.botPlayer,
    arrayItem: state.gameReducer.arrayItem,
    times: state.gameReducer.times,
});
const mapDispatchToProps = dispatch => {
    return {
        playPress: (id) => dispatch(play(id)),

        playReset: () => dispatch(reset()),
        compareResult: () => dispatch(showResult())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(GameS_P_R);