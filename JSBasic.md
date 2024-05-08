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
    ```
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
    ```
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


✅ [콜백함수](https://velog.io/@minidoo/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%BD%9C%EB%B0%B1-%ED%95%A8%EC%88%98Callback-Function)
* 파라미터로 함수를 전달하는 함수
* 예를 들어, forEach 함수의 경우 함수 안에 익명의 함수를 넣어서 forEach 문을 동작시킨다.



## [타입스크립트](https://velog.io/@taeg92/TypeScript-%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0)
* 타입스크립트는 자바스크립트에 타입을 부여한 언어
* 자바스크립트의 확장된 언어라고 볼 수 있다.

