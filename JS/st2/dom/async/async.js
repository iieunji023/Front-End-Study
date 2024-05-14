// async & await

function fetchUser() {
  // 10s...
  return 'ellie';

}
function fetchUser() {
  return new Promise((resolve, reject) => {
    resolve('ellie');
  });
}


const user = fetchUser();
user.then(console.log);
// console.log(user);

// async
async function fetchUser() {
  return 'ellie';
}
const user1 = fetchUser();
user1.then(console.log);

async function func1() {
  // return 1;
  return Promise.resolve(1);
}
func1().then(alert);