const h1 = document.querySelector("h1");
const p = document.querySelector("p");
const a =  document.querySelector("a");

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
const color = ["Red", "Orange", "Yellow", "Green", "Blue"];

for(let i = 0; i < numPick.length; i++){
  setTimeout(() => {
    const ball = document.createElement("div");
    const ballStyle = ball.style;
    ball.className = "ball";
    ball.textContent = numPick[i];
    if(numPick[i] < 10) {
      ballStyle.backgroundColor = color[0];
      ballStyle.color = "white";
    } else if(numPick[i] < 20) {
      ballStyle.backgroundColor = color[1];
    } else if(numPick[i] < 30) {
      ballStyle.backgroundColor = color[2];
    } else if(numPick[i] < 40) {
      ballStyle.backgroundColor = color[3];
      ballStyle.color = "white";
    } else {
      ballStyle.backgroundColor = color[4];
      ballStyle.color = "white";
    }
    h1.appendChild(ball);
  }, (i+1) * 1000);
}

setTimeout(() => {
  const bounsBall = document.createElement("div");
  bounsBall.className = "bouns";
  p.textContent = `보너스 번호 : ${bonus}`;
  for(let i = 0; i < color.length; i++) {
    setTimeout(() => {
      a.style.color = color[i];
    }, (i+1) * 2000);
  }
  a.textContent = `당첨 여부 확인하기`;
  p.appendChild(bounsBall);
}, 7000);


