const input = document.querySelector("input");
const button = document.querySelector("button");
const span = document.querySelector("span");
const num = document.querySelector(".num");
let word;
let newWord;

const control = () => {
  word = newWord;
  span.textContent = word;
  input.value = '';
  number= 1;
  number = number + 1;
  num.innerHTML = number;
  input.focus();
}

const onClick = () => {
  if(!word || word[word.length - 1] === newWord[0]) {
    control();
  } else {
      alert("오류");
      input.value = '';
      num.innerHTML = number;
    }
  }

const inputWord = (e) => {
  newWord = e.target.value;
  if(newWord.length === 0) {
    return undefined;
  }
}

button.addEventListener('click' , onClick);
input.addEventListener('input' , inputWord);