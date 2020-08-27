'use strict';

const methods = {
  pourEnergy(element) {
    let overlaps = 0;

    for (let level = element.y + 1;
      level <= document.querySelectorAll('tr').length;
      level++) {
      if (document.querySelector(`tr:nth-child(${level})
        > th:nth-child(${element.x})`).children.length) {
        overlaps++;

        if (overlaps === 3) {
          break;
        }
      }
    }

    this.energy += (energyIncomingBasics
      + (element.y * gainPerLevel))
      * (3 - overlaps);
  },

  addSeed(cellX, cellY, activeGenom) {
    let x = cellX;
    const y = cellY;

    if (x > document.querySelectorAll(`tr:first-child > th`).length) {
      x = 1;
    }

    if (x < 1) {
      x = document.querySelectorAll(`tr:first-child > th`).length;
    }

    const targetCell = document
      .querySelector(`tr:nth-child(${y}) > th:nth-child(${x})`);

    if (y < 1 || y > 24
      || targetCell.children.length) {
      return;
    }

    const seed = {
      x,
      y,
      activeGenom,
      element: document.createElement('div'),
      energy: 0,
      __proto__: methods,
    };

    seed.element.style.background = '#fff';

    targetCell.append(seed.element);
    this.seeds.push(seed);
    this.partsCount++;
  },
};

function createTree(genom) {
  return {
    age: 0,
    energy: startTreeEnergy,
    partsCount: 0,
    woods: [],
    seeds: [],
    genom,
    inFall: true,
    color: `rgb(${Math.floor(Math.random() * 256)},
      ${Math.floor(Math.random() * 256)},
      ${Math.floor(Math.random() * 256)})
    `,
    __proto__: methods,
  };
}

function doStep() {
  for (const tree of [...trees]) {
    if (tree.inFall) {
      if (tree.seeds[0].y > 1) {
        const targetCell = document
          .querySelector(`tr:nth-child(${tree.seeds[0].y - 1})
          > th:nth-child(${tree.seeds[0].x})`);

        if (!targetCell.children.length) {
          tree.seeds[0].y--;
          targetCell.append(tree.seeds[0].element);
        } else {
          trees.splice(trees.indexOf(tree), 1);
          tree.seeds[0].element.remove();
        }

        continue;
      } else {
        tree.inFall = false;
      }
    }

    for (const wood of tree.woods) {
      tree.pourEnergy(wood);
    }
    tree.energy -= tree.partsCount * treeEnergyConsumption;

    if (tree.energy < 0 || tree.age > 30) {
      for (const wood of tree.woods) {
        wood.element.remove();
      }
      trees.splice(trees.indexOf(tree), 1);

      for (const seed of tree.seeds) {
        seed.element.remove();

        const newGenom = tree.genom.map(gen => [...gen]);

        if (Math.random() > 0.75) {
          const mutGen = Math.floor(Math.random() * 16);
          const mutValue = Math.floor(Math.random() * 4);

          newGenom[mutGen][mutValue] = Math.floor(Math.random() * 31);
        }

        const newTree = createTree(newGenom);

        newTree.addSeed(seed.x, seed.y, newTree.genom[0]);
        newTree.seeds[0].pourEnergy(newTree.seeds[0]);
        trees.push(newTree);
      }
      continue;
    }

    for (const seed of [...tree.seeds]) {
      if (seed.energy < energyToSprout) {
        continue;
      }

      tree.woods.push(tree.seeds.splice(tree.seeds.indexOf(seed), 1)[0]);
      seed.element.style.background = tree.color;

      if (seed.activeGenom[0] < 16) {
        tree.addSeed(seed.x - 1, seed.y, tree.genom[seed.activeGenom[0]]);
      }

      if (seed.activeGenom[1] < 16) {
        tree.addSeed(seed.x, seed.y + 1, tree.genom[seed.activeGenom[1]]);
      }

      if (seed.activeGenom[2] < 16) {
        tree.addSeed(seed.x + 1, seed.y, tree.genom[seed.activeGenom[2]]);
      }

      if (seed.activeGenom[3] < 16) {
        tree.addSeed(seed.x, seed.y - 1, tree.genom[seed.activeGenom[3]]);
      }
    }

    for (const seed of tree.seeds) {
      seed.pourEnergy(seed);
    }

    tree.age++;
  }
};

const trees = [];

let startTreeEnergy = +document
  .querySelector('.startTreeEnergyInput').value;
let energyToSprout = +document
  .querySelector('.seedEregyToSproutInput').value;
let treeEnergyConsumption = +document
  .querySelector('.treeEregyConsumptionInput').value;
let energyIncomingBasics = +document
  .querySelector('.sunIncomingBasicsInput').value;
let gainPerLevel = +document
  .querySelector('.sunGainPerLevel').value;

const startGenom = [];

for (let i = 0; i < 16; i++) {
  startGenom.push([
    Math.floor(Math.random() * 31),
    Math.floor(Math.random() * 31),
    Math.floor(Math.random() * 31),
    Math.floor(Math.random() * 31)]);
}

trees.push(createTree(startGenom));

trees[0].addSeed(32, 1, trees[0].genom[0]);
trees[0].seeds[0].pourEnergy(trees[0].seeds[0]);

let timer;

const startButton = document.querySelector('.startButton');

startButton.onclick = () => {
  if (document.querySelector('.genomInput')) {
    if (document.querySelector('.genomInput').value) {
      trees[0].genom = isNaN(document.querySelector('.genomInput').value);
    };
    document.querySelector('.genomArea').remove();
  }

  if (timer) {
    clearInterval(timer);
    timer = null;
    startButton.innerHTML = 'START';
  } else {
    timer = setInterval(doStep, 10);
    startButton.innerHTML = 'STOP';
  }
};

document.querySelector('.applySettings').onclick = () => {
  startTreeEnergy = +document
    .querySelector('.startTreeEnergyInput').value;

  energyToSprout = +document
    .querySelector('.seedEregyToSproutInput').value;

  treeEnergyConsumption = +document
    .querySelector('.treeEregyConsumptionInput').value;

  energyIncomingBasics = +document
    .querySelector('.sunIncomingBasicsInput').value;

  gainPerLevel = +document
    .querySelector('.sunGainPerLevel').value;
};
