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
* [rowspan/colspan](https://m.blog.naver.com/gounsori90/220531860547)
  * 가로와 세로 셀을 병합할 수 있음
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