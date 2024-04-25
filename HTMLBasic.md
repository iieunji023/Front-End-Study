## 기본구조
* ```<head></head>```
  - 보여지지 않는 부분
* ```<body></body>```
  - 웹페이지에 보이는 부분

## ```<h1>, <h2>``` ...
* 텍스트의 크기를 나타냄
  <details>
    <summary>코드</summary>
    
    ```
    <!DOCTYPE html>
    <html>
      <head>
          <title>HTML5 Basic</title>
          <link rel = "stylesheet" href="style.css" />
          <!-- rel: 속성(stylesheet: 속성값) 
               href: 속성(위치경로) -->
      </head>
      <body>
        <h1>Hello World</h1>
        <h2>Hello World</h2>
        <h3>Hello World</h3>
        <h4>Hello World</h4>
        <h5>Hello World</h5>
        <h6>Hello World</h6>
      </body>
    </html>
    ```
    </details>


    ![text size](/img/textsize.png)

## ```&nbsp;```
### 공백
* 아무리 띄워쓰기를 많이 해도 한칸만 띄워짐
  
  <details>
      <summary>코드</summary>
  
        <!DOCTYPE html>
        <html>
          <head>
              <title>HTML5 + CSS3 text</title>
          </head>
          <body>
            <h1>공백이  있는     글자</h1>
          </body>
        </html>
  </details>

  ![공백](/img/공백.png)

### ```&nbsp;```
* ```&nbsp;```를 적은만큼 띄워쓰기가 됨

  <details>
      <summary>코드</summary>
  
        <!DOCTYPE html>
        <html>
          <head>
              <title>HTML5 + CSS3 text</title>
          </head>
          <body>
            <h1>공백이&nbsp;&nbsp;있는&nbsp;&nbsp;글자</h1>
          </body>
        </html>
  </details>

  ![nbsp](/img/nbsp.png)


## ```<p>, <br>```
* ```<p>```: 문단을 만들어줌
* ```<br>```: 줄바꿈, 개행

  <details>
    <summary>코드</summary>

    ```
    <!DOCTYPE html>
    <html>
      <head>
        <title>P태그 test</title>
      </head>
      <body>
        <h1>HTML 페이지 만들기</h1>
        <h2>Head 만들기</h2>
          <p>
            head의 범위입니다.<br>
            head 내용</br>
            head 끝
          </p>
        <h3>body 만들기</h3>
          <p>body의 범위입니다.</p>
          <p>문단1 만들기</p>
          <p>문단2 만들기</p>
      </body>
    </html>
    
    <!-- 
        <p>태그는 문단을 만든다.
        <br>태그는 줄바꿈, 시작태그가 없음
     -->
    ```
  </details>

  <details>
    <summary>결과</summary>

    * ```<br>``` 없을 때
      ![br](/img/brx.png)

    * ```<br>``` 있을 때
      ![br](/img/bro.png)

  </details>

## ```<hr>```
* 수평선같이 가로로 긴 선

<details>
    <summary>코드</summary>

    ```
    <!DOCTYPE html>
    <html>
      <head>
        <title>HTML+CSS3 text</title>
      </head>
      <body>
        <h1>홍차</h1>
      <hr>
        <h2>정의</h2>
        <p>
          홍차는 백차, 녹차, 우롱차보다 더 많이 발효된
          차의 일종이다.
        </p>
        <h2>등급</h2>
        <p>
          홍차는 여러가지 등급으로 매겨진다.
        </p>
      </body>
    </html>
    ```
  </details>

  <details>
    <summary>결과</summary>

  ![hr](/img/hr.png)
  </details>

