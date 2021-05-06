import React,{Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';
// import {Buoi3} from './src/components/Buoi3/index.js'
// import {Buoi4} from './src/components/Buoi4/index.js'
// import Ex_Binding1 from './src/components/Buoi5/Ex_Binding1.js'
//import Ex_BindingArray from './src/components/Buoi5/Ex_BindingArray.js'
// import Ex_SetState from './src/components/Buoi5/Ex_SetState'
// import BaiTapEmojiProps from './src/components/Buoi6/BaiTapEmojiProps'
// import RenderIconWithMap from './src/components/Buoi6/RenderIconWithMap'
 import GameScrollView from './src/components/Buoi6/GameScrollView'
 import BaiTapScrollView from './src/components/Buoi6/BaiTapScrollView'

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
  return <BaiTapScrollView />

//   return (
//     <View style={styles.container}>
//       <View style={styles.child_level1}>
//       <View style={[styles.child_level2 ]}>
//           <View style={[styles.rectangle,{backgroundColor:'#ffffc2'}]}></View>
//         </View>
//         <View style={styles.child_level2}>
//           <View style={[styles.rectangle,{backgroundColor:'#ffffc2'}]}></View>
//         </View>
//       </View>
//       <View style={[styles.child_level1,{backgroundColor:'#c8c8fA',marginTop:5,marginBottom:0}]}>
//         <View style={[styles.child_level2,{flexDirection:'row'} ]}>
//           <View style={styles.box}></View>
//           <View style={styles.box}></View>
//         </View>
//         <View style={[styles.child_level2,{flexDirection:'row'} ]}>
//           <View style={styles.box}></View>
//           <View style={styles.box}></View>
//         </View>
//       </View>
//     </View>
//   );
 }


export default App;