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

