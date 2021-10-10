const h1 = document.querySelector("h1");
const p = document.querySelector("p");

const num = Array(45).fill().map((_,i) => i + 1);
const shuffle = [];

for (let i = 0; i < num.length; i++) {
  const random = Math.floor(Math.random() * num.length);
  const spliceArray = num.splice(random,1);
  const value = spliceArray[0];
  shuffle.push(value);
}

const numPick = shuffle.slice(0,6).sort((a,b) => a - b);
const bonus = shuffle[6];

for(let i = 0; i < 6; i++){
  setTimeout(() => {
    const ball = document.createElement("div");
    ball.className = "ball";
    ball.textContent = numPick[i];
    h1.appendChild(ball);
  }, (i+1) * 1000);
}

setTimeout(() => {
  p.textContent = `보너스 번호 : ${bonus}`;
}, 7000);


