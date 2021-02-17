class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if (
                (id === 'jiho' && password === 'yujin')
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
                onSuccess({name: 'jiho', role: 'yujin'});
            } else {
                onError(new Error('no access'));
            }
        }, 500);
    }
}

const userStorage = new UserStorage();
const id = prompt('아이디를 입력하세요 (공용 id : jiho)');
const password = prompt('비밀번호를 입력하세요 (공용 password : yujin)');
userStorage.loginUser(
    id, 
    password, 
    user => {
        userStorage.getRoles(
            user,
            userWithRole=> {
                alert(
                    `어서오세요 ${userWithRole.name}님 , 오늘도 좋은하루 보내세요~`
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

