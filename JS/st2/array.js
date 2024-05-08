/* 배열 */
// 배열생성
const arr1 = new Array();       // new라는 키워드를 통해 생성자 호출
const arr2 = [1, 2, 3, 4, 5];
console.log(arr2);

const fruits = ['🍉', '🍊', '🍓', '🍒', '🍑']
console.log(fruits);

// 기본 for
for(i=0; i<fruits.length; i++) {
  console.log(fruits[i]);
}

// for of
for(let fruit of fruits) {
  console.log(fruit);
}

// forEach
fruits.forEach(function (fruit, index, array){   // 콜백함수: 매개변수처럼 사용되는 함수
  console.log(fruit, index, array);
});

fruits.forEach((fruit, index) => {    // 애로우 함수(화살표 함수)
  console.log(fruit, index);
});

fruits.forEach((fruit) => console.log(fruit));

let ary = [1, 2, 3, 4, 5];
console.log(ary.length);
ary.push(10);     // 배열의 원소를 마지막에 추가한다.
console.log(ary.length);
console.log(ary);
ary.unshift(0);   // 배열의 첫번째 요소로 추가한다.
console.log(ary.length);
console.log(ary);
ary.pop();        // 배열의 마지막 원소를 삭제한다.
console.log(ary.length);
console.log(ary);