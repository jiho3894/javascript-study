const h1 = document.querySelector("h1");

const candidate = Array(45).fill().map((e,i) => i + 1);
const shuffle = [];

while(candidate.length > 0) {
  const random = Math.floor(Math.random() * candidate.length);
  const spliceArray = candidate.splice(random,1);
  const value = spliceArray[0];
  shuffle.push(value);
}

const winBalls = shuffle.slice(0,6).sort((a,b) => a - b);
const bonus = shuffle[6];
console.log(winBalls);
console.log(bonus);