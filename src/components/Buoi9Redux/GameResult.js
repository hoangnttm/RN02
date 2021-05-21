import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux';

class GameResult extends Component {
    render() {
        return (
            <View>
                <Text style={styles.infoText}>Score: {this.props.score}</Text>
                <Text style={styles.infoText}>Times: {this.props.times}</Text>
            </View>
        )
    }

}
const styles = StyleSheet.create({
    infoText: {
        color: '#00fecd',
        fontSize: 30,
        fontWeight: 'bold',
    },
});

const mapStateToProps = state => ({
    score: state.gameReducer.score,
    times: state.gameReducer.times,

});
export default connect(mapStateToProps)(GameResult);