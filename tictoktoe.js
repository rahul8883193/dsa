// import {
//   Text,
//   View,
//   SafeAreaView,
//   StyleSheet,
//   TouchableOpacity,
// } from "react-native";
// import React, { useState, useEffect } from "react";

// export default function App() {
//   let initialArr = Array(9).fill(null);
//   const [player, setPlayer] = useState("X");
//   const [value, setValue] = useState([...initialArr]);
//   const [result, setResult] = useState(null);

//   const handlePress = (i) => {
//     let temp = [...value];
//     temp[i] = player;
//     setValue(temp);
//     if (player == "X") {
//       setPlayer("O");
//     } else {
//       setPlayer("X");
//     }
//   };
//   const winningCombos = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6],
//   ];

//   useEffect(() => {
//     for (let combo of winningCombos) {
//       const [a, b, c] = combo;
//       if ( value[a] === value[b] && value[a] === value[c]) {
//         setResult(value[a]);
//       }
//     }
//     if (!value.includes(null)) setResult("Draw");
//   }, [...value]);
//   return (
//     <SafeAreaView style={styles.container}>
//       <Text>Turn of {player}</Text>
//       <View style={{ flexDirection: "row", flexWrap: "wrap", height: 300 }}>
//         {value.map((v, i) => {
//           return (
//             <TouchableOpacity
//               disabled={!!v}
//               onPress={() => handlePress(i)}
//               style={{
//                 height: "33.33%",
//                 width: "33.33%",
//                 borderWidth: 1,
//                 justifyContent: "center",
//                 alignItems: "center",
//               }}
//             >
//               <Text>{v}</Text>
//             </TouchableOpacity>
//           );
//         })}
//       </View>
//       <Text>{result}</Text>
//       {result ? (
//         <TouchableOpacity
//           onPress={() => {
//             setResult(null);
//             setValue([...initialArr]);
//           }}
//         >
//           <Text>Reset</Text>
//         </TouchableOpacity>
//       ) : null}
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     backgroundColor: "#ecf0f1",
//     padding: 8,
//   },
// });















import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from "react";

const tictoktoe = () => {
let initialArr=Array(9).fill(null)
const [value,setValue]=useState([...initialArr])
const [palyer,setPlayer]=useState('X')
const [result,setResult]=useState(null)



const handlePress=(i)=>{
  let temp=[...value]
  temp[i]=palyer
  setValue(temp)
  if(palyer=='X'){
    setPlayer('O')
  }else{
    setPlayer('X')
  }
}
const combination = [
  [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
];
useEffect(()=>{
for(let combo of combination){
  let [a,b,c]=combo

  if(value[a]===value[b]&&value[a===value[c]]){
    setResult(value[a])
  }
  if(!value.includes(null)) setResult('Draw')
}
},[...value])

  return (
    <View>
      <View style={{height:300}}>
        {value.map((v,i)=>{
          return(
            <Touchableopacity onPress={()=>handlePress(i)}>
             <Text>{v}</Text>
            </Touchableopacity>
          )
        })}
      </View>
      <Text>{result}</Text>
    </View>
  )
}

export default tictoktoe

const styles = StyleSheet.create({})