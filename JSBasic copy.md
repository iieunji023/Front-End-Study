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

* 콘솔창에서 확인 가능

  <details>
      <summary>결과</summary>

  ![console](/img/console_alert.png)
  ![console](/img/console_alert1.png)
  ![console](/img/console_alert2.png)
  ![console](/img/console_alert3.png)
  ![console](/img/console_alert4.png)
  </details>

