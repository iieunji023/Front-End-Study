// state: pending -> fulfilled or rejected
// 1. producer
// promise를 생성하는 순간에 자동으로 실행된다.
/*
const promise = new Promise((resolve, reject) => {
  console.log("doing something one two...");
});
*/

/*
let promise = new Promise((resolve, reject) => {
  console.log("do something..");
  setTimeout(() => {
    resolve('adam');    // 실행이 정상적으로 완료되면 resolve 호출
  }, 2000);
});
// ====================================
promise.then((value) => {
  console.log(value);
});
*/
// resolve()가 전달한 값 'adam'을 then()을 통해서 받아온다.

/*
console.clear();
let promise = new Promise((resolve, reject) => {
  console.log('doing promise2...');
  setTimeout(() => {
    resolve('scott');
    reject(new Error('no network'));
  }, 2000);
});

promise.then((resData) => {
  console.log(resData);

}).catch((error) => {   // .then.catch()
  console.log(error); 
}).finally(() => {
  console.log('Run unconditionally!!')
})
*/

// promise chaining
/*
let fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1), 1000;
  })
});

fetchNumber
.then(num => num * 2)     // 2
.then(num => num * 3)     // 6
.then(num => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num - 1);     // 5
    }, 1000);
  })
})       
.then(num => console.log(num));
*/

// Error
let getHan = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('🐔');
    },1000);
  });
}

let getEgg = (hen) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('🐥🥚');
    }, 1000);
  });
}

getHan()
.then(hen => getEgg(hen))
.then(egg => console.log(egg));