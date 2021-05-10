playSound = (event) => {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  const key = document.querySelector(`li[data-key="${event.keyCode}"]`);
  if (audio) {
    audio.currentTime = 4; //시작 구간 sec
    audio.play();
    key.classList.add("playing");
  }
};

removeTransition = (event) => {
  if (event.propertyName === "transform") {
    event.target.classList.remove("playing");
  }
};

window.addEventListener("keydown", playSound);

const keyList = document.querySelectorAll("li");
keyList.forEach(el => {
  el.addEventListener("transitionend", removeTransition);
});
