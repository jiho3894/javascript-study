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

h1.textContent = `심심해 : ${numPick}`;
p.textContent = `놀아줘 : ${bonus}`;

