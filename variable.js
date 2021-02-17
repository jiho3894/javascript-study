'use strict';

// 기본 언어
console.log('hello');

//변수 let
let globalName = 'good bye'
{
let name = 'jiho';
console.log(name);
name = 'console jiho';
console.log(name);
console.log(globalName);
}

// 변수 무시 var
age= 4;
var age;
console.log(age);

//값을 유지
const daysInWeek = '7';
const maxNumber = 5;
console.log(daysInWeek);
console.log(maxNumber);

// 변수 타입 문장 string, 숫자 number
const count = '17';
const size = 17.1;
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// 양수 음수
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
console.log(infinity);
console.log(negativeInfinity);

// 변수 타입 문장 string
const char = 'c';
const human = 'human';
const greeting = 'hello '  + human;
console.log(`value: ${greeting}, type: ${typeof greeting}`);


// 변수 타입 문장 boolean
const canRead = true;
const test = 3 < 1; //거짓
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// 변수 타입 문장 null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// 변수 타입 문장 undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// 변수 타입 문장 symbol 고유 식별자
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);
const fsymbol1 = Symbol.for('id');
const fsymbol2 = Symbol.for('id');
console.log(fsymbol1 === fsymbol2);
console.log(`value: ${symbol1.description} , type:${typeof symbol1}`);

// 숫자와 문장 연산시 나타내는 타입
let text = 'hello';
console.log(text.charAt(0));  // charAt 자릿수 찾기 0부터 시작 
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = 7 + '5';
console.log(`value: ${text}, type: ${typeof text}`);
text = 7 + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);

