'use strict';
/*함수
function name(param1, param2) {body...return;}
함수는 하나당 한가지의 일만 할당해줘야
깔끔함 */

function printHello(){
    console.log(`Hello`);
}

printHello();

function log(message) {
    console.log(message);
}
log(`Hi`);
log(123);

//매개 변수 (전달된 함수로 무조건 출력)
function changeName(obj){
    obj.name = 'coder';
}
const jiho = {name: 'jiho'};
changeName(jiho);
console.log(jiho);

//기본값 매개 변수
function showMessage(message, from = 'what?') {
    console.log(`${message} by ${from}`);
}
showMessage('hi' , 'hello');

//rest 매개 변수 (...)배열함수 출력방법 3가지
function printAll(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
    for (const arg of args) {
        console.log(arg);
    }
    args.forEach((arg) => console.log(arg));
}
printAll('what are' , 'you doing');

// local scope 지역 변수 (안에서만 밖이 보이는)
let globalMessage = 'global';
function printMessage() {
    let message = 'hello';
    console.log(message); // 밖에서 안보임
    console.log(globalMessage);  // 밖에서 보임 global 함수
}
printMessage();

//6. 함수 return

function sum(a,b) {
    return a + b;
}
const result = sum(1,2);
console.log(`sum: ${sum(1,2)}`);


//7. early return
function upgradeUser(user) {
    if (user.point <= 10) {
        return;
    }
}

// 경험 함수
const print = function () {
    console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1,3));

// callback
function randomQuiz(answer, printYes, printNo) {
    if (answer === 'wrong') {
        printYes();
    }
    else {
        printNo();
    }
}
const printYes = function(){
    console.log('Yes');
}
const printNo = function print(){
    console.log('No');
}
randomQuiz('wrong', printYes , printNo);
randomQuiz('love you', printYes, printNo);


//arrow function (화살표 함수)
/*const simplePrint = function () {
    console.log('simplePrint');
}*/

const simplePrint = () => console.log('simplePrint');
const add = (a,b) => a + b;

// IIFE : Immetiately Inboked Function Expreession
(function hello () {
    console.log('IIFE');
})();
