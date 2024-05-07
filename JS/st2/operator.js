// 일치연산자
let num = 10;
let str = '10';
if(num == str) console.log('같다');   // 값만 비교
if(num === str) console.log('같다');   // 값 + 타입 비교
else console.log('다르다');

console.log(0 == false);        // 동등연산자
console.log(0 === false);       // 일치연산자
console.log('' == false);
console.log('' === false);
console.log(null == undefined);
console.log(null === undefined);

// 제어문 - 선택(if)
const name = 'adam';
if(name === 'adam') {
  console.log("Welcome Adam!!");
} else if (name === 'scott') {
  console.log("Welcome scott");
} else {
  console.log("unknown");
}

console.log(name === 'smith' ? 'yes' : 'no');

// 제어문 - 선택(switch)
const browser = 'Chrome';

switch (browser) {
  case 'IE':
    console.log('Microsoft');
    break;
  case 'FireFox':
    console.log('Mozilla');
    break;
  case 'Chrome':
    console.log('Google');
    break;
  default:
    console.log('unknown');
    break;
}

// 입력한 숫자가 3의 배수인지 확인하는 프로그램 작성
// let num1 = 3;
// let num2 = prompt('숫자를 입력하세요.');

//   if(num2 === null) {
//     alert('다시 입력하세요.');
//     run = false;
//   } else {
//     if(num2 % 3 == 0) {
//       alert('3의 배수입니다.')
//     } else {
//       alert('3의 배수가 아닙니다.')
//     }
//   }


// if(num2 !== null){
//   if(num2 % 3 == 0) {
//     alert('3의 배수입니다.')
//   } else {
//     alert('3의 배수가 아닙니다.')
//   }
// }
// alert('다시 입력하세요.');

// document.open();
// let session = prompt("관심 세션을 선택해주세요. 1. 마케팅 2. 개발 3. 디자인");

// switch(parseInt(session)) {
//   case 1:
//     document.write("<p> 마케팅 세션은 <strong>201호</strong>에서 진행됩니다.");
//     break;
//   case 2:
//     document.write("<p> 개발 세션은 <strong>203호</strong>에서 진행됩니다.");
//     break;
//   case 3:
//     document.write("<p> 디자인 세션은 <strong>205호</strong>에서 진행됩니다.");
//     break;
//   default:
//     alert('잘못입력하였습니다.');
  
// }
// document.close();

// 반복문 - for
/*
for (let i = 5; i > 0; i--) {
  console.log(`for: ${i}`);
}

let sum = 0;
for (let i = 1; i <= 1000; i++) {
  sum += i;
  // console.log(`합: ${sum}`);
}

document.open();
document.write(`1부터 1000까지의 합: ${sum}`);
document.close();

let arys = [1,2,3,4,5];
for(i = 0; i < 5; i++) {
  console.log(arys[i]);
}
for(let ary of arys) {   // 인덱스를 사용할 수 없다.
  console.log(ary);
}
*/

/*
let i = 5;
while(i > 0) {
  console.log(`while: ${i}`);
  i--;
}
*/

/* 
    1. 구구단 출력
    2. 1단부터 9단까지 출력
    3. 0부터 100까지 4의 배수를 출력(continue)
    4. 입력된 숫자만큼 카운터
*/

// 1번
/* 
let inputNum = prompt("숫자를 입력하세요.");
for (j=1; j <=9; j++) {
  let x = inputNum * j;
  document.write(`${inputNum} * ${j} = ${x}`+ "<br>");
}
*/

// 2번
/*
for (j=1; j <=9; j++) {
  for(k=1; k<= 9; k++) {
    let x = j * k;
    document.write(`${j} * ${k} = ${x}`+ "<br>");
  }
}
*/

// 3번
/*
for (i = 0; i<=20; i++) {
  if(i % 4 == 0) {
    continue;
  }
  document.write(`4의 배수: ${i}` + "<br>");
}
*/

/*
  - break문: 조건문도 빠져나가면서 반복문 자체도 탈출
  - continue문: 해당 조건문만 실행하지 않고, 반복문은 이어서 실행하는 제어문
*/

// 4번
/*
let input = prompt('숫자를 입력하세요.');

for(i=1; i<=input; i++) {
  document.write(i + "<br>");
}
*/