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
/*
n = 10;
console.log(n);
let n1 = 100;
console.log(n1);
*/

/* 지역변수 */
/*
{
  let name = 'scott';   // 지역변수
  console.log(name);
  name = 'adam';
  console.log(name);
  console.log(n);       // 전역변수 사용 가능 
  console.log(n1);
}

console.log(name);      // 지역변수 사용 안됨
*/

/* 변수 호이스팅 */
var a;
console.log("a의 값은 " + a);
console.log("b의 값은 " + b);
var b;
// console.log("c의 값은 " + c);
// let c;
let d;
console.log("d의 값은 " + d);

console.log(x === undefined);
var x = 3;

var myvar = "my value";
console.log(myvar);

/* 함수 */
(
  function () {
    console.log(myvar);         // undefined
    var myvar = "local value";
    console.log(myvar);
    var m1 = "local";
  }
)();

console.log(myvar);
// console.log(m1);

/* 함수 호이스팅 */
sayHello();
function sayHello() {
  console.log('Hello');
}
// sayHello();

/* 동적 타입 */
let name = 'scott';
console.log(name);
name = 1200;
console.log(name);
name = 'eunji';
const message = `My name is ${name}`;
console.log(message);

// number, string, boolean, null, undefined, symbol(ES6), obj