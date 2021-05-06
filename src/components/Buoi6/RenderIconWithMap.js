import React, { Component } from 'react'
import { Text, View ,Image, BackHandler} from 'react-native'
import IconButton from './IconButton.js';
import {LoveIcon,HahaIcon,AngryIcon,CareIcon,SadIcon,LikeIcon,NoEmojiIcon} from '../../assets/index'
export default class RenderIconWithMap extends Component {
    state={
        icon:LoveIcon,
    };
    iconArray=[LoveIcon,HahaIcon,AngryIcon,CareIcon,SadIcon,LikeIcon];
    pressIcon=(icon)=>{
        console.log(icon);
     this.setState({icon:icon})   
    }
    render() {
        return (
            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                <Image style={{height:250,width:250}} source={this.state.icon}></Image>
                <View style={{flexDirection:'row',marginVertical:20}}>

                {/* <IconButton image={LoveIcon} onPress={()=>{this.pressIcon(LoveIcon)}}> </IconButton> */}
              {
                  this.iconArray.map((item,index)=>{
                   return(<IconButton key={index} image={item} onPressIcon={()=>{this.pressIcon(item)}}> </IconButton>)

                  })
              }
                </View>
            </View>
        )
    }
}
