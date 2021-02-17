//callback hell example

class UserStorage {
    loginUser(id, password) {
        return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (
                (id === 'jiho' && password === 'yujin') ||
                (id === 'ellie' && password === 'hello')
            ) {
                resolve(id);
            }   else {
                reject(new Error('retry'));
            }
        },1000);
    });
    }

    getRoles(user) {
        return new Promise((resolve,reject) => {
        setTimeout(() => {
            if (user === 'jiho'){
                resolve({name: 'jiho', role: 'owner'});
            } else {
                reject(new Error('no access'));
            }
        }, 1000);
    });
    }
}

const userStorage = new UserStorage();
const id = prompt('id를 입력해주세요');
const password = prompt('password를 입력해주세요');
userStorage
.loginUser(id, password)
.then(userStorage.getRoles)
.then(user => alert(`안녕하세요 ${user.name} 님 , 당신은 ${user.role} 이시군요`))
.catch(console.log);