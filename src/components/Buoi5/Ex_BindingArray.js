import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity, StyleSheet, Alert } from 'react-native'
import GameTemplate from './GameTemplate'
import gameData from '../../data/gameData'

export default class Ex_BindingArray extends Component {
    //    gameData=[
    //         {
    //             id:1,
    //             title:'Tiêu đề số 1',
    //             icon:'',
    //             previewImage:require('../img/moon.jpg'),
    //             subTitle:'This is description for onething, bac deva sdjhong Adqw 1',
    //             backgroundColor:'#824671CC'
    //         },
    //         {
    //             id:2,
    //             title:'Tiêu đề số 2',
    //             icon:'',
    //             previewImage:require('../img/moon.jpg'),
    //             subTitle:'When I was a boy, I like watching cloud go by the moon.',
    //             backgroundColor:'#824671CC'
    //         },
    //         {
    //             id:3,
    //             title:'Tiêu đề số 3',
    //             icon:'',
    //             previewImage:require('../img/house.jpg'),
    //             subTitle:'If I were a rich man, I will buy a big house with a pool',
    //             backgroundColor:'#824671CC'
    //         },
    //         {
    //             id:4,
    //             title:'Halaluya heleluya',
    //             icon:'',
    //             previewImage:require('../img/coffee.jpg'),
    //             subTitle:'I always drink a cup of coffe every morning',
    //             backgroundColor:'#824671CC'
    //         },

    //     ];

    renderGame = () => {
        return gameData.map((game, index) => (
            <GameTemplate game={game}/>
        ));

    };


    render() {
        return (
            <View style={styles.container}>
                {this.renderGame()}
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#343434',
        alignItems: 'center',
        justifyContent: 'center'
    }
})


