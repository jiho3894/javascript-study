// Loop play
// Click시 색상 변경
function playMusic(){
  var C4 = new Audio("sounds/C4.mp3");
  }

const good = document.querySelector(".loop1");
const looping1 = () => {
  playMusic(C4);
  good.classList.add("active");
  }
good.addEventListener("click",looping1);


C4.addEventListener("ended", function() {
  this.currentTime = 0;
  this.playbackRate= 10;
  this.play();
  setTimeout(() => (C4.volume = 1), 2000);
}, false);