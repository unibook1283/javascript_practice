// async & await
// clear style of using promise :)

// 1. async
// function fetchUser() {
//     // do network request in 10 secs...
//     return 'ellie';
// }
// 이건 너무 오래걸려서 안좋다. 아래 promise로!

// function fetchUser() {
//     return new Promise((resolve, reject) => {
//         // do network request in 10 secs...
//         resolve('ellie');
//     })
// }
// 이건 복잡스러워서
// 아래거랑 똑같다!

async function fetchUser() {
    // do network request in 10 secs...
    return 'ellie';
}
// 이렇게 앞에 async만 붙여주면, 얘가 promise의 기능을 한다.
// console창 보면 Promise로 찍혀있음.

const user = fetchUser();
user.then(console.log);
console.log(user);


// 2. await
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(2000);
    return 'apple!';
}

async function getBanana() {
    await delay(1000);
    return 'banana!';
}

async function pickFruits() {
    // return getApple()
    // .then(apple => {
    //     return getBanana()
    //     .then(banana => `${apple} + ${banana}`);
    // });

    // 위는 구리니까 아래처럼 병렬적으로

    const applePromise = getApple();
    const bananaPromise = getBanana();
    const apple = await applePromise;
    const banana = await bananaPromise;
    return `${apple} + ${banana}`;
}

pickFruits().then(console.log);


// 3. useful Promise APIs
function pickAllFruits() {
    return Promise.all([getApple(), getBanana()]).then(fruits =>    //all: 모든 promise들이 병렬적으로 모일 때까지 기다려줌
        fruits.join(' + ')  // join: 배열을 string으로 묶음
    );
}

pickAllFruits().then(console.log);

function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]);     // race: 먼저 따온거 하나만
} 

pickOnlyOne().then(console.log)