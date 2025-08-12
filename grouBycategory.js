const groupByCategory = (arr, key) => {
  let result = {};
  arr.map((x) => {
    if (result[x[key]]) {
      result[x[key]].push(x);
    } else {
      result[x[key]] = [x];
    }
  });
  console.log(result);
};

const items = [
  { id: 1, name: "Apple", category: "Fruit" },
  { id: 2, name: "Banana", category: "Fruit" },
  { id: 3, name: "Carrot", category: "Vegetable" },
  { id: 4, name: "Cucumber", category: "Vegetable" },
  { id: 5, name: "Orange", category: "Fruit" },
];

const groupedItems = groupByCategory(items, "category");
console.log(groupedItems);

// ootput={
// /{
//   Fruit: [
//     { id: 1, name: 'Apple', category: 'Fruit' },
//     { id: 2, name: 'Banana', category: 'Fruit' },
//     { id: 5, name: 'Orange', category: 'Fruit' }
//   ],
//   Vegetable: [
//     { id: 3, name: 'Carrot', category: 'Vegetable' },
//     { id: 4, name: 'Cucumber', category: 'Vegetable' }
//   ]
// }
