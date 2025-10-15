/*
  -----------
  Questions : 
  -----------
    Swap Keys and Values:
      Write a function swapKeysAndValues(obj) that swaps the keys and values of an object.
      Example:
      swapKeysAndValues({a: 1, b: 2}); // {1: 'a', 2: 'b'}
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

function swapKeysAndValues(obj) {
  const swapped = {};

  for (key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key];
      swapped[value] = key;
    }
  }
  return swapped;
}

console.log(swapKeysAndValues(genshinCharacter));

function swapKeysAndValues(obj) {
  const swapped = {};
  for (key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key];
      swapped[value] = key;
    }
  }
  return swapped;
}

console.log(swapKeysAndValues(genshinCharacter));
