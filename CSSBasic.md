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