## ```<a>```
* ```<a>```: ```<a href="이동할경로">나의 홈페이지</a>```
  * id태그를 사용할 수 있음
  <details>
    <summary>코드</summary>

    ```
    <!DOCTYPE html>
    <html>
      <head>
        <title>Text anchorInner</title>
      </head>
      <body>
        <a href="https:www.naver.com">네이버</a><br>
        <a href="https:www.google.com" target="_blank">구글</a><br>
        <a href="#one">1절 이동</a><br>
        <a href="#two">2절 이동</a>
        <hr>
        <h1 id="one">애국가 1절</h1>
        <p>
            동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <h1 id="two">애국가 2절</h1>
        <p>
            남산위에 저 소나무 철갑을 두른듯 바람소리 불변함은 우리 기상일세
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      </body>
    </html>
    <!-- 
      <a> 태그는 웹페이지로 이동하거나
        웹페이지 내부로도 이동이 가능하다.
        href속성에 "id"속성 형태의 문자열을 입력
        id를 중복하면 첫번째 id로 이동한다
        "#": 웹표준에 따른 빈링크를 나타낸다.
    -->
    ```
  </details>

* target="_blank": 새로운 창이 열림

  <details>
    <summary>코드</summary>

    ```
    <!DOCTYPE html>
    <html>
      <title>
        <title>HTML text Anchor</title>
      </title>
      <body>
        <a href="이동할경로">나의 홈페이지</a><br>
        <a href="https://www.naver.com/" target="_blank">네이버</a><br>
        <a href="https://www.daum.net" target="_blank">다음</a><br>
        <a href="https://www.google.com" target="_blank">구글</a>
      </body>
    </html>
    <!-- 
      <a>태그는 다른 웹페이지나 웹페이지 내부의 특정한 위치로 이동할 때 사용한다.
      href 속성을 사용한다.(이동할 위치를 알려주는 속성)
      target 속성을 사용하면 새로운 창이 열리면서 이동된다.
    -->
    ```
  </details>

  <details>
    <summary>결과</summary>

  ![target](/img/a_target.png)
  ![target](/img/a.png)
  </details>

## ```<ol>, <ul>```
* ```<ol>```: 정렬된 목록(ordered list) 즉, 순서가 중요한 목록을 나타낼 때 사용
* ```<ul>```: 정렬되지 않은 목록(unordered list) 즉, 순서가 중요하지 않은 목록을 나타낼 때 사용

  <details>
    <summary>코드_list_ordered</summary>

    ```
    <html>
      <head>
          <title>text_ordered</title>
      </head>
      <body>
          <ol>
            <li>사과</li>
            <li>바나나</li>
            <li>오렌지</li>
          </ol>
          <ul>
            <li>사과</li>
            <li>바나나</li>
            <li>오렌지</li>
          </ul>
      </body>
    </html>
    <!-- 
      <ol>: 순서있는 목록
      <ul>: 순서없는 목록
    -->
    ```
  </details>

  <details>
    <summary>결과</summary>

  ![list](/img/list.png)
  </details>

   <details>
    <summary>코드_nested_ordered</summary>

    ```
    <html>
      <head>
          <title>nested list</title>
      </head>
      <body>
          <ul>
            <li>
              <!-- 첫번째 목록 -->
              <b>과일</b>
              <ol>
                <li>사과</li>
                <li>바나나</li>
                <li>오렌지</li>
              </ol>
            </li>
            <li>
              <!-- 두번째 목록 -->
              <b>채소</b>
              <ol>
                <li>상추</li>
                <li>양배추</li>
                <li>고추</li>
              </ol>
            </li>
          </ul>
      </body>
    </html>
    ```
  </details>

  <details>
    <summary>결과</summary>

  ![nested](/img/nest.png)
  </details>

## ```<table> - <tr>, <th>, <td>```
> 태그
* tr (table row) : 행
* td (table data) : 행의 내용
* th (table heading) : 행, 열의 제목
* caption : 표 제목
* col / colgroup : 스타일 지정을 위한 열(그룹)
* thead : 머리글
* tfoot : 꼬리말
* tbody : 본문

