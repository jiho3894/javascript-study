const input = document.querySelector("input");
const span = document.querySelector("span");
const num = document.querySelector(".num");
let word;
let newWord;
setNum = 1;

const gameLength = parseInt(prompt("쿵쿵따 길이 설정"));
const gameMember = parseInt(prompt("인원수 설정"));
console.log(typeof(gameMember));

(isNaN(gameLength) || isNaN(gameMember)) ? 
location.reload(alert("숫자만 입력해주세요")) : 
alert("게임을 시작합니다!");

const control = () => {
  word = newWord;
  span.textContent = word;
  input.value = '';
  input.focus();
  setNum = setNum + 1;
}

const onPress = (e) => {
  if(e.keyCode == 13) {
  if(newWord.length === gameLength && (!word || word[word.length - 1] === newWord[0])) {
    control();
    num.textContent = `${setNum}번째 참가자`;
    if(setNum >= gameMember) {
      return setNum = 0;
    }
  } else {
      alert(`${gameLength}자리만 입력해주세요`);
      input.value = '';
    }
  }
}

const inputWord = (e) => {
  newWord = e.target.value;
}

input.addEventListener('input' , inputWord);
input.addEventListener('keypress', onPress);