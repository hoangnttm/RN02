import React,{Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';

// class App extends Component{

//   render(){
//     return (
//       <View style={{
//         flex:1,
//       }}>
//         <View style={{
//           flex:1,
//           backgroundColor:'red'
//           }}/>
//         <View style={{flex:2,backgroundColor:"green"}}/>
//       </View>
//     );
//   }
// }

const App=()=>{
  // return (
  //   <View style={styles.container}>
  //     <View style={styles.box}>
  //       <Text style={styles.text}>Purple : #C9C9FF</Text>
  //     </View>
  //     <View style={[styles.box,{backgroundColor:'#3D85C6'}]}>
  //       <Text style={styles.text}>Blue : #3D85C6</Text>
  //     </View>
  //     <View style={[styles.box,{backgroundColor:'#96CC96'}]}>
  //       <Text style={styles.text}>Green : #96CC96</Text>
  //     </View>
  //     <View style={[styles.box,{backgroundColor:'#F4B940'}]}>
  //       <Text style={styles.text}>Yellow : #F4B940</Text>
  //     </View>
  //   </View>
  // );

  return (
    <View style={styles.container}>
      <View style={styles.child_level1}>
      <View style={[styles.child_level2 ]}>
          <View style={[styles.rectangle,{backgroundColor:'#ffffc2'}]}></View>
        </View>
        <View style={styles.child_level2}>
          <View style={[styles.rectangle,{backgroundColor:'#ffffc2'}]}></View>
        </View>
      </View>
      <View style={[styles.child_level1,{backgroundColor:'#c8c8fA',marginTop:5,marginBottom:0}]}>
        <View style={[styles.child_level2,{flexDirection:'row'} ]}>
          <View style={styles.box}></View>
          <View style={styles.box}></View>
        </View>
        <View style={[styles.child_level2,{flexDirection:'row'} ]}>
          <View style={styles.box}></View>
          <View style={styles.box}></View>
        </View>
      </View>
    </View>
  );
}

const styles=StyleSheet.create({

  child_level1:{
    flex:1,
    backgroundColor:'#A1c99A',
    borderRadius:10,
    marginBottom:5,
  },
  child_level2:{
    flex:1,
  },
  container:{
    flex:1,
    paddingVertical:20,
    paddingHorizontal:10,
  }, 
  box:{
    flex:1,
    borderRadius:10,
    margin:15,
     backgroundColor:'#4f82c0',
    // justifyContent:'center',
    // alignItems:'center'
  },
  rectangle:{
    flex:1,
    borderRadius:10,
    marginVertical:25,
    marginHorizontal:15,
     backgroundColor:'#4f82c0',
    // justifyContent:'center',
    // alignItems:'center'
  },
  text:{
    // justifyContent:'center',
    textAlign:'center',
    // alignItems:'center',
    // justifyContent:'center'
  },
 
});

export default App;