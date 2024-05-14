// join(): array -> string
/*
const fruits = ['apple', 'banana', 'orange'];
const result = fruits.join(',');
console.log(result);
*/

// split()
const fruits = '🍉,🍅,🍌,🥥';
const result = fruits.split(',');
console.log(result);

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}

const students = [
  new Student('A', 29, true, 45),
  new Student('B', 29, false, 90),
  new Student('C', 29, true, 45),
  new Student('D', 29, false, 45),
  new Student('E', 29, false, 45)
];

{
  const result = students.find(function(students, index) {
    // console.log(students, index);
    return students.score === 90;
  });
  console.log(result);
}

{ // 전부 리턴
  console.clear();
  const result = students.filter((student) => student.enrolled)
  console.log(result);
}

{
  const result = students.map((student) => student.score);
  console.log(result);
}