import React, { Component } from 'react'
import { StyleSheet,Image, Text, View } from 'react-native'

export default class Ex_Binding1 extends Component {
        game={
            id:1,
            title:'Halaluya heleluya',
            icon:'',
            previewImage:require('../img/moon.jpg'),
            subTitle:'This is description for onething, bac deva sdjhong Adqw',
            backgroundColor:'#824671CC'
        };
        // var styles=StyleSheet.create({
        //     subContainer:{
        //         borderColor:{this.game.backgroundColor},
                
        //     }
        // });
        
 render(){
        return (
            <View style={{flex:1,
                backgroundColor:'#343434',alignItems:'center',justifyContent:'center'}}>
                <Image style={{borderRadius:4}} source={this.game.previewImage}></Image>
                <View style={{backgroundColor: this.game.backgroundColor,
                    borderRadius:8,
                    height:100,
                    width:'95%',
                    marginVertical:5,
                    alignContent:'space-between',
                    alignItems:'center',
                    flexDirection:'row'
                    }}>
                    <Image style={{height:60,width:60,marginHorizontal:5,borderRadius:10}  } source={this.game.previewImage}>

                    </Image>
                    <View style={{flexBasis:'80%',height:60,paddingHorizontal:10}}>
                        <Text style={{color:'#fff',flex:1,fontSize:17,fontWeight:'bold'}}>{this.game.title}

                        </Text>

                        <Text style={{color:'#fff',flex:2,fontSize:12}}>{this.game.subTitle}

                        </Text>
                    </View>
                </View>
            </View>
        )
    }
}

