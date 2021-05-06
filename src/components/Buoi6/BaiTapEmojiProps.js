import React, { Component } from 'react'
import { Text, View ,Image, BackHandler} from 'react-native'
import IconButton from './IconButton.js';
import {LoveIcon,HahaIcon,AngryIcon,CareIcon,SadIcon,LikeIcon,NoEmojiIcon} from '../../assets/index'
export default class BaiTapEmojiProps extends Component {
    state={
        icon:LoveIcon,
    };

    pressIcon=(icon)=>{
        console.log(icon);
     this.setState({icon:icon})   
    }
    render() {
        return (
            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                <Image style={{height:250,width:250}} source={this.state.icon}></Image>
                <View style={{flexDirection:'row',marginVertical:20}}>

                <IconButton image={LoveIcon} onPress={()=>{this.pressIcon(LoveIcon)}}> </IconButton>
                <IconButton image={HahaIcon} onPress={()=>{this.pressIcon(HahaIcon)}}> </IconButton>
                <IconButton image={AngryIcon} onPress={()=>{this.pressIcon(AngryIcon)}}> </IconButton>
                <IconButton image={LikeIcon} onPress={()=>{this.pressIcon(LikeIcon)}}> </IconButton>
                <IconButton image={CareIcon} onPress={()=>{this.pressIcon(CareIcon)}}> </IconButton>
                <IconButton image={SadIcon} onPress={()=>{this.pressIcon(SadIcon)}}> </IconButton>
                </View>
            </View>
        )
    }
}
