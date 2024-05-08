// function
// 함수 선언(정의), 호출
/*
func();   // 함수 호출 - 함수가 실행
func() {  // 함수 정의 - 함수를 만든다.
  ~~~
}
*/

// function [함수명](입력) {~~~};
// 함수정의를 만드는게 제일 먼저다. -> 함수 호출이 이루어진다.
// printHello();
function printHello() {   // 함수정의
  console.log("Hello!")   
}

printHello();   // 함수 호출: 함수이름(입력);

function log(message) {   // 함수정의
  console.log(message);
}

log();
log('안뇽');
log(123);

function showError() {
  alert('에러발생, 다시 시도하세요');
}
// showError();
// showError.     - 지원되는 내장 함수들을 볼 수 있다. 함수가 객체이기 때문!

// 입력 파라미터를 객체로 받는 함수
function changeName (obj) {     // 함수 정의
  obj.name = 'coder';
}
const ellie = {name: 'ellie'};    // ellie 객체 생성
console.log(ellie);
changeName(ellie);      // name: ellie를 coder로 변경해주는 함수
console.log(ellie);

// default parameters (add in ES6)
function showMessage(message, from='unknown') {
  console.log(`${message} by ${from}`);
}

showMessage("안녕");

function printAll(...args) {
  for(let i=0; i<args.length; i++) {
    console.log(args[i]);

  }
  for(const arg of args) {
    console.log(arg);
  }

  args.forEach((arg) => {
    console.log(arg);
  })

}
printAll('dream', 'coding', 'javis', 'adam', 1, 2);

console.clear();
// 함수 출력
function add(num1, num2) {
  return num1 + num2;
}
const res = add(10, 20);
console.log(res);

// 함수 표현식: 이름없는 함수를 만든다.(대입형 함수)
let func = function() {}      // 함수를 변수에 할당시킨다.

let showHello = function() {
  console.log("hello");
}
showHello();
let hiHello = showHello;    // 변수를 통해 함수를 전달시킬 수 있다.
hiHello();

// 즉시 실행 함수: 즉시 실행되며 단 한번만 호출되어 다시는 호출할 수 없다.
let result = (function() {
  let a = 10;
  let b = 20;
  return a + b;
}());
console.log(result);

// 입력 파라미터가 있는 즉시 실행함수
let result2 = (function(a, b) {
  return a * b;
}(10, 20));
console.log(result2);

// 화살표 함수
/*let func = () => {
  ~~~
};*/

console.clear();
const simplePrint = function() {
  console.log('simplePrint');
}
console.log(simplePrint);   // 함수 이름은 포인터(주소)
simplePrint();

const simplePrint1 = () => {
  console.log('simplePrint');
}
simplePrint1();
const simplePrint2 = () => 
  console.log('simplePrint');
simplePrint2();

const addNum = (a,b) => {
  return a+b;
}
console.log(addNum(10,20));

const hi1 = () => {
  alert('안녕하세요!');
};
// hi1();

let hi2 = (user) => {
  document.write(user + "님 안녕하세요.");
};
hi2('은지');

// 콜백함수
function randomQuiz(answer, printYes, printNo) {
  if(answer === 'i love you') {
    printYes();
  } else {
    printNo();
  }
}

const printYes = function()  {
  console.log('Yes');
}

const printNo = function()  {
  console.log('No');
}

randomQuiz('i love you', printYes, printNo);