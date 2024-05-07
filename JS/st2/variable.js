console.log("Hello JavaScript!~!");

/* 
  JavaScript는 타입이 있지만, 없어도 무관
  Java의 경우 int num = 10;
  JavaScript의 경우 num = 10;으로 해도 메모리 할당이 된다.
*/

/* 
  변수
  1. 변수 선언(3개의 키워드) - var, let, const: ES6
    let - 지역변수, 재선언 불가, 호이스팅 시 초기화 안됨 <-> var
    const - 상수
*/

// let name = 'adam';
// console.log(name);

// console.log(age);
// age = 5;
// var age;

// console.log(age);
// name = 4;
// let name;

/* 전역변수: 키워드없이 사용하면 전역변수 */
n = 10;
console.log(n);

let n1 = 100;
console.log(n1);