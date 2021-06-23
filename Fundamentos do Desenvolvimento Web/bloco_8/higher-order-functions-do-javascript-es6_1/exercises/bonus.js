const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonAttack = (dragon) => {
  const min = 15;
  const {strength} = dragon;
  return Math.floor(Math.random() * (strength - min)) + min; 
};

const warriorAttack = (warrior) => {
  const min = warrior.strength;
  const {weaponDmg} = warrior;
  const maxDamage = min * weaponDmg;
  const attack = Math.floor(Math.random() * (maxDamage - min)) + min;
  return attack;
}

const mageAttack = (mage) => {
  const min = mage.intelligence;
  const max = min * 2;
  const {mana} = mage;

  const turnAttack = {
    manaLost: 0,
    damage: 'Não há mana suficiente',
  };
  
  if (mana > 15) {
    const dmg = (Math.floor(Math.random() * (max - min)) + min);
    turnAttack.manaLost = 15;
    turnAttack.damage = dmg;
    return turnAttack;
  }
  return turnAttack;
}

const gameActions = {
  // Crie as HOFs neste objeto.
  warriorTurn: () => {
    const attackWarrior = warriorAttack(warrior);
    dragon.healthPoints -= attackWarrior;
    warrior.damage = attackWarrior;
  },

  mageTurn: () => {
    const attackMage = mageAttack(mage);
    dragon.healthPoints -= attackMage;
    mage.damage = attackMage.damage;
    mage.mana -= attackMage.manaLost;
  },

  dragonTurn: () => {
    const attackDragon = dragonAttack(dragon);
    mage.healthPoints -= attackDragon;
    warrior.healthPoints -= attackDragon;
    dragon.damage = attackDragon;
  },

  resultTurn: () => battleMembers,
};

gameActions.warriorTurn();
gameActions.mageTurn();
gameActions.dragonTurn();
console.log(gameActions.resultTurn());