> 속성
* [rowspan/colspan](https://m.blog.naver.com/gounsori90/220531860547) : 가로와 세로 셀을 병합할 수 있음

  <details>
    <summary>코드_table_basic</summary>

    ```
    <html>
      <head>  
        <title>Table</title>
      </head>
      <body>
        <table border="1" cellspacing="0" cellpadding="0">
          <tr>
            <td>1행 1열</td>
            <td>1행 2열</td>
            <td>1행 3열</td>
            <td>1행 4열</td>
          </tr>
          <tr>
            <td>2행 1열</td>
            <td>2행 2열</td>
            <td>2행 3열</td>
            <td>2행 4열</td>
          </tr>
          <tr>
            <td>3행 1열</td>
            <td>3행 2열</td>
            <td>3행 3열</td>
            <td>3행 4열</td>
          </tr>
        </table>
      </body>
    </html>

    <!-- 
      <table> 태그로 테이블 만든다.
      <tr>태그로 한 행을 구성하고 <th>태그로 제목, <td>태그로  셀을 작성한다.
      border 속성을 사용하여 테두리를 만든다.
    -->
    ```
  </details>

  <details>
    <summary>결과</summary>

  ![table_basic](/img/table_basic.png)
  </details>

  <details>
    <summary>코드_table</summary>

    ```
    <html>
      <head>  
        <title>Table</title>
      </head>
      <body>
        <table border="1" >
          <tr>
            <th></th>
            <th>월</th>
            <th>화</th>
            <th>수</th>
            <th>목</th>
            <th>금</th>
          </tr>
          <tr>
            <td>1교시</td>
            <td>영어</td>
            <td>국어</td>
            <td>과학</td>
            <td>미술</td>
            <td>기술</td>
          </tr>
          <tr>
            <td>2교시</td>
            <td>도덕</td>
            <td>체육</td>
            <td>영어</td>
            <td>수학</td>
            <td>사회</td>
          </tr>
        </table>
      </body>
    </html>
    ```
  </details>

  <details>
    <summary>결과</summary>

  ![table](/img/table.png)
  </details>

    <details>
    <summary>코드_table_span</summary>

    ```
    <html>
      <head>

      </head>
      <body>
        <table border="1">
          <tr>
            <th colspan="2">지역별 홍차</th>
          </tr>
          <tr>
            <th rowspan="3">중국</th>
            <td>정산소총</td>
          </tr>
          <tr>
            <td>기문</td>
          </tr>
          <tr>
            <td>운남</td>
          </tr>
          <tr>
            <th rowspan="4">인도 및 스리랑카</th>
            <td>아삼</td>
          </tr>
          <tr>
            <td>실론</td>
          </tr>
          <tr>
            <td>다질링</td>
          </tr>
          <tr>
            <td>닐기리</td>
          </tr>
        </table>
      </body>
    </html>
    ```
  </details>

  <details>
    <summary>결과</summary>

  ![table_span](/img/table_span.png)
  </details>

## ```<img>```
> href와 src의 차이
* href : <a> 태그에 홈페이지 등의 주소를 입힐때 사용 / 사용자의 클릭이 있을 때 이동
* src : <img> 태그에 파일 디렉토리 경로에 있는 어떠한 이미지를 지성하여 웹 페이지에 결과물을 출력할때 사용 / 사용자의 클릭없이 자동으로 출력

    <details>
    <summary>코드</summary>

    ```
    <html>
      <head>
        <title>img</title>
      </head>
      <body>
        <img src="/img/3.jpg" alt="짱구우" width="300">
        <img src="Nothing" alt="이미지가 존재하지 않습니다" width="300">
      </body>
    </html>

    <!-- 
      source 속성은 위치경로를 나타낸다.
      href: <a> 태그에 홈페이지 등의 주소를 입힐때 사용 / 사용자의 클릭이 있을 때 이동
      src: <img> 태그에 파일 디렉토리 경로에 있는 어떠한 이미지를 지성하여 웹 페이지에 결과물을 출력할때 사용 / 사용자의 클릭없이 자동으로 출력
      크기는 width, height
    -->
    ```
  </details>

  <details>
    <summary>결과</summary>

  ![img](/img/jjanggu.png)
  </details>

## ```<input>```
[summary](https://www.notion.so/3587e87784b44ed7b7c7cd1a1c854fba?pvs=4)
> **개념**
* <input> 태그는 사용자로부터 입력을 받을 수 있는 입력 필드(input filed)를 정의할 때 사용
* <input> 요소는 사용자가 데이터를 입력할 수 있는 입력 필드를 선언하기 위해 <form> 요소 내부에서 사용
  * 이러한 입력 필드는 <input> 요소의 type 속성값을 달리함으로써 여러 가지 모양으로 나타낼 수 있다.
> **[```<input>``` 유형](https://sorto.me/docs/Web/HTML/Element/input)**

> **속성**
* [value](https://www.tcpschool.com/html-tag-attrs/input-value): <input> 태그의 value 속성은 <input> 요소의 초깃값(value)을 명시

    <details>
    <summary>예제_value</summary>

    ```
    <form action="/examples/media/action_target.php" method="get">
        이름 : <input type="text" name="st_name" value="홍길동"><br>
        남 <input type="radio" name="gender" value="male">
        여 <input type="radio" name="gender" value="female"><br>
        <input type="submit" value="서버로 제출하기">
    </form>
    ```
  </details>

* [pattern](https://www.tcpschool.com/html-tag-attrs/input-pattern): <input> 태그의 pattern 속성은 폼 제출 시 <input> 요소의 값을 검사할 때 사용될 정규 표현식(regular expression)을 명시
  * pattern 속성은 정규표현식을 작성하여 입력의 포맷여부를 확인할 수 있다.
  * ```<input>``` 태그의 입력값 검사에 유효하다.

  <details>
    <summary>예제_pattern</summary>

    ```
    생년월일 <input type="text" name="bday" pattern="[0-9]{6}"><br><br>
    ```
    * 0~9까지 6글자만 허용



      <summary>결과</summary>

    ![pattern](/img/pattern1.png)
    * 올바르게 입력시 제출됨

    ![pattern](/img/pattern2.png)
    * 글자 수 초과시 오류발생

  </details>

* radio

  <details>
    <summary>예제_radio</summary>

    ```
    <html>
      <head>
        <title>form_radio</title>
      </head>
      <body>
        <form>
          <fieldset>
            <label for="username">이름</label>
            <input type="text" name="user" id="username"><br><br>
            <input type="radio" name="gender" id="man" value="m">
            <label for="man">남성</label>
            <input type="radio" name="gender" id="woman" value="w">
            <label for="woman">여성</label><br><br>
            <input type="submit" value="가입">
            <button>취소</button>
          </fieldset>
        </form>
      </body>
    </html>

    <!-- 
      라디오 버튼은 name 속성이 같아야만 여러개 중 한개만 선택된다.
    -->
    ```

    <summary>결과</summary>

  ![pattern](/img/radio.png)
  * 이름은 user, 성별은 m 또는 w로 저장

  </details>


### ```<input>```태그 정리
> [```<input>```태그 id와 name의 차이](https://velog.io/@dongeranguk/input-%ED%83%9C%EA%B7%B8-id%EC%99%80-name%EC%9D%98-%EC%B0%A8%EC%9D%B4)
* id
  * page 안에서 **중복으로 사용할 수 없으며, 주로 JavaScript에서 다루기 위해** 지정한다.
  * id 속성으로 설장된 값은 @RequestMapping에 지정한 Server단(클래스 or 메소드)의 파라미터로 넘어가지 않기 때문에 **Server단에서 접근이 불가능**하다.
* name
  * page 영역에서 **중복되어 사용이 가능**하며, **action에 해당하는 페이지에 전달할 수 있는 파라미터로 사용**한다.
  * 태그의 **name 값이 키(Key)**로 해서 값(Value)가 전송된다.
  * 즉, request에 값이 전달될 때 Map과 마찬가지로 **Key와 Value 쌍의 형식으로 데이터가 저장**된다.

> ```<input>``` 태그 name과 value의 차이
* name은 태그명, 폼 서브밋시 서버에서 name 명으로 값을 가져올 수 있다.
* value 는 해당 태그의 값
* 서버에서 name 명으로 꺼낸 값에는 value 에 해당하는 값이 들어있다.

> **동적인 페이지**

* ![dy](/img/dy.png)
* ```입력 <input type="text" name="input">```
* 홍길동이라고 입력을 하면 서버로 보내짐
* 클라이언트에서 데이터를 입력하면 서버에서 데이터를 받아서 처리한 후 클라이언트에게 다시 보내줌
* 데이터가 서버에 저장될 때는 `input`이라는 이름으로 저장됨
    * 변수명과 비슷한 맥락

  <details>
      <summary>예제_radio</summary>

          <!-- 사용자가 입력하는 입력 양식 -->
          ID <input type="text" name="id"><br><br>
          PW <input type="password" name="pw"><br><br>
          <input type="file" name="file" value="file"><br><br>
          <input type="checkbox" name="cb" value="checkbox"> 체크 <br><br>
          <input type="radio" name="radio" value="radio"> 라디오버튼 <br><br>
          <!-- 보이지 않는 입력 양식 -->
          <input type="hidden" name="hidden" value="hidden">

          <input type="button" value="button"><br><br>
          <input type="reset" value="reset"><br><br>
          <input type="submit" value="제출">

    <summary>결과</summary>

    ![dy](/img/dy1.png)
    </details>

## ```<form>```
> **개념**
* ```<form>``` 요소는 사용자로부터 정보・데이터와 같은 인풋(input)을 받아 제출하기 위한 대화형 컨트롤을 포함하는 문서 구획을 나타낸다.

> **속성**
```<form action="API 주소" method="GET|POST"></form>```
* action
  * 양식 데이터를 처리할 서버의 주소값을 가진다.
  * 즉, 입력받은 정보나 데이터를 서버에 보내 처리하는 기능을 한다. 
* method
  * 양식의 정보 전달 방식을 결정한다.
  * GET 방식과 POST 방식..
  * [GET/POST 방식 정리](https://www.notion.so/GET-POST-ca09c70c0f0b4e15a1417f7f26733c94?pvs=4)
> **양식 라벨 태그: ```<label>```**
```
<label for="user-name">이름</label>
<input id="user-name" />

<label for="user-email">이메일</label>
<input id="user-email" />
```

* ```<label>``` 태그는 폼 양식에 이름을 붙이는 태그이다.
* ```<label>``` 태그는 **'for' 속성(attribute)을 통해 특정 ```<input>``` 필드의 'id'값과 연결**시킨다. 

  <details>
      <summary>코드</summary>

        <html>
          <head>
            <title>form label</title>
          </head>
          <body>
            <form>
              <label for="name">user</label>
              <input type="text" id="name"><br><br>
              <label for="tel">tel</label>
              <input type="tel" id="tel" placeholder="전화번호를 입력하세요"><br><br>
              <hr><br>
              email <input type="email"><br><br>
              color <input type="color"><br><br>
              date <input type="date"><br><br>
              search <input type="search">
            </form>
          </body>
        </html>

        <!-- 
          입력양식은 <form> 태그로 먼저 영역을 설정하고 내부에 <input> 태그를 만든다.
          <form> 태그가 없으면 전송이 되지 않는다.
          <label> 태그의  for 속성은 레이블을 클릭하면 입력창으로 이동
                          placeholder 속성은 힌트를 보여준다.
        -->

    <summary>결과</summary>

    ![label](/img/label.png)
    </details>

## ```<fieldset>```
* ```<fieldset>``` 태그는 ```<form>``` 요소에서 연관된 요소들을 하나의 그룹으로 묶을 때 사용한다.
* ```<fieldset>``` 요소는 하나의 그룹으로 묶은 요소들 주변으로 박스 모양의 선을 그려준다.
* 또한, ```<legend>``` 요소를 사용하면 ```<fieldset>``` 요소의 캡션(caption)을 정의할 수 있다.

  <details>
      <summary>코드</summary>

        <form>
          <fieldset>
            <legend>개인정보입력</legend>
            이름: <input type="text" name="name"><br>
            나이: <input type="text" name="age"><br><br>
            <input type="submit">
          </fieldset>
        </form>

    <summary>결과</summary>

    ![fieldset](/img/fieldset.png)
    </details>

## ```<select>```

<details>
      <summary>코드</summary>

        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Document</title>
        </head>
        <body>
          <form>
            <select multiple = "multiple">
              <option>김밥</option>
              <option selected>떡볶이</option>
              <option>순대</option>
              <option>오뎅</option>
            </select>
          </form>
        </body>
        </html>

        <!-- 
          <select> 태그 안에 <option> 태그를 사용하여 여러개를 나열한다.
          <option> 태그에 selected 속성을 사용함녀 맨앞에 노출된다.
        -->

    <summary>결과</summary>

    ![select](/img/select.png)
    </details>

## ```<div>```
* ```<div>```태그는 공간을 **블록형식으로 분할**한다.
* 항상 새라인에서 시작한다.
* 양 옆에 다른 콘텐트를 배치하지 않고 한 라인 전체를 사용한다.
* ```<h1> / <p> / <ul> / <div>```이 있음

## ```<span>```
* ```<span>```태그는 공간을 인라인형식으로 분할한다.
* 자신의 글자 크기만큼 영역을 차지하면서 왼쪽에서 오른쪽으로 출력된다.
* 실제 데이터의 크기만큼만 한라인의 일부만 사용한다
* ```<b> / <a> / <img> / <span>```이 있음

### [태그 성질에 따른 분류](https://memostack.tistory.com/275)
1. 블록요소 태그
    * html, body, div, p, ul, ol, li, dl, dt, dd …
    * 기본 가로 공간의 크기가 부모태그와 동일하게 인식
    * 연속해서 작성하면 세로 배열
    * 공간값이 적용(w, h)
2. 인라인 요소 태그
    * a, span, strong, i, em …
    * 기본 가로 공간의 크기가 안쪽에 포함된 내용만큼만 인식
    * 연속해서 작성하면 가로 배열
    * 공간값이 적용 안됨
3. 인라인 블록요소 태그
    * img, input, button …
    * 기본 가로 공간의 크기가 안쪽에 포함된 내용만큼 인식
    * 연속해서 작성하면 가로배열
    * 공간값이 적용

### [id와 class의 차이](https://ohknow.tistory.com/35#google_vignette)
* id : '유일'한 요소에 스타일을 적용
* class : '복수'의 요소에 스타일을 적용

<details>
    <summary>코드</summary>

      <html>
        <head>
          <title>space_relation</title>
        </head>
        <body>
          <div id="wrap">
            <div class="box1">
              <div class="n1">첫번째</div>
              <div class="n2">두번째</div>
            </div>
            <div>
              <h1>제목</h1>
              <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
              </ul>
            </div>
          </div>
        </body>
      </html>

      <!-- 
        class는 중복이 가능하다. 그러나 id는 중복이 안된다.
        wrap의 자식은 box1, box2이면 box1의 자식은 n1, n2이고 
        이 둘의 관계는 형제이다.
      -->

  <summary>결과</summary>

  ![id](/img/idclass.png)
  </details>

## [시맨틱(semantic) 태그](https://velog.io/@syoung125/%EC%8B%9C%EB%A7%A8%ED%8B%B1-%ED%83%9C%EA%B7%B8-Semantic-Tag-%EC%9E%98-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0)
![semantic](/img/semantic.png)
```
  <header>: 머리말
  <nav>: 웹페이지 메뉴
  <section>: 제목별로 나누는 컨텐츠 영역
  <article>: 개별 콘텐츠를 나누는 영역
  <footer>: 사이트의 마지막(저자, 저작권 정보, 간단한 맺음말)
```

<details>
    <summary>코드</summary>

      <html>
        <head>
          <title>semanticless</title>
        </head>
        <body>
          <header>
            <div>
              <h1>HTML5 기본</h1>
            </div>
          </header>

          <nav>
            <ul>
              <li><a href="#">메뉴-1</a></li>
              <li><a href="#">메뉴-2</a></li>
              <li><a href="#">메뉴-3</a></li>
            </ul>
          </nav>

          <section>
            <article>
              <h1>What is Lorem Ipsum?</h1>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
              It has survived not only five centuries, but also the leap into electronic typesetting, 
              remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
              and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </article>
            <article>
            <h1>What is Lorem Ipsum?</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into electronic typesetting, 
            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </article>
          <section>
          <footer>
            <span>부산광역시 용호동 부경대학교</span>
          </footer>
        </body>
      </html>

      <!-- 
        <header>: 머리말
        <nav>: 웹페이지 메뉴
        <section>: 제목별로 나누는 컨텐츠 영역
        <article>: 개별 콘텐츠를 나누는 영역
        <footer>: 사이트의 마지막(저자, 저작권 정보, 간단한 맺음말)
      -->

  <summary>결과</summary>

  ![semantic](/img/sem.png)
  </details>