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

let monsterInfo = document.querySelector(".monster-info");

const character = {
  lv: 1,
  hp: 100,
  att: 10,
};
const monsters = [
  {
    name: "화난 슬라임",
    lv: 1,
    hp: 30,
    att: 5,
    exp: 35,
    src: "./images/monster01.png",
    alt: "화난 슬라임",
  },
  {
    name: "우는 슬라임",
    lv: 5,
    hp: 80,
    att: 12,
    exp: 85,
    src: "./images/monster01.png",
    alt: "우는 슬라임",
  },
  {
    name: "왕 슬라임",
    lv: 10,
    hp: 140,
    att: 24,
    exp: 130,
    src: "./images/monster01.png",
    alt: "왕 슬라임",
  },
];

// function
const newCharacter = () => {
  character.name = setNameInput.value;
  characterHp.style.width = "100%";
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

const adventureStart = () => {
  let newMonsters = [...monsters];
  let randomNum = Math.floor(Math.random() * 3);
  let createRandomMonster = newMonsters[randomNum];
  let createDomMonsterName = document.createElement("div");
  let createDomMonsterHpBar = document.createElement("div");
  let createDomMonsterHp = document.createElement("div");
  let createDomMonsterImage = document.createElement("img");

  createDomMonsterName.classList.add("monster-name");
  createDomMonsterHpBar.classList.add("monster-hpBar", "hp-bar");
  createDomMonsterHp.classList.add("monster-hp", "hp");
  createDomMonsterImage.classList.add("monster-image");

  createDomMonsterName.innerHTML = `Lv ${createRandomMonster.lv}. ${createRandomMonster.name}`;
  createDomMonsterImage.setAttribute("src", createRandomMonster.src);
  createDomMonsterImage.setAttribute("alt", createRandomMonster.alt);

  createDomMonsterHpBar.insertAdjacentElement("afterbegin", createDomMonsterHp);
  monsterInfo.insertAdjacentElement("afterbegin", createDomMonsterImage);
  monsterInfo.insertAdjacentElement("afterbegin", createDomMonsterHpBar);
  monsterInfo.insertAdjacentElement("afterbegin", createDomMonsterName);
};

const recoveryStart = () => {
  characterHp.style.width = "100%";
};

// Event Listener
setNameButton.addEventListener("click", () => {
  startText.style.display = "none";
  newCharacter();
  turnOn();
});

turnButtonAdventure.addEventListener("click", () => {
  adventureStart();
});

turnButtonRecovery.addEventListener("click", () => {
  recoveryStart();
});
