let str = "a.b.c.d.e";
let parts = str.split(".");

let nested = parts[parts.length - 1];
for (let i = parts.length - 2; i >= 0; i--) {
  nested = { [parts[i]]: nested };
}

console.log(JSON.stringify(nested));

// let str = "a.b.c.d.e";
// let parts = str.split(".");
//  let nested =parts.reduceRight((acc,curr)=>{
//      return ({[curr]:acc})
//  })
//  console.log(JSON.stringify(nested))
