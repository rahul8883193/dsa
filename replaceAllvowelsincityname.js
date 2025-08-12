function replaceVowels(city) {
  return city.replace(/[aeiouAEIOU]/g, "*");
}

console.log(replaceVowels("Barcelona")); //

// const replaceVowels=(str)=>{

//     let vowel='AEIOUaeiou'
//     let result=''
//     for(let char of str){
//         if(vowel.includes(char)){
//             result+="*"
//         }else{
//             result+=char
//         }
//     }
//     console.log(result)
// }

// replaceVowels("Barcelona")
