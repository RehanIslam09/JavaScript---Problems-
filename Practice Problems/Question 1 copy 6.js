/*
  -----------
  Questions : 
  -----------
    Count Properties:
      Write a function countProperties(obj) that returns the number of properties in an object.
      Example:
      countProperties({a: 1, b: 2}); // 2
*/

const genshinCharacter = {
  name: 'Diluc',
  vision: 'Pyro',
  weapon: 'Claymore',
  rarity: 5,
  region: 'Mondstadt',
  constellations: [
    {
      level: 1,
      name: 'Conviction',
      description: 'Normal Attack hits increase ATK.',
    },
    {
      level: 2,
      name: 'Searing Ember',
      description: 'Deals extra Pyro damage when HP is above 50%.',
    },
    {
      level: 3,
      name: 'Relentless',
      description: 'Increases the level of Searing Onslaught by 3.',
    },
  ],
  talents: {
    normalAttack: { name: 'Tempered Sword', damage: [44.5, 48.3, 52.1] },
    elementalSkill: { name: 'Searing Onslaught', damage: [66.2, 71.1, 76.0] },
    elementalBurst: { name: 'Dawn', damage: [210, 225, 240], cooldown: 15 },
  },
  artifacts: [
    {
      set: 'Crimson Witch of Flames',
      pieces: 4,
      bonuses: [
        'Increases Pyro DMG by 15%',
        'Increases Overloaded and Burning DMG by 40%',
      ],
    },
    { set: "Gladiator's Finale", pieces: 2, bonuses: ['ATK +18%'] },
  ],
  party: ['Bennett', 'Xingqiu', 'Jean'],
};

// Short method :

function countProperties(obj) {
  return Object.keys(obj).length;
}

console.log(countProperties(genshinCharacter));

// Manual Method :

function countPropertiesManual(obj) {
  let count = 0;
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      count++;
    }
  }
  return count;
}

console.log(countPropertiesManual(genshinCharacter));

function countProperties2(obj) {
  let count = 0;
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      count++;
    }
  }
  return count;
}

console.log(countProperties2(genshinCharacter));

function countProperties3(obj) {
  return Object.keys(obj).length;
}

console.log(countProperties(genshinCharacter));

function countProperties(obj) {
  return Object.keys(obj).length;
}

console.log(countProperties(genshinCharacter));

function countProperties(obj) {
  return Object.keys(obj).length;
}

console.log(countProperties(genshinCharacter));
