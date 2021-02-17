'use strict';
/*class: 팥
Object: 팥맛 붕어빵*/

//class 쓰는 방법

class Person {
    constructor(name , age) {
        this.name = name;
        this.age = age;
    }

    speak() {
        console.log(`${this.name} : hello`);
    }
}

const jiho = new Person('jiho', 24);
console.log(jiho.name);
console.log(jiho.age);
jiho.speak();

// 게터와 세터 ( 사용시 this 문법 ._ 사용)
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        this._age = value < 0 ? 0 : value; 
        // value 값이 0보다 작으면 0 그게 아니면 원래 값
    }
}
const user1 = new User('jiho', 'kim' , 24);
console.log(user1.age);

// 상속과 다양성

class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color`);
    }

    getArea() {
        return this.width * this.height;
    }
}
    class Rectangle extends Shape {}
    class Triangle extends Shape {
        draw() {
            super.draw();
            console.log('🔺');
        }

        getArea() {
            return (this.width * this.height ) / 2;
        }
    }

    const rectangle = new Rectangle(20,20,'blue');
    rectangle.draw();
    console.log(rectangle.getArea());
    const triangle = new Triangle(20,20,'red');
    triangle.draw();
    console.log(triangle.getArea());


// 상속 여부 확인하기
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);