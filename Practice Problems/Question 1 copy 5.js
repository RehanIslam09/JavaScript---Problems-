/*
  -----------
  Questions : 
  -----------
    Merge Two Objects:
      Create a function mergeObjects(obj1, obj2) that merges two objects.
      Example:
      mergeObjects({a: 1}, {b: 2}); // {a: 1, b: 2}
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

const beamNGVehicle = {
  name: 'Gavril D-Series',
  type: 'Pickup Truck',
  engine: {
    model: 'V8 6.2L',
    horsepower: 450,
    torque: 600,
    fuelType: 'Gasoline',
    rpmRange: { idle: 700, redline: 6500 },
  },
  drivetrain: {
    type: 'RWD',
    gears: 6,
    differential: 'Limited Slip',
  },
  tires: [
    { position: 'Front Left', type: 'All-Terrain', pressure: 32 },
    { position: 'Front Right', type: 'All-Terrain', pressure: 32 },
    { position: 'Rear Left', type: 'All-Terrain', pressure: 35 },
    { position: 'Rear Right', type: 'All-Terrain', pressure: 35 },
  ],
  damage: {
    engine: 0,
    chassis: 5,
    suspension: 2,
    tires: [0, 0, 1, 0],
  },
  mods: ['Roll Cage', 'Off-Road Suspension', 'Turbocharger'],
  paint: {
    color: 'Matte Red',
    decals: ['Stripe1', 'Logo_Gavril'],
  },
};

// Modern + easiest :

function mergeObjects(obj1, obj2) {
  return { ...obj1, ...obj2 };
}

console.log(mergeObjects(genshinCharacter, beamNGVehicle));

// Manual method to learn how objects work :

function mergeObjectsManual(obj1, obj2) {
  const result = {};

  for (let key in obj1) {
    result[key] = obj1[key];
  }

  for (let key in obj2) {
    result[key] = obj2[key];
  }

  return result;
}

console.log(mergeObjectsManual(genshinCharacter, beamNGVehicle));
