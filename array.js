
// 1. array
const arr1 = new Array();
const arry2 = [1,2];

// 2. index
const fruits = ['🍎','🍌'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length -1]);

// 3. array looping
for( i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

// 3-1. for of
for (let fruit of fruits) {
    console.log(fruit);   
}

// 3-2 forEach
fruits.forEach((fruit) => console.log(fruit));

// 배열의 추가 삭제 복사
// push: add in item to the end
fruits.push('🍕','🍔');
console.log(fruits);

// pop: remove an item from the end
fruits.pop();  // 맨뒤 배열 삭제
fruits.pop();
console.log(fruits);

// unshift: add an item to the benigging
fruits.unshift('1','2');
console.log(fruits);

// shift :remove an item from the benigging
fruits.shift();
console.log(fruits);
fruits.shift();
console.log(fruits);
// shift, unshift are slower than pop, push
// pop 과 push 를 사용하는게 합리적
// splice : remove an item by index position
fruits.push('🍒','🍈','🍆');
console.log(fruits);
fruits.splice(1 , 1);  //지정한 index부터 끝까지 (지정을 안해서)
console.log(fruits);
fruits.splice(1, 1, '🍕', '🍔');
console.log(fruits);

// 두가지의 배열을 묶기
const fruits2 = ['🥗','🥙'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. searching
// find the index : indexOf
console.clear();
console.log(fruits);
console.log(fruits.indexOf('🍕'));
console.log(fruits.indexOf('1')); // 값 없으면 = -1

// includes (포함 여부 boolen)
console.log(fruits.includes('🍔'));
console.log(fruits.includes('3'));

// lastIndexOf
fruits.push('🍎');
console.log(fruits.indexOf('🍎'));
console.log(fruits.lastIndexOf('🍎'));

