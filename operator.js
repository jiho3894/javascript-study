'use strict';
// 1. 문장 연결
console.log('my' + ' cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);

// 2. 숫자 연산
console.log(2 + 1);
console.log(2 - 1);
console.log(2 / 1);
console.log(2 * 1);
console.log(5 % 2);  //나머지 값
console.log(5 ** 2);  //제곱승

//증가 감소 연산
let counter = 2;
const preIncrement = ++counter;
console.log(`preIncrement: ${preIncrement}, counter : ${counter}`);   // 3 , 3
const postIncrement = counter++;
console.log(`postIncrement: ${postIncrement}, counter : ${counter}`);  // 3, 4
const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, counter : ${counter}`);  // 3 , 3
const postDecrement = counter--;
console.log(`postDecrement: ${postDecrement}, counter : ${counter}`);   // 3, 2

// 변수 할당 연산
var x = 6;
x += 2;  // x = x + y
x -= 2;  // x = x - y 
x *= 2;   //  x = xy
x /= 2;  // x = x/y
console.log(`${x += 2}`);
console.log(`${x -= 2}`);
console.log(`${x *= 2}`);
console.log(`${x /= 2}`);

// 비교 할당 연산
console.log(10 < 6);
console.log(10 >= 6);
console.log(10 > 6);
console.log(10 <= 6);

// || (or), && (and), ! (not)
// || (or)은 첨에 끝나면 바로 끝남 value1
const value1 = false;
const value2 = 4 < 2;

console.log(`or: ${value1 || value2 || check()}`);
/* && (and)은 첨에 끝나면 바로 끝남
그래서 무거운걸 뒤에두셈 */
console.log(`and: ${value1 && value2 && check()}`);

function check() {
    for (let i = 0; i < 10; i++) {
        console.log('oh my god');
    }
    return true;
}
// ! (not)
console.log(!value1);
console.log('타입문제');

// 같다 (=)  연산
const stringFive = '5';
const numberFive = 5;

// 타입을 신경안씀 (그래서 그냥 같은5로침)
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);
// 타임을 신경씀 (그래서 문장 숫자 다르다고함)
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

const jiho1 = { name: 'jiho' };
const jiho2 = { name: 'jiho' };
const jiho3 = jiho1;
console.log(jiho1 == jiho2);
console.log(jiho1 == jiho3);
console.log(jiho1 === jiho2);
console.log(jiho1 === jiho3);
console.log('종류별 여부');

console.log(0 == false); //null은 false = ture;
console.log(0 === false); //no booltype = false;
console.log('' == false); //empty 는 false = false;
console.log('' === false); //no booltype = false;
console.log(null == undefined);  //true;
console.log(null === undefined);  // no type matching = false;

// if , else if , else
const name = 'jiho';
if (name === 'jiho') {
    console.log('안녕');
} else if (name === 'yujin') {
    console.log('넌 누구야');
} else {
    console.log('unkwnon');
}

// type 별 boolean
//false : 0 , -0 , '' , null , undefined
//true : -1 , 'hello'(string)
if (0) {
    console.log('true');
}
else {
    console.log('false');
}

// Ternary operator: ? 
//name 이 jiho 야? 그럼 yes 아니면 : no
console.log(name === 'jiho' ? 'yes' : 'no');


// switch
const browser = 'two';
switch (browser) {
    case 'one':
        console.log('일');
        break;
    case 'two':
    case 'three':
        console.log('이삼');
        break;
    default:
        console.log('back');
        break;
}

//while loop 반복문 (조건문이 맞을때까지)
let i = 3;
while (i <= 5) {
    console.log(`while: ${i}`);
    i++;
}

// do while (조건문이 맞을때만)
do {
    console.log(`do while : ${i}`);
    i--;
} while (i > 0);

// for loop 맞을때까지
for (i = 3; i > 0; i--) {
    console.log(`for : ${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
    console.log(`inline variable for: ${i}`);
}

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        console.log(`i : ${i} , j : ${j}`);
    }
}

// 짝수만 호출하기 (0제외)
// 홀수만은 if (i % 2 == 0)
for (let i = 1; i < 7; i++) {
    if (i % 2 == 1) {
        continue;
    }
    console.log(`q1. ${i}`);
}

// 특정 범위에서 중간끊기
for (let i = 0; i < 10; i++) {
    if (i % 2 == 1){
        continue;
        if (i > 8){
            break;
        }
    }
    console.log(`q2. ${i}`);
}






