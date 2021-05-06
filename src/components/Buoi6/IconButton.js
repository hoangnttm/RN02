import React, { Component } from 'react'
import { Text, View,Image,StyleSheet,TouchableOpacity } from 'react-native'
import images from '../../assets/index'
export default class IconButton extends Component {
        render() {
            console.log(this.props.icon);
            return (
                <TouchableOpacity onPress={this.props.onPressIcon}
                        style={styles.Button} >
                        <Image style={styles.ButtonImage} source={this.props.image} />
                </TouchableOpacity>
            );
        }
    }

    const styles = StyleSheet.create({
        Container : {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
    
        rowContainer: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
        },
    
        Button: {
           flex:1
        },
    
        ButtonImage: {
            width: 50,
            height: 50, 
        }
    })
