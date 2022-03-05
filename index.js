const playbtn = document.getElementById("playbtn");
const pausebtn = document.getElementById("pausebtn");
const stopbtn = document.getElementById("stopbtn");
const textInput = document.getElementById("text");
const speedInput = document.getElementById("speed");
let currentCharacter;
playbtn.addEventListener("click", () => {
  playText(textInput.value);
  //console.log(textInput.value);
});
stopbtn.addEventListener("click", stopText);
pausebtn.addEventListener("click", pauseText);
speedInput.addEventListener("input", () => {
  stopText();
  playText(utterrance.text.substring(currentCharacter));
});
const utterrance = new SpeechSynthesisUtterance(text);
utterrance.addEventListener("end", () => {
  textInput.disabled = false;
});
utterrance.addEventListener("boundary", (e) => {
  currentCharacter = e.charIndex;
});
function playText(text) {
  if (speechSynthesis.paused && speechSynthesis.speaking) {
    return speechSynthesis.resume();
  }
  if (speechSynthesis.speaking) return;
  utterrance.text = text;
  utterrance.rate = speedInput.value || 1;
  textInput.disabled = true;
  console.log(utterrance.text.substring(currentCharacter));
  let outlan = document.getElementById("outlangs").value;
  utterrance.lang = outlan;
  window.speechSynthesis.speak(utterrance);
}
function pauseText() {
  if (speechSynthesis.speaking) {
    speechSynthesis.pause();
  }
}
function stopText() {
  speechSynthesis.resume();
  speechSynthesis.cancel();
}
