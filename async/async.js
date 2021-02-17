// async & await
// clear style of using promise

// 1. async
async function fetchUser() {
    //async 추가만해도 new Promise 정의 함수 생략가능
    return 'jiho';
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(1500);  //await는 async가 들어간 함수일때 사용가능
    return '🍅';
}

async function getBanana() {
    await delay(1000);
    return '🍌';
}

async function pickFriuts() {
    const applePromise = getApple();
    const bananaPromise = getBanana();
    const apple = await applePromise;
    const banana = await bananaPromise;
    return `${apple} + ${banana}`;
}

pickFriuts().then(console.log);

// 3. Promise APIs 사용하기
function pickAllFruits() {
    return Promise.all([getApple(), getBanana()])
    .then(fruits => fruits.join(' + '));
}

pickAllFruits().then(console.log);

function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);