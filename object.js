
// Object = { key : value };

// 1.리터널 과 속성
const obj1 = {};  // 객체 초기자
const obj2 = new Object();  // 객체 생성자

function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const jiho = { name : 'jiho' , age : 4};
print(jiho);

//object 추가 선언 가능 (가능하면 하지마셈 오류 발생우려)
jiho.hasjob = true;
console.log(jiho.hasjob);
//삭제도 가능
delete jiho.hasjob;
console.log(jiho.hasjob);

// 2.계산된 속성
console.log(jiho.name);
console.log(jiho['name']);  // ket는 string type
jiho['hasjob'] = true;
console.log(jiho.hasjob);

function printValue(obj , key){
    console.log(obj[key]);
}

printValue(jiho , 'name');
printValue(jiho , 'age');

// 3.Property value shorthand
const person1 = {name : 'jija' , age : '4'};
const person2 = {name : 'yujin' , age : '5'};
const person3 = {name : 'fuck' , age : '6'};
const person4 = new Person('jiha',4);
console.log(person4);
// 4. 생성자함수
function Person(name, age) {
        this.name = name;
        this.age = age;
    
}

//5.in operator
console.log('name' in jiho);
console.log('age' in jiho);
console.log('ramdom' in jiho);
console.log(jiho.ramdom);

//6. for..in vs for..of
//for (key in obj)

for (key in jiho) {
    console.log(key);
}
//for (value of iterable)
const array = [1, 2, 4, 5];
for(value of array) {
    console.log(value);
}

// 7. cloning
// Object.assign(dest , [obj1, obj2 ...])
const user = {name : 'jiho' , age : '4'};
const user2 = user;
user2.name = 'coder';
console.log(user);

const user4 = Object.assign({} , user);
console.log(user4);

// another 예재 mixed
//뒤에 있는 fruit2가 fruit1을 덮는 형식
const fruit1 = { color: 'red'};
const fruit2 = { color: 'blue', size: 'big'};
const mixed = Object.assign({}, fruit1 , fruit2);
console.log(mixed.color);
console.log(mixed.size);

