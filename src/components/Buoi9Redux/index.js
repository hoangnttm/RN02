import React, { Component } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { connect } from 'react-redux';
import { countDownAction, countUpAction, } from './redux/actions/countAction';

class Buoi9Reducer extends Component {
    // countUp = (item) => {
    //     this.props.dispatch(countUpAction(item));
    // }
    // countDown = (item) => {
    //     this.props.dispatch(countDownAction(20));
    // }
    render() {
        console.log(this.props);
        return (
            <View style={styles.container}>
                <Text> textInComponent </Text>
                <Text> User :{this.props.userName} </Text>
                <Text> Number : {this.props.countNumber} </Text>
                <View style={styles.btnContent}>
                    <TouchableOpacity style={styles.btnStyle} onPress={() => this.props.countUp(15)}>
                        <Text>Count up</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnStyle} onPress={() => this.props.countDown(10)}>
                        <Text>Count down</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
var styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textStyle: {
        fontSize: 18,
        color: 'green',
    },
    btnContent: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%'
    },
    btnStyle: {
        height: 40,
        width: 120,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fdb'

    }
});
const mapStateToProps = (state) => {
    return {
        countNumber: state.countReducer.number,
        userName: state.userReducer.userName
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        countUp: item => {
            dispatch(countUpAction(item))
        },
        countDown: (item) => {
            dispatch(countDownAction(item))
        }
    };
};
export default connect(mapStateToProps,mapDispatchToProps)(Buoi9Reducer);