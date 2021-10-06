const number = document.querySelector(".number");
const operator = document.querySelector(".operator");
const text = document.querySelector("p");
let firstNumber;
let secondNumber;
let sum;

const onClick = (e) => {
  number.value += e.target.textContent;
}

const clickOperator = (e) => {
  if(number.value){
  firstNumber = number.value;
  number.value = "";
  operator.value = e.target.textContent;
  } else {
    alert("첫번째 값을 넣어주세요.");
  }
}

const reset = () => {
  number.value = "";
  operator.value = "";
}

const result = (e) => {
  secondNumber = number.value;
  firstNumber = Number(firstNumber);
  secondNumber = Number(secondNumber);
  if(operator.value === "+") {
    sum = firstNumber + secondNumber;
    return text.textContent = sum;
  }
  if(operator.value === "-") {
    sum = firstNumber - secondNumber;
    return text.textContent = sum;
  }
  if(operator.value === "*") {
    sum = firstNumber * secondNumber;
    return text.textContent = sum;
  }
  if(operator.value === "/") {
    sum = firstNumber / secondNumber;
    return text.textContent = sum;
  }
}

document.querySelector(".num0").addEventListener("click", onClick);
document.querySelector(".num1").addEventListener("click", onClick);
document.querySelector(".num2").addEventListener("click", onClick);
document.querySelector(".num3").addEventListener("click", onClick);
document.querySelector(".num4").addEventListener("click", onClick);
document.querySelector(".num5").addEventListener("click", onClick);
document.querySelector(".num6").addEventListener("click", onClick);
document.querySelector(".num7").addEventListener("click", onClick);
document.querySelector(".num8").addEventListener("click", onClick);
document.querySelector(".num9").addEventListener("click", onClick);
document.querySelector(".numAdd").addEventListener("click", clickOperator);
document.querySelector(".numMin").addEventListener("click", clickOperator);
document.querySelector(".numMul").addEventListener("click", clickOperator);
document.querySelector(".numDiv").addEventListener("click", clickOperator);
document.querySelector(".numResult").addEventListener("click", result);
document.querySelector(".numReset").addEventListener("click", reset);


