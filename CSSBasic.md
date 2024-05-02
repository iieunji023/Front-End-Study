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

  </details>
  
* item, header 클래스명을 2개로 인식함

### 선택자

> **반응선택자**
* 사용자의 반응으로 hover와 active상태가 만들어진다.
* 마우스의 커서를 올리는 행위가 hover 적용, 클릭하면 active 적용

  <details>
      <summary>코드</summary>
      
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

### 자식태그
```<li>```태그의 자식 ```<a>```태그
```<li>```태그의 첫번째 ```<a>```태그 자식

  <details>
    <summary>코드</summary>
      
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>structFalse</title>
      <style>
        /* li > a:first-child {
          color: red;
        } */
        li:first-child > a {
          color: red;
        }
      </style>
    </head>
    <body>
      <ul>
        <li><a href="#">주의사항</a></li>
        <li><a href="#">주의사항</a></li>
        <li><a href="#">주의사항</a></li>
        <li><a href="#">주의사항</a></li>
        <li><a href="#">주의사항</a></li>
      </ul>
    </body>
    </html>

  </details>


### CSS 우선순위 적용
[우선순위](https://leeborn.tistory.com/entry/CSS-%EC%9A%B0%EC%84%A0%EC%88%9C%EC%9C%84-%EC%A0%81%EC%9A%A9-important)
1. 속성값 뒤에 !import
  (import-block {color:red !important})
2. style을 직접 지정한 속성(인라인 속성)
3. #id로 지정한 속성
4. 태그로 지정한 속성
5. 상위 객체에 의해 상속된 속성

  <details>
    <summary>코드_nth-child 오류</summary>
      
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>cascading</title>
      <style>
        h1{
          color: green;
        }
        p{
          color: black;
        }
        p{
          color: blue;
        }
        p:nth-child(2){
          color: red !important
        }
      </style>
    </head>
    <body>
      <h1>레드향</h1>
      <p>껍질에 붉은 빛이 돌아 레드향이라 불린다.</p>
      <p>레드향은 한라봉과 귤을 교배한 것으로</p>
      <p>일반 귤보다 2~3배 크고, 과육이 붉고 통통하다.</p>
    </body>
    </html>

  </details>

  * [nth-child 오류](https://stackoverflow.com/questions/23117175/nth-child-strange-behavior-with-h1-and-p)
  * p태그의 하위태그가 없기 때문에 이런 경우에는 nth-of-type(1)를 사용해야 한다.

  <details>
      <summary>코드</summary>
        
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>cascading</title>
        <style>
          p{
            color: black;
          }
          p{
            color: blue;
          }
          h1{
            color: brown !important;
          }
        </style>
      </head>
      <body>
        <h1 style="color: green;">레드향</h1>
        <p style="color: red;">껍질에 붉은 빛이 돌아 레드향이라 불린다.</p>
        <p>레드향은 한라봉과 귤을 교배한 것으로</p>
        <p>일반 귤보다 2~3배 크고, 과육이 붉고 통통하다.</p>
      </body>
      </html>

      <!-- 
        첫번째 테스트인 h1요소에는 타입 스타일과 인라인 스타일 모드 사용
        우선 순위가 타입 스타일 정의에 있는 !important가 높아 타입 스타일이 적용
        중요도와 적용범위가 같은 스타일의 경우는 나중에 선언된 스타일이 적용된다.
        (p태그의 경우 blue 적용)
      -->

  </details>

### position
* 절대좌표
  * absolute, fixed
* 상대좌표
  * static, relative
* top-bottom-left-right

## [반응형 웹](https://kangddong.tistory.com/entry/Front-End-%EB%B0%98%EC%9D%91%ED%98%95-%EC%9B%B9%EC%82%AC%EC%9D%B4%ED%8A%B8)
> [반응형 웹](https://velog.io/@mangozoo20/CSS-%EB%B0%98%EC%9D%91%ED%98%95-%EB%94%94%EC%9E%90%EC%9D%B8%EC%97%90-%EB%8C%80%ED%95%98%EC%97%AC)이란?
* 디자인과 개발이 화면 크기, 플랫폼 및 방향 같은 사용자의 행동과 환경에 반응하는 것을 말한다.
* <U>웹사이트에 있는 다른 콘텐츠의 크기</U>가 <U>웹사이트를 보고 있는 화면의 크기</U>를 기반으로 **콘텐츠의 크기를 조정하고 재구성**한다.

* Pixel(픽셀)은 고정된 하드 코딩 값. 즉, 화면 크기가 변하면 픽셀 크기의 요소가 너무 작게 보이거나 화면을 넘치게 된다.
-> CSS를 사용하여 하드 코딩 측정을 피하고 ***상대 측정***을 사용해야 한다.
* 상대 측정을 통해 화면 크기나 레이아웃에 관계없이 웹 사이트의 비율을 유지시킬 수 있다.

> 상대 측정
* %, em, rem
[CSS 단위 적용 기준]
1. 부모요소에 따라서 사이즈가 변경되어야 하는 경우: %, em
   그렇지 않을 경우: 뷰포트, rem
2. 요소의 너비 또는 높이에 따라서 사이즈가 변경되어야 하는 경우: %, 뷰포트
   폰트에 따라서 크기가 변경될 경우: em, rem

  > [em과 rem](https://yozm.wishket.com/magazine/detail/1410/)
  * rem은 루트 요소에 있는 폰트 사이즈에 따라서 크기가 결정된다.
  * em은 부모 요소의 폰트 사이즈에 따라서 크기가 결정된다.

  <details>
      <summary>em_html_코드</summary>
      
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>em</title>
        <link rel="stylesheet" href="/Day08/css/em.css" > <!-- 외부 스타일시트 연결 -->
      </head>
      <body>
        <div class="level1">
          <h1>level 1</h1>
          <div class="level2">
            <h1>level 2</h1>
            <div class="level3">
              <h1>level 3</h1>
              <div class="level4">
                <h1>level 4</h1>
              </div>
            </div>
          </div>
        </div>
      </body>
      </html>

  </details>

  <details>
      <summary>em_html_결과</summary>

      ![em](/img/em.png)

  </details>

* 고전적인 방법의 layout은 Position, float, table
