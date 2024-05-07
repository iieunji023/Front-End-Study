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
/*
console.log(typeof(100));      // typeof()는 타입 확인
let pi = 3.14;
console.log(typeof(pi));      // number: -2^53 ~ 2^53
let nothing = null;
console.log(`value: ${nothing}, type=${typeof nothing}`);
let y;
console.log(`value: ${y}, type=${typeof y}`);

const infinity = 1/0;
console.log(infinity);
const negativeInfinity = -1 / 0;
console.log(negativeInfinity);
const nAn = 'not a number' / 2;
console.log(nAn);
*/

const char = 'a';
const smith = 'smith';
const greeting = 'Hello ' + smith;
console.log(greeting);
console.log(`value: ${char}, type: ${typeof char}`);
console.log(`value: ${smith}, type: ${typeof smith}`);
console.log(`value: ${greeting}, type: ${typeof greeting}`);

const msg = 18 + 'old';
console.log(msg);
const i = '나는 ';
const age = 30;
console.log(i + age + '살 입니다.');
/* boolean 
   false: 0, null, undefined, NaN
   true: any other value.
*/

/* symbol */
const str1 = 'strId';
const str2 = 'strId';
console.log(str1 == str2);
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1);
console.log(typeof(symbol1));
console.log(symbol1 == symbol2);

const symbol3 = Symbol.for('id');
const symbol4 = Symbol.for('id');   // 입력 문자열로 키 생성

console.log(symbol3);
console.log(typeof symbol3);
console.log(symbol3 == symbol4);

let str = 'javascript';
let len = str.length;
console.log(len);

let text = 'hello';
console.log(text.charAt(0));
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
// console.log(text.charAt(0));
text = '10' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '22' + '2';
console.log(`value: ${text}, type: ${typeof text}`);