const user = document.createElement("div");
user.classList.add("name");

const title = document.createElement("h1");
title.innerHTML = "Cat's adventure";

const field = document.querySelector(".game-field");
const characterInfo = document.querySelector(".character-info");
const startText = document.querySelector(".start-text");
const setNameInput = document.createElement("input");
setNameInput.setAttribute("type", "text");
setNameInput.setAttribute("placeholder", "이름을 입력해주세요.");

const setNameButton = document.createElement("button");
setNameButton.innerHTML = "시작하기";

const cat = document.createElement("img");
cat.classList.add("cat");
cat.setAttribute("src", "./images/cat.png");

const turnText = document.querySelector(".turn-text");

startText.insertAdjacentElement("afterbegin", setNameButton);
startText.insertAdjacentElement("afterbegin", setNameInput);
startText.insertAdjacentElement("afterbegin", title);

let characterNameText = document.createElement("h2");
let characterHpBar = document.createElement("div");
let characterHp = document.createElement("div");
characterHpBar.classList.add("hp-bar");
characterHp.classList.add("hp");

let turnButtonAdventure = document.createElement("button");
let turnButtonRecovery = document.createElement("button");
turnButtonAdventure.setAttribute("type", "button");
turnButtonRecovery.setAttribute("type", "button");
turnButtonAdventure.classList.add("turn-adventure");
turnButtonRecovery.classList.add("turn-recovery");
turnButtonAdventure.innerHTML = "모험을 떠나다.";
turnButtonRecovery.innerHTML = "휴식을 취하다.";

const character = {
  lv: 1,
  hp: 100,
  att: 10,
};
const monster01 = {
  lv: 1,
  hp: 30,
  att: 5,
  exp: 35,
};
const monster02 = {
  lv: 5,
  hp: 80,
  att: 12,
  exp: 85,
};
const monster03 = {
  lv: 10,
  hp: 140,
  att: 24,
  exp: 130,
};

// function
const newCharacter = () => {
  character.name = setNameInput.value;
  characterHp.style.width = "80%";
  characterNameText.innerHTML = `Lv ${character.lv}. ${character.name}`;
  characterHpBar.insertAdjacentElement("afterbegin", characterHp);
  characterInfo.insertAdjacentElement("afterbegin", cat);
  characterInfo.insertAdjacentElement("afterbegin", characterHpBar);
  characterInfo.insertAdjacentElement("afterbegin", characterNameText);
};

const turnOn = () => {
  turnText.insertAdjacentElement("afterbegin", turnButtonRecovery);
  turnText.insertAdjacentElement("afterbegin", turnButtonAdventure);
};

const adventureStart = () => {};
const recoveryStart = () => {
  characterHp.style.width = "100%";
};

// Event Listener
setNameButton.addEventListener("click", () => {
  startText.style.display = "none";
  newCharacter();
  turnOn();
});

turnButtonRecovery.addEventListener("click", () => {
  recoveryStart();
});
