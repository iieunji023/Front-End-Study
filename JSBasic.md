## 정리


```
document.getElementById("out");
```

> [document.getElementById](https://kyounghwan01.github.io/blog/JS/JSbasic/getElementById/#%E1%84%89%E1%85%A1%E1%84%8B%E1%85%AD%E1%86%BC%E1%84%87%E1%85%A5%E1%86%B8)
* [참고](https://meaningone.tistory.com/316)
  * 태그에 있는 id 속성을 사용하여 해당 태그에 접근하여 하고 싶은 작업을 할 때 쓰는 함수
  * 해당 id가 없는 경우 null 에러가 발생

    <details>
      <summary>코드</summary>
      
      ```
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
      </head>
      <body>
        <div id="output">
          <script>
            let outputElement = document.getElementById("output");
            outputElement.innerHTML = "Hello InnerHTML";
          </script>
        </div>
      </body>
      </html>
      ```

    </details>

    <details>
      <summary>결과</summary>

    ![innerHTML](/img/innerHTML.png)
    </details>

> 웹페이지 콘솔창에서도 사용 가능

  <details>
      <summary>결과</summary>

  ![console](/img/console_alert.png)

  ![console](/img/console_alert1.png)

  ![console](/img/console_alert2.png)

  ![console](/img/console_alert3.png)

  ![console](/img/console_alert4.png)
  </details>

> 내부에서 스크립트 사용
  * ```<script>``` 태그는 HTML문서 내부에서 자바스크립트를 사용할 수 있게 해준다.
  * 내부에서 스크립트를 사용하는 방식은 스크립트의 사용량이 간단할 때 사용한다.
  * **```<script>```를 head에 쓰게 되면** HTML을 쭉 parsing하다가 script 태그가 보이면 HTML을 parsing하는것을 잠시 멈추고 필요한 JS 파일을 서버에서 다운받아서 그것을 실행한 다음에 파싱하는 부분으로 넘어간다.
    * 자바스크립트파일의 사이즈가 큰 경우에는 페이지가 로드 되는데 많은 시간이 소요되어 그냥 script를 head에 포함하는것은 좋지않다.
  * body에 ```<script>```를 사용하면 전체를 다 볼 수 있음
  * 스크립트 양이 많아지면, **외부에 스크립트파일을 만들어서 불러오기 형식**으로 쓰는게 좋음

> 외부에 있는 스크립트 사용
```
<script src="variable.js"></script>
```

> [async와 defer의 차이](https://velog.io/@cherrycock/script-async%EC%99%80-defer%EC%9D%98-%EC%B0%A8%EC%9D%B4)
1. async
* async 옵션으로 다수의 script 파일들을 다운로드 받게 되면
**정의된 script 순서에 상관없이 다운로드 된 파일을 우선적으로 실행**한다.
  * JS파일이 순서에 의존적이라면 문제가 생길 수 있다.

2. defer
* defer 같은경우는 **모든 script 파일들이 다운로드 된 이후에 실행** 되기 때문에 훨씬 안전하다.
* defer를 명시했을 때 js파일에서 document.write()를 사용하기 위해 document.open()과 document.close() 해주어야 한다.

#### [async와 defer 정리](https://yceffort.kr/2020/10/defer-than-async)
* async로 로드된 스크립트는 다운로드가 완료되면 즉시 구문 분석을 하고 실행된다. 그에 반해 defer는 HTML 문서가 파싱되기 전까지 실행되지 않는다.
* async는 순서없이 로드가 가능하지만 defer는 마크업 순서대로 로딩된다.

## 용어 및 개념 정리
* console.log()
* document.write()
* window.alert()
* document.getElementById().innerHTML

> [let, const, var](https://velog.io/@elma98/%EA%B8%B0%EC%88%A0-%EB%A9%B4%EC%A0%91-%EB%8C%80%EB%B9%84-var-let-const%EC%9D%98-%EC%B0%A8%EC%9D%B4%EC%A0%90%EA%B3%BC-Hoisting)
> 참고자료
* [var, let, const](https://velog.io/@ljh305/var-let-const%EC%9D%98-%EC%B0%A8%EC%9D%B4-%ED%98%B8%EC%9D%B4%EC%8A%A4%ED%8C%85%EA%B3%BC-%EC%8A%A4%EC%BD%94%ED%94%84)

* 변수를 선언할 때 초기값을 할당(초기화)하지 않으면 자동으로 <U>undefined</U> 값으로 초기화된다.

### var: 함수 레벨 스코프
```
var variable;
console.log(variable) // undefined
```
* <U>var</U>로 선언하면 **같은 이름으로 중복선언**이 가능합니다.

```
var variable = 1;
var variable = 2;
console.log(variable) // 2
```

### let: 지역변수
![let](/img/let.png)
  * undefined도 하나의 타입

* **초기화해주지 않아도 재할당이 가능**하다.
```
let count;
console.log(count) // undefined
count = 0;
console.log(count) // 0;
```

* 재선언이 불가하다.
![let](/img/let1.png)

### const: 상수
* **중복선언과 재할당이 불가능**하며 **선언과 동시에 초기화** 해주어야한다.
```
const constance = 0;
constance = 1; // TypeError: Assignment to constant variable.
const initial; // Uncaught SyntaxError: Missing initializer in const declaration
const count = 0;
let count; // SyntaxError: Identifier 'count' has already been declared.
```


### 변수 호이스팅
> **호이스팅**이란?
* 자바스크립트 엔진은 소스코드를 한 줄씩 읽으며 순차적으로 실행하기 전에 <br>
  변수 선언을 포함한 모든 선언문을 찾아내어 먼저 실행한다.(필요한 메모리 공간을 미리 할당)
* 마치 함수 안의 선언들을 모두 끌어올려 해당 함수 유효 범위 최상단에 선언된 것과 같은 특징을 **호이스팅**이라고 한다.

* 선언 전에 초기화나 함수 호출이 가능하다.
* 이는 변수 선언이 런타임이 아니라 그 이전단계에서 먼저 실행되기 때문이다.

* **var는 호이스팅시 초기화**가 되지만, let은 호이스팅시 초기화되지 않는다.
   <details>
    <summary>코드_var</summary>

    ```
    console.log(age);
    age = 5;
    var age;
    ```

    * 호이스팅이 되면 아래 코드와 같은 형태
    ```
      var age;
      console.log(age);
      age = 5;
    ```
  </details>

  <details>
    <summary>결과</summary>

  ![var](/img/var1.png)
  </details>

  <details>
    <summary>코드_let</summary>

    ```
    console.log(age);
    name = 4;
    let name;
    ```
  </details>
  
  <details>
    <summary>결과</summary>

  ![let](/img/let2.png)
  </details>

  <details>
    <summary>정리</summary>

    ```
    /* 변수 호이스팅 */
    var a;
    console.log("a의 값은 " + a);
    console.log("b의 값은 " + b);
    var b;
    console.log("c의 값은 " + c);
    let c;
    let d;
    console.log("d의 값은 " + d);

    console.log(x === undefined);
    var x = 3;
    ```
  </details>
  
  <details>
    <summary>결과</summary>

  ![호이스팅](/img/hosting.png)
  ![호이스팅](/img/hosting1.png)
  </details>

### 전역변수/지역변수
```
/* 전역변수: 키워드없이 사용하면 전역변수 */
n = 10;
console.log(n);
let n1 = 100;
console.log(n1);

/* 지역변수 */
{
  let name = 'scott';   // 지역변수
  console.log(name);
  name = 'adam';
  console.log(name);
  console.log(n);       // 전역변수 사용 가능 
  console.log(n1);
}

console.log(name);      // 지역변수 사용 안됨
```

![전역변수/지역변수](/img/var.png)

### [함수](https://velog.io/@surim014/%EC%9B%B9%EC%9D%84-%EC%9B%80%EC%A7%81%EC%9D%B4%EB%8A%94-%EA%B7%BC%EC%9C%A1-JavaScript%EB%9E%80-%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80-part-6-Function)
```
(
  function () {
    console.log(myvar);         // undefined
    var myvar = "local value";
    console.log(myvar);
  }
)();
```
![함수](img/fun.png)

> 함수 호이스팅
```
sayHello();
function sayHello() {
  console.log('Hello');
}
// sayHello();
```

![함수호이스팅](img/funhosting.png)

### 동적 타입
```
let name = 'scott';
console.log(name);
name = 1200;
console.log(name);
name = 'eunji';
const message = `My name is ${name}`;
console.log(message);
```

* 변수를 사용할 때는 백틱(``)을 사용

![동적타입](img/bb.png)

#### 입력/출력방법
> 출력방법
1. console.log - 콘솔창에 출력
2. document.write - 웹페이지 문서에 출력
3. alert()  - 윈도우 알림창에 출력
4. innerHTML  - 웹페이지에 출력

> 버튼 입력방법
1. alert()
2. prompt()
3. confirm()

  <details>
    <summary>예제_정수합</summary>

    const num1 = prompt('첫번째 정수를 입력하세요');
    const num2 = prompt('두번째 정수를 입력하세요')
    alert('두 정수의 합은 ' + (parseInt(num1)+parseInt(num2)) + '입니다.');
  </details>

🚫 prompt는 String 문자열로 받아진다.<br>
[참고](https://velog.io/@p_seo_hn/prompt%EB%A1%9C-%EB%B0%9B%EC%9C%BC%EB%A9%B4-%EC%99%9C-string%EC%9C%BC%EB%A1%9C-%EB%B0%9B%EC%95%84%EC%A7%88%EA%B9%8C)
> 문자열로 받아지는 이유
* JS는 코드가 실행될 때 데이터타입이 정해지는데, prompt로 입력을 받을 때 어떤 종류의 데이터가 입력될지 확정할 수 없기 때문에 **일관성을 유지하기 위해 입력값을 문자열로 받는다**.

> 문자열을 숫자형으로 바꾸는 방법
```
const input = prompt("숫자를 입력해주세요")
const num1 = parseInt(input)
const num2 = parseFloat(input)
const num3 = Number(input)
```

### 배열
> 배열생성
```
const arr1 = new Array();       // new라는 키워드를 통해 생성자 호출
const arr2 = [1, 2, 3, 4, 5];
console.log(arr2);
```

> 배열출력
  <details>
    <summary>코드</summary>
    
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
    fruits.forEach(function(fruit, index, array){   // 콜백함수: 매개변수처럼 사용되는 함수
      console.log(fruit, index, array);
    });

    fruits.forEach((fruit, index) => {
      console.log(fruit, index);
    });
  </details>

> [배열(array) 의 push(), pop(), unshift(), shift() 함수](https://electronic-moongchi.tistory.com/67)
  <details>
    <summary>코드</summary>

    /let ary = [1, 2, 3, 4, 5];
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
  </details>

> [배열(array) 의slice(), splice() 함수](https://www.daleseo.com/js-array-slice-splice/#google_vignette)

  <details>
    <summary>splice()</summary>

    // splice(시작인덱스, 삭제개수, 추가개수)
    const fruits = ['🍒', '🍑'];

    console.log(fruits);
    fruits.push('🍉', '🍊', '🍓');
    console.log(fruits);

    fruits.splice(1, 1);    // 1번 인덱스에서 하나를 삭제한다.
    console.log(fruits);
    fruits.splice(2,2);     // 2번 인덱스에서 2개를 삭제
    console.log(fruits);
    fruits.splice(1, 1, '🍌', '🥝');
    console.log(fruits);
  </details>
  
  <details>
    <summary>결과</summary>

  ![splice](/img/splice.png)
  </details>

> concat
```
const fruit2 = ['🍈', '🥥'];
const newFruits = fruits.concat(fruit2);
console.log(newFruits);
```

> searching
```
console.clear();
console.log(fruits);
console.log(fruits.indexOf('🍒'));    // 인덱스 리턴
console.log(fruits.indexOf('🍌'));
console.log(fruits.includes('🍒'));   // includes(): 있는지 없는지 확인후 true/false 반환
```


✅ 콜백함수
* [참고1](https://velog.io/@minidoo/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%BD%9C%EB%B0%B1-%ED%95%A8%EC%88%98Callback-Function)
* [참고2](https://inpa.tistory.com/entry/JS-%F0%9F%93%9A-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%BD%9C%EB%B0%B1-%ED%95%A8%EC%88%98)
* 파라미터로 함수를 전달하는 함수
* 예를 들어, forEach 함수의 경우 함수 안에 익명의 함수를 넣어서 forEach 문을 동작시킨다.

```
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
```

✅ 즉시실행함수
> 즉시 실행 함수는 즉시 실행되며 단 한번만 호출되어 다시는 호출할 수 없다.
```
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
```

✅ 화살표함수
```
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
```

## [타입스크립트](https://velog.io/@taeg92/TypeScript-%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0)
* 타입스크립트는 자바스크립트에 타입을 부여한 언어
* 자바스크립트의 확장된 언어라고 볼 수 있다.

<br>

## DOM(Document Object Model) 
[참고1](https://velog.io/@zad1264/DOM-%EC%9D%B4%EB%9E%80-DOM-TREE-DOM-API-DOM-%EC%A0%95%EB%A6%AC) <br>
[참고2](https://velog.io/@ko9612/JavaScript-DOM)

* 자바스크립트를 HTML에 적용하기 위해서 HTML의 요소를 문서 객체 형태로 이해하는 것

> DOM API
* Document: <html> dom 트리의 루트노드
* Element: 각 태그
* attribute: 속성
* style: css
* collection: 배열 ..

<br>

> HTMLCollection
* JavaScript가 문서 객체 접근해서 받아오는 리턴 타입(배열)

 *  HTML 문서 전체에 적용: document.getElementByTagName(name);
 *  특정 요소 내 적용: element.getElementByTagName(name);
 *  반환값은 태그 이름에 해당하는 모든 요소를 HTMLCollection 객체로 반환

<br>

> HTMLCollection 객체를 반환하는 메서드(DOM 요소에 접근)
1. getElementByTagName('name'): 태그 이름과 일치하는 모든 요소를 찾아서 HTMLCollection 객체로 반환
2. getElementByClassName('name'): 
3. getElementById('id')
 
* querySelector(): CSS선택자와 일치하는 첫번째 요소의 객체를 반환 null
* querySelectorAll(): CSS선택자와 일치하는 모든 요소 객체를 반환

<br>

> textContent
* 노드의 text에 접근하여 출력

> innerHTML: HTML, XML에 접근하여 출력

### [innerHTML vs innerText vs textContent](https://hianna.tistory.com/483)

#### button 이벤트 주기
1. html 내에서 **onClick** 
  <details>
    <summary>querySelector.html</summary>

    <body>
    <p id="welcome">환영합니다.</p>
    <script>
      const changeColor = (newColor) => {     // 애로우 함수(화살표 함수)
        // 환영합니다 접근
        const welc = document.getElementById('welcome');
        welc.style.color = newColor;

      }
    </script>
    <button type="button" onclick="changeColor('red');">빨간색</button>
    <button type="button" onclick="changeColor('blue')">파란색</button>
  </body>
  </details>


2. JS에서 **addEventListener**
  <details>
    <summary>querySelector.html</summary>

    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
    </head>
    <body>
      <!-- 
        <ul>
        <li>김밥</li>
        <li>라면</li>
        <li>떡볶이</li>
      </ul>
      -->
      <button id="myButton">클릭</button>
      <script src="querySelector.js"></script>
    </body>
    </html>
  </details>

  <details>
    <summary>querySelector.js</summary>

    // li 첫번째 요소에 접근
    // document.querySelector("li").style.backgroundColor = 'red';

    const btn = document.querySelector("#myButton");
    btn.addEventListener("click", () => {
      alert('버튼이 클릭되었습니다.');
    } );
  </details>

> 예제: 도형 위로 마우스 포인터 올리기
<br />
🚫 getElementById를 getElementsByClassName()으로 바꾸니 오류 발생
* getElementById와 달리 getElementsByClassName는 중복된 값이 허용되므로 인덱스 번호까지 적어줘야 한다.
<br />

[참고](https://velog.io/@lejhn1/JavaScript-getElementsByClassName-%EC%9D%B4%EB%B2%A4%ED%8A%B8%EB%A6%AC%EC%8A%A4%EB%84%88)

```
const box = document.getElementById("container");
const box = document.getElementsByClassName("container")[0];
```

<details>
    <summary>ex2.html</summary>

    <body>
      <div id="wrap">
        <p>도형 위로 마우스 포인터를 올려놓으세요.</p>
        <div id="container">
        </div>
      </div>
      
      <script>
        const box = document.getElementById("container");
        box.addEventListener("mouseover", circle);
        box.addEventListener("mouseout", originBox);

        function circle() {
          box.style.borderRadius = '50px';
          box.style.background = 'green';

        }

        function originBox() {
          box.style.borderRadius = '0px';
          box.style.background = '';
        }
      </script>
    </body>
</details>

## AJAX(Asynchronous Javascript And XML)
* [참고](https://scoring.tistory.com/entry/AJAX%EB%9E%80-JQuery%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%9C-AJAX%EC%82%AC%EC%9A%A9%EB%B2%95)
* 웹에서 동적으로 데이터를 주고 받는 기술
* XHR(XMLHttpRequest) 오브젝트
  * 브라우저에서 제공하는 API -> fetch() API
  <br>
  ===> JSON(Javascript Object Notation) data format{key:value}
  <br>
  <br>

  > [stringify, parse](https://sewonzzang.tistory.com/23)
  1. stringify
  * object -> json(serialize)
  * 객체를 JSON으로 바꿔준다.
  2. parse
  * json -> object(deserialize)
  * JSON을 객체로 바꿔준다.

  * abc ---> abc(cba)

  > async
  1. callback
  2. promise
  > promise란?
    * 자바스크립트에서 제공하는 비동기를 간편하게 처리할 수 있게 도와주는 객체이다.
    * promise 이전에 비동기 처리로 콜백 패턴을 주로 사용했으나, 가독성이 나쁘고 에러처리가 까다로운 콜백 지옥의 단점을 보완하기 위해 나온 객체이다.
    * [promise와 callback 차이](https://spicycookie.me/JavaScript/promise/)
  #### Producer
    * 콜백함수 대신에 사용하는 비동기 오브젝트
    * producer와 consumer를 연결해주는 특별한 JS 객체
    * promise를 사용해서 비동기 실행 함수를 만들고 실행결과가 성공되면 resolve(value)를 호출하여 결과값을 consumer에게 전달한다.
    * 실패하면 reject(error)를 호출하여 에러를 전달한다.
    * 상태: 대기(pending), 이행(fulfilled), 거부(rejected)
  #### Consumer
    * .then()

  3. async await
  > [promise, async & await](https://velog.io/@hang_kem_0531/Promise%EC%99%80-asyncawait)
  
> Fetch API: 백엔드와 통신하는 API
* [JSONPlaceholder](https://jsonplaceholder.typicode.com/guide/)
* fetch(url, options) return은 promise타입의 객체
* .then()메서드는 promise를 처리할 수 있는 메서드이다.
* post 방식의 경우에는 header에 **content-type; charse=utf8**을 필히 작성해야 한다.
* method: 'post'

## [과제](https://github.com/iieunji023/Front-End-Study/tree/main/JS/shoppingmail)
> css 참고자료
* [css:flex](https://www.heropy.dev/p/Ha29GI)
* [css:flex](https://studiomeal.com/archives/197)
* [css:span 중앙정렬](https://iamdaeyun.tistory.com/entry/CSS-display-flex-%EC%88%98%EC%A7%81%EC%A0%95%EB%A0%AC-%EC%A4%91%EC%95%99%EC%A0%95%EB%A0%AC-span%EC%97%90%EB%8F%84-%EB%A8%B9%ED%9E%90%EA%B9%8C-%EB%A8%B9%ED%9E%8C%EB%8B%A4)
* [css:scrollbar](https://inpa.tistory.com/entry/CSS-%F0%9F%8C%9F-%EC%8A%A4%ED%81%AC%EB%A1%A4-%EB%B0%94Scrollbar-%EA%BE%B8%EB%AF%B8%EA%B8%B0-%EC%86%8D%EC%84%B1-%EC%B4%9D%EC%A0%95%EB%A6%AC)
* [css:hover 효과](https://www.codingfactory.net/12584)

> UI
<br>

 ![css 화면](/img/ui.png)

> [Fetch 함수로 JSON 파일 읽어오기](https://velog.io/@kimheewon/fetch%ED%95%A8%EC%88%98%EB%A1%9C-Json%ED%8C%8C%EC%9D%BC-%EC%9D%BD%EC%96%B4%EC%98%A4%EA%B8%B0)

1. fetch()란
* 자바스크립트를 사용하면 필요할 때 **서버에 네트워크 요청**을 보내고 새로운 **정보를 받아오는 일**을 할 수 있다.

2. JSON이란?
* 일반적으로 서버에서 클라이언트로 **데이터를 보낼 때 사용하는 양식**. 클라이언트가 사용하는 언어에 관계 없이 통일된 데이터를 주고받을 수 있도록, **일정한 패턴을 지닌 문자열**을 생성해 내보내면 클라이언트는 그를 해석해 데이터를 자기만의 방식으로 온전히 저장, 표시할 수 있게 된다.

<details>
    <summary>Fetch함수를 사용하여 JSON 파일 파싱해오기</summary>

    function loadFile() {
      return fetch('data/data.json')      // json 파일 읽어오기
      .then(response => response.json())  // 읽어온 데이터를 json으로 변환
      .then((json) => {
        data = json.items;     // json에 있는 items만 받아오기

        let html = '';
        data.forEach(element => {   // foreach 배열의 개수만큼 반복문을 돌려라
          console.log(element);     // element에는 하나 하나의 배열이 담아져있음
        })
      })
      .catch(error => console.error('Error fetching JSON', error));
    }

    loadFile();
</details>