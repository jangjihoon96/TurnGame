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
let characterExpBar = document.createElement("div");
let characterExp = document.createElement("div");
characterHpBar.classList.add("hp-bar");
characterHp.classList.add("hp");
characterExpBar.classList.add("exp-bar");
characterExp.classList.add("exp");

let turnButtonAdventure = document.createElement("button");
let turnButtonRecovery = document.createElement("button");
let turnButtonAttack = document.createElement("button");
let turnButtonRun = document.createElement("button");
turnButtonAdventure.setAttribute("type", "button");
turnButtonRecovery.setAttribute("type", "button");
turnButtonAttack.setAttribute("type", "button");
turnButtonRun.setAttribute("type", "button");
turnButtonAdventure.classList.add("turn-adventure");
turnButtonRecovery.classList.add("turn-recovery");
turnButtonAttack.classList.add("turn-attack");
turnButtonRun.classList.add("turn-run");
turnButtonAdventure.innerHTML = "모험을 떠나다.";
turnButtonRecovery.innerHTML = "휴식을 취하다.";
turnButtonAttack.innerHTML = "공격하다.";
turnButtonRun.innerHTML = "도망가다.";

let monsterInfo = document.querySelector(".monster-info");
let percentageHp = 100;
let percentageExp = 0;

let createDomMonsterName = document.createElement("div");
let createDomMonsterHpBar = document.createElement("div");
let createDomMonsterHp = document.createElement("div");
let createDomMonsterImage = document.createElement("img");

createDomMonsterName.classList.add("monster-name");
createDomMonsterHpBar.classList.add("monster-hpBar", "hp-bar");
createDomMonsterHp.classList.add("monster-hp", "hp");
createDomMonsterImage.classList.add("monster-image");
createDomMonsterHp.style.width = `${percentageHp}%`;

const character = {
  lv: 1,
  hp: 100,
  att: 10,
  def: 0,
  exp: 0,
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
    name: "새끼 구미호",
    lv: 8,
    hp: 94,
    att: 14,
    exp: 85,
    src: "./images/monster02.png",
    alt: "새끼 구미호",
  },
  {
    name: "단단한 골렘",
    lv: 13,
    hp: 120,
    att: 24,
    exp: 330,
    src: "./images/monster03.png",
    alt: "단단한 골렘",
  },
];
let onMonster;

// function
const newCharacter = () => {
  character.name = setNameInput.value;
  characterHp.style.width = "100%";
  characterExp.style.width = "0%";
  characterNameText.innerHTML = `Lv ${character.lv}. ${character.name}`;
  characterHpBar.insertAdjacentElement("afterbegin", characterHp);
  characterExpBar.insertAdjacentElement("afterbegin", characterExp);
  characterInfo.insertAdjacentElement("afterbegin", cat);
  characterInfo.insertAdjacentElement("afterbegin", characterExpBar);
  characterInfo.insertAdjacentElement("afterbegin", characterHpBar);
  characterInfo.insertAdjacentElement("afterbegin", characterNameText);
};

const turnOn = () => {
  turnText.innerHTML = "";
  turnText.insertAdjacentElement("afterbegin", turnButtonRecovery);
  turnText.insertAdjacentElement("afterbegin", turnButtonAdventure);
};
const turnAdventure = () => {
  turnText.innerHTML = "";
  turnText.insertAdjacentElement("beforeend", turnButtonAttack);
  turnText.insertAdjacentElement("beforeend", turnButtonRun);
};

const adventureStart = () => {
  let newMonsters = [...monsters];
  let randomNum = Math.floor(Math.random() * 3);
  let createRandomMonster = newMonsters[randomNum];

  createDomMonsterName.innerHTML = `Lv ${createRandomMonster.lv}. ${createRandomMonster.name}`;
  createDomMonsterImage.setAttribute("src", createRandomMonster.src);
  createDomMonsterImage.setAttribute("alt", createRandomMonster.alt);

  createDomMonsterHpBar.insertAdjacentElement("afterbegin", createDomMonsterHp);
  monsterInfo.insertAdjacentElement("afterbegin", createDomMonsterImage);
  monsterInfo.insertAdjacentElement("afterbegin", createDomMonsterHpBar);
  monsterInfo.insertAdjacentElement("afterbegin", createDomMonsterName);

  onMonster = createRandomMonster;
};

const levelUp = () => {
  character.lv += 1;
  character.def += 0.8;
  character.att += 1.3;
  characterNameText.innerHTML = `Lv ${character.lv}. ${character.name}`;
  characterHp.style.width = `${character.hp}%`;
};

const attackMonster = () => {
  let damage =
    100 - Math.floor(((onMonster.hp - character.att) / onMonster.hp) * 100);
  let criticalDamage =
    (100 - Math.floor(((onMonster.hp - character.att) / onMonster.hp) * 100)) *
    1.5;
  let criticalPercentage = Math.floor(Math.random() * 10) + 1;
  if (criticalPercentage >= 8) {
    percentageHp -= criticalDamage;
    console.log("크리티컬 !!");
  } else {
    percentageHp -= damage;
  }
  createDomMonsterHp.style.width = `${percentageHp}%`;
  if (character.hp <= 0) {
    character.hp = 0;
    characterHp.style.width = "0%";
    console.log("캐릭터가 죽었습니다.");
  }

  if (percentageHp <= 0) {
    percentageHp = 100;
    createDomMonsterHp.style.width = "0%";
    monsterInfo.innerHTML = "";
    createDomMonsterHp.style.width = "100%";
    turnOn();

    percentageExp += onMonster.exp;
    while (percentageExp >= 100) {
      monsters.forEach((monster) => {
        monster.exp = Math.floor((monster.exp / 10) * 8);
      });
      percentageExp -= 100;
      characterHp.style.width = "100%";
      levelUp();
    }
    characterExp.style.width = `${percentageExp}%`;
  }
  attackCharacter();
};

const attackCharacter = () => {
  // let damage =
  //   100 - Math.floor(((character.hp - onMonster.att) / character.hp) * 100);
  let damage = Math.floor(onMonster.att - character.def);
  if (character.def >= onMonster.att) {
    --character.hp;
  } else {
    character.hp -= damage;
  }
  character.hp -= damage;
  if (character.hp > 100) {
    character.hp = 100;
  }
  characterHp.style.width = `${character.hp}%`;
  if (character.hp <= 0) {
    character.hp = 0;
    characterHp.style.width = "0%";
    console.log("캐릭터가 죽었습니다.");
  }
};

const recoveryStart = () => {
  characterHp.style.width = "100%";
  character.hp = 100;
};

// Event Listener
setNameButton.addEventListener("click", () => {
  startText.style.display = "none";
  newCharacter();
  turnOn();
});

turnButtonAdventure.addEventListener("click", () => {
  adventureStart();
  turnAdventure();
});

turnButtonRecovery.addEventListener("click", () => {
  recoveryStart();
});

turnButtonAttack.addEventListener("click", () => {
  attackMonster();
});

turnButtonRun.addEventListener("click", () => {
  turnOn();
  monsterInfo.innerHTML = "";
  createDomMonsterHp.style.width = "100%";
  percentageHp = 100;
});
