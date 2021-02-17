'use strict';

// 1.동기와 비동기
console.log('1');
setTimeout(() => console.log('2') , 1000);  //비동기 1000ms 콜백하기
console.log('3');

// 동기 콜백
function printImmediately(print) {
    print();
}
printImmediately(() => console.log('Hi'));
// 비동기 콜백
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}
printWithDelay(() => console.log('call back') , 2000);

// callback hell example
class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if (
                (id === 'jiho' && password === 'yujin') ||
                (id === 'ellie' && password === 'hello')
            ) {
                onSuccess(id);
            }   else {
                onError(new Error('retry'));
            }
        },2000);
    }

    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if (user === 'jiho'){
                onSuccess({name: 'jiho', role: 'admin'});
            } else {
                onError(new Error('no access'));
            }
        }, 1000);
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
    id, 
    password, 
    user => {
        userStorage.getRoles(
            user,
            userWithRole=> {
                alert(
                    `Hello ${userWithRole.name} , you have a ${userWithRole.role} role`
                );
            },
            error => {
                console.log(error);
            }
        );
    },
    error => {
        console.log(error);
    }
);