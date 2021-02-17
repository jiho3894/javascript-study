'use strict';

//promise is a jabaScript object for asynchronous operation.
//비동기적인 함수를 사용할때 promise를 사용하면 좋음
// state: pending -> fulfilled or rejected
// Producer vs Consumer

// 1. Producer
//새로운 promise를 만들때 , 집행함수가 바로 실행함
const promise = new Promise((resolve, reject) =>{
    // 헤비한 작업이라 (network , read files에 좋음)
    console.log('doing something');
    setTimeout(() => 
    {
        resolve('jiho');  // resolve 콜백함수 : 성공
        //reject(new Error('Errrrror'));  //reject 콜백함쉬: 실패
    },1000);
});

// 2. Consumer: then, catch , finally
promise
    .then(value => {  //then : 프로미스가 작동했을때
        console.log(value);
    })
    .catch(error => {  //catch : error를 잡아오기
        console.log(error);
    })
    .finally(() => {  //finally : 성공실패 여부 상관없이 마지막에 출력
        console.log('finally');
    });

//3. Promise changing
const fetchNumber = new Promise((resolve,reject) => {
    setTimeout(() => resolve(1), 1000);
});

fetchNumber
.then(num => num * 2)
.then(num => num * 3)
.then(num => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(num - 1), 1000);
    });
})
.then(num => console.log(num));


// 4. Error Handling

const getHen = () =>
    new Promise((resolve,reject) => {
        setTimeout(() => resolve('🐔'), 1000);
    });
const getEgg = hen =>    
    new Promise((resolve,reject) => {
        setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)), 1000);
    });
const Cook = egg =>
    new Promise((resolve,reject) => {
        setTimeout(() => resolve(`${egg} => 🍗`), 1000);
    });

getHen()
.then(getEgg)

.catch(error => {
    return '🍜';
})
.then(Cook)
.catch(console.log)
.then(console.log);

