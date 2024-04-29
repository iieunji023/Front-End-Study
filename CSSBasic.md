## 정리
```
선택자{
			속성:속성값;
}
```

### 주의사항
* 속성값이 끝나면 세미콜론(;)사용하기
* 중괄호 안쪽으로 들어와서 작성하기 때문에 중괄호 짝 구분 잘하기
* 따로 메모한것은 주석걸기

> **CSS 선택자**
1. 전체 선택자 = * 사용
2. 태그 선택자 = 내 문서 내에 있는 동일태그 선택
3. 클래스 선택자 = 태그 옵션으로 저장 / 반복가능 / **.class**사용
4. 아이디 선택자 = 태그 옵션으로 저장 / 반복 불가능 / **#id**사용 / 우선순위가 높음
5. 속성 선택자 = 선택자[속성=값]
6 자식 선택자 = > 표시로 자식관계를 나타냄

* 클래스 아이디 명 삽입 규칙
  * 첫글자 영어
  * 빈공백 인식x
  * 특수문자 - , _ 만 가능
  * 두 단어 연결 시 -,_사용 / 두번째 단어 첫글자는 대문자로 작성

### 클래스명
* 클래스명에 띄워쓰기를 하면 또 다른 클래스명이 된다.

  <details>
      <summary>코드</summary>
      
      ```
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <title>multi_clasll</title>
        <style>
          .item {
            color: pink;
          }

          .header {
            background-color: aliceblue;
          }
        </style>
      </head>
      <body>
        <h1 class="item header">동해물과 백두산이</h1>
      </body>
      </html>

      <!-- 
        클래스명에 띄워쓰기를 하면 또 다른 클래스명이 된다.
      -->
      ```

  </details>
  
* item, header 클래스명을 2개로 인식함

### 선택자

> **반응선택자**
*사용자의 반응으로 hover와 active상태가 만들어진다.
* 마우스의 커서를 올리는 행위가 hover 적용, 클릭하면 active 적용

  <details>
      <summary>코드</summary>
      
      ```
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>반응 선택자</title>
        <style>
          h4:hover {
            color: red;
          }
          h4:active {
            color: blue;
          }
        </style>
      </head>
      <body>
        <h4>반응 선택자</h4>
      </body>
      </html>
      ```

  </details>


> **구조선택자**
* nth-child(수열) 형제관계에서 앞에서 수열번쨰 해당하는 태그 선택
* first-child 형제관계에서 첫번째로 등장하는 태그 선택
* last-child 형제관계에서 마지막으로 등장하는 태그 선택

* list-style은 블릿마커를 제어한다.
  * 원형블릿마커(disc), 숫자순서(decimal), 비어있는 원블마(circle), 사각블마(square)
* border-radius 요소의 테두리를 만든다.
  * (좌상, 우상, 우하, 좌하), (좌상우하, 우상좌하), (좌상, 우상좌하, 우상)

    <details>
      <summary>코드</summary>
      
      ```
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>structure</title>
        <style>
          li {
            list-style: none;
            float: left;
            padding: 15px;
          }
          li:nth-child(2n) {
            background-color: aliceblue;
          }
          li:nth-child(2n+1) {
            background-color: pink;
          }
          li:first-child{
            border-radius: 10px 0 0 10px;
          }
          li:last-child{
            border-radius: 0 10px 10px 0 ;
          }
        </style>
      </head>
      <body>
        <ul>
          <li>첫 번째</li>
          <li>두 번째</li>
          <li>세 번째</li>
          <li>네 번째</li>
          <li>다섯 번째</li>
          <li>여섯 번째</li>
          <li>일곱 번째</li>
        </ul>
      </body>
      </html>
      ```

  </details>

> **속성선택자**
* 선택자[속성=값], input태그의 type 속성에 사용

    <details>
      <summary>코드</summary>
      
      ```
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>attribute</title>
        <style>
          input[type="text"] {
            background: cornflowerblue;
          }
          input[type="password"]{
            background: floralwhite

          }
        </style>
      </head>
      <body>
        <form>
          <input type="text">
          <input type="password"> 
        </form>
      </body>
      </html>
      ```

  </details>

> **상태선택자**
* 입력 양식의 상태를 선택할 때
  * checked- 체크 상태인 input 태그 선택
  * focus- 포커스를 맞춘 input 태그 선택
  * enabled- 사용가능한 input 태그 선택
  * disabled- 사용불가능한 input 태그 선택

      <details>
      <summary>코드</summary>
      
      ```
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <style>
          input:enabled {
            background: white;
          }
          input:disabled {
            background: gray;
          }
        </style>
      </head>
      <body>
        <h2>사용가능</h2>
        <input value="가능">
        <h2>사용불가능</h2>
        <input disabled="disabled" value="불가능">
      </body>
      </html>
      ```

  </details>

> 