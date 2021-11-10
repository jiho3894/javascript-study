const p = document.querySelector("p");
const h1 = document.querySelector("h1");
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const stop = document.querySelector(".stop");


p.textContent = "1";
const win = [];
const lose = [];

let hi = setInterval(() => {
  if(p.textContent === "1") {
    p.textContent = "2";
  } else if (p.textContent === "2") {
    p.textContent = "3";
  } else {
    p.textContent = "1";
  }
}, 50);

btn1.addEventListener("click", (e) => {
  if(e.target.textContent === p.textContent) {
    console.log("정답");
    win.push(1);
    console.log(win.length);
  } else {
    console.log("실패");
    lose.push(1);
    console.log(lose.length);
  }
  h1.textContent = `${win.length}승 ${lose.length}패`;
});

btn2.addEventListener("click", (e) => {
  if(e.target.textContent === p.textContent) {
    console.log("정답");
    win.push(1);
    console.log(win.length);
  } else {
    console.log("실패");
    lose.push(1);
    console.log(lose.length);
  }
  h1.textContent = `${win.length}승 ${lose.length}패`;
});

btn3.addEventListener("click", (e) => {
  if(e.target.textContent === p.textContent) {
    console.log("정답");
    win.push(1);
    console.log(win.length);
  } else {
    console.log("실패");
    lose.push(1);
    console.log(lose.length);
  }
  h1.textContent = `${win.length}승 ${lose.length}패`;
  clearInterval(hi);
});



if(stop.textContent === "stop") {
  stop.addEventListener("click", (e) => {
    clearInterval(hi);
    console.log(e);
    e.target.textContent = "start";
  })
} else if(stop.textContent === "start") {
  stop.addEventListener("click", () => {
    hi = setInterval(() => {
      if(p.textContent === "1") {
        p.textContent = "2";
      } else if (p.textContent === "2") {
        p.textContent = "3";
      } else {
        p.textContent = "1";
      }
    }, 50);
  })
} else {
  console.log("?")
}





