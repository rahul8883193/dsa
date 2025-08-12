const str = "rahul is a good boy";

let a = str
  .split(" ")
  .map((x) => x[0].toUpperCase() + x.slice(1))
  .join(" ");
console.log(a);
