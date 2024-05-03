## 정리


```
document.getElementById("out");
```

* [document.getElementById](https://kyounghwan01.github.io/blog/JS/JSbasic/getElementById/#%E1%84%89%E1%85%A1%E1%84%8B%E1%85%AD%E1%86%BC%E1%84%87%E1%85%A5%E1%86%B8)
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

* 웹페이지 콘솔창에서도 사용 가능

  <details>
      <summary>결과</summary>

  ![console](/img/console_alert.png)
  ![console](/img/console_alert1.png)
  ![console](/img/console_alert2.png)
  ![console](/img/console_alert3.png)
  ![console](/img/console_alert4.png)
  </details>


* 내부에서 스크립트 사용
  * ```<script>``` 태그는 HTML문서 내부에서 자바스크립트를 사용할 수 있게 해준다.
  * 내부에서 스크립트를 사용하는 방식은 스크립트의 사용량이 간단할 때 사용한다.
  * ```<script>```를 head에 쓰게 되면 스크립트가 끝날때까지 body로 못넘아감
  * body에 ```<script>```를 사용하면 전체를 다 볼 수 있음
  * 스크립트량이 많아지면, **외부에 스크립트파일을 만들어서 불러오기 형식**으로 쓰는게 좋음