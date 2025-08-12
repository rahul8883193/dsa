// deep copy of an object

const deepCopy = (obj) => {
  //   return JSON.parse(JSON.stringify(obj)); // Simple way

  // use recursion

  if (typeof obj !== "object" || obj === null) {
    return obj;
  }

  let newObj = Array.isArray(obj) ? [] : {};

  for (const key in obj) {
    newObj[key] = deepCopy(obj[key]);
  }

  return newObj;
};

const original = {
  name: "Bob",
  details: {
    age: 25,
    location: {
      city: "Nowhere",
    },
  },
  skills: ["JS", "React"],
};

const cloned = deepCopy(original);
cloned.details.location.city = "Somewhere";
cloned.skills.push("Node.js");

console.log("Original:", original);
console.log("Cloned:", cloned);

// node deepCopyObject.js

//deepfreeze

function deepFreeze(obj) {
  if (typeof obj === "object" && obj !== null) {
    Object.freeze(obj);
    for (const key of Object.keys(obj)) {
      deepFreeze(obj[key]);
    }
  }
  return obj;
}

// Example:
const arr = [{ name: "Rahul" }, { name: "Deepak" }];
deepFreeze(arr);

arr[0].name = "Changed"; // ❌ Won't change
console.log(arr); // [{ name: "Rahul" }, { name: "Deepak" }]
