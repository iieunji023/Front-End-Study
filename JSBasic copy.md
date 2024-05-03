## 정리


```
document.getElementById("out");
```

> [document.getElementById](https://kyounghwan01.github.io/blog/JS/JSbasic/getElementById/#%E1%84%89%E1%85%A1%E1%84%8B%E1%85%AD%E1%86%BC%E1%84%87%E1%85%A5%E1%86%B8)
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
  * 스크립트량이 많아지면, **외부에 스크립트파일을 만들어서 불러오기 형식**으로 쓰는게 좋음

> [async와 defer의 차이](https://velog.io/@cherrycock/script-async%EC%99%80-defer%EC%9D%98-%EC%B0%A8%EC%9D%B4)
1. async
* async 옵션으로 다수의 script 파일들을 다운로드 받게 되면
**정의된script순서에 상관없이 다운로드 된 파일을 우선적으로 실행**한다.
  * JS파일이 순서에 의존적이라면 문제가 생길 수 있다.

2. defer
* defer 같은경우는 **모든 script 파일들이 다운로드 된 이후에 실행** 되기 때문에 훨씬 안전하다.

#### [async와 defer 정리](https://yceffort.kr/2020/10/defer-than-async)
* async로 로드된 스크립트는 다운로드가 완료되면 즉시 구문 분석을 하고 실행된다. 그에 반해 defer는 HTML 문서가 파싱되기 전까지 실행되지 않는다.
* async는 순서없이 로드가 가능하지만 defer는 마크업 순서대로 로딩된다.