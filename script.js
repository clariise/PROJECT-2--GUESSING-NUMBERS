let randomNumber = Math.floor(Math.random() * 100) + 1;

const guess = document.querySelector("#guess");
const submitBtn = document.querySelector("button");
const message = document.querySelector("#message");
const lifeBar = document.querySelector("#lifes");



let lifes = 10;

submitBtn.addEventListener("click", checkGuess);

for (let i = 0; i < lifes; i++) {
  let life = document.createElement("i");
  life.classList.add("fa", "fa-gamepad", "gamepad");
  lifeBar.append(life);
}

function checkGuess() {
  userGuess = Number(guess.value);

  if (userGuess > randomNumber) {
    message.textContent = "Too high";
    message.style.color = "Red";
    lifeBar.removeChild(lifeBar.lastElementChild);
    lifes -= 1;
  } else if (userGuess < randomNumber) {
    message.textContent = "Too low";
    message.style.color = "Red";
    lifeBar.removeChild(lifeBar.lastElementChild);
    lifes -= 1;
  } else if (userGuess === randomNumber) {
    message.textContent = "Congratulations!";
    message.style.color = "green";
  } else {
    message.textContent = "Hmmm... it doesn't look like a number";
    message.style.color = "blue";
  }
  if (lifes == 0) {
    message.textContent = "GAME OVER!";
    submitBtn.disabled = true;
  }
}