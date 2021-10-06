const h1 = document.querySelector("h1");
const form = document.querySelector("form");
const button = document.querySelector("button");
const input = document.querySelector("input");

const numbers = [];  //랜덤 숫자 준비 배열
const answer = [];  //랜덤 숫자 완성 배열
const tries = [];  //입력 숫자 배열

for(let i = 0; i < 9; i++){
  numbers.push(i+1);
}

for(let i = 0; i < 4; i++){
  const num = Math.floor(Math.random() * (numbers.length - i));
  answer.push(numbers[num]);
  numbers.splice(num,1);
}

const checkInput = (input) => {
  if(input.length !== 4){
    return alert("4자리 숫자를 입력해주세요.");
  }
  if(new Set(input).size !== 4){
    return alert("중복되지 않게 입력해 주세요.");
  }
  if(tries.includes(input)){
    return alert("이미 입력한 숫자입니다.");
  }
  return true;
}

console.log(answer);  // 정답 미리보기

let out = 0;  // 아웃 카운트

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = input.value;
  input.value = ""; 
  if(!checkInput(value)){
    return;
  }
  let strike = 0;
  let ball = 0;
  for(let i = 0; i <answer.length; i++){
    const index = value.indexOf(answer[i]);
    if(index > -1){
      if(index === i){
        strike += 1;
      } else {
        ball += 1;
      }
    } else if(value.includes(0)){
      alert("숫자는 1~9만 입력합니다.");
      return;
    }
  }
  if(answer.join('') === value){
    h1.textContent = "홈런! ";
  }
  if((strike === 0) && (ball === 0)){
    out++;
    h1.innerHTML += `${value} : ${out} 아웃</br>`;
  } else {
    h1.innerHTML += `${value} : ${strike} 스트라이크 ${ball} 볼</br>`;
  }
  if(tries.length >= 9 || out === 3){
    h1.textContent = `게임오버 정답은 ${answer.join('')}입니다.`;
    return;
  }
  tries.push(value);
});




