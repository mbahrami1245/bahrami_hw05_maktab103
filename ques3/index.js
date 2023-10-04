

function sortByAge(people) {
  people.sort(function (a, b) {
    return a.age - b.age;
  });
}

const people = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 },
];

sortByAge(people);

console.log(people);