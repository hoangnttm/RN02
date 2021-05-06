import React, { Component } from 'react'
import { Text, View ,Image, TouchableOpacity} from 'react-native'

export default class Ex_SetState extends Component {
    imgs=[
        {
            id:1,
            name:'angry',
            image:'../../assets/images/angry.png',
            previewImage:require('../../assets/images/angry.png'),
        },
        {
            id:2,
            name:'care',
            image:'../../assets/images/care.png',
            previewImage:require('../../assets/images/care.png'),
        },
        {
            id:3,
            name:'haha',
            image:'../../assets/images/haha.png',
            previewImage:require('../../assets/images/haha.png'),
        },
        {
            id:4,
            name:'like',
            image:'../../assets/images/like.png',
            previewImage:require('../../assets/images/like.png'),
        },
        {
            id:5,
            name:'love',
            image:'../../assets/images/love.png',
            previewImage:require('../../assets/images/love.png'),
        },
        {
            id:6,
            name:'sad',
            image:'../../assets/images/sad.png',
            previewImage:require('../../assets/images/sad.png'),
        },
    ];

    state={previewImage:require('../../assets/images/no_emotion.png'),name:'none-selected'};

    pressEvent=(parameter)=>{
        console.log(parameter);
       let selected= this.imgs.find(x=>x.id==parameter);
       console.log(selected);

       if(selected== undefined) return;
        this.setState({previewImage:selected.previewImage,name:selected.name})
    };
    renderListIcon=()=>{
        return this.imgs.map((image,index)=>(
            <View key={index} style={{height:60,width:60}}>
                <TouchableOpacity onPress={()=>{this.pressEvent(image.id)}}>
                    <Image style={{height:50,width:50,marginHorizontal:5,borderRadius:10}} source={image.previewImage}></Image>
                </TouchableOpacity>
            </View>
        ));
    }

    render() {
        return (
            <View style={{flex:1,backgroundColor:'#DDD',alignItems:'center',justifyContent:'center'}}>
                <View style={{alignItems:'center',justifyContent:'center'}}>
                <View style={{height:35}}>
                        <Text>{this.state.name}</Text>
                </View>
                <View>
                  <Image style={{borderColor:'#fff',height:250,width:250,borderRadius:250,borderWidth:10}} source={this.state.previewImage}></Image>
                </View>
                <View style={{height:80,marginVertical:10,flexDirection:'row',height:150}}>
                    {this.renderListIcon()}
                </View>
                </View>
            </View>
        )
    }
}
