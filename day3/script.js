const fs = require("fs");

const calcPriority = (compartmentArr) => {
  const sumPriortiy = compartmentArr.split("").map((item) => {
    if (item === item.toUpperCase()) {
      return item.charCodeAt(0) - 64 + 26;
    } else {
      return item.charCodeAt(0) - 96;
    }
  });
  return sumPriortiy;
};

const sortCompartments = (rucksack) => {
  const compA = calcPriority(rucksack[0]);
  const compB = calcPriority(rucksack[1]);
  const findPrio = compA.filter((val) => {
    if (compB.includes(val)) {
      return val;
    }
  });
  return findPrio;
};

const sortCompartmentsFromGroups = (groupOfThreeSacks) => {
    const group1 = calcPriority(
      groupOfThreeSacks[0][0] + groupOfThreeSacks[0][1]
    );
    const group2 = calcPriority(
      groupOfThreeSacks[1][0] + groupOfThreeSacks[1][1]
    );
    const group3 = calcPriority(
      groupOfThreeSacks[2][0] + groupOfThreeSacks[2][1]
    );
  
    const findBadge = group1.filter((val) => {
      if (group2.includes(val)) {
        if (group3.includes(val)) {
          return val;
        }
      }
    });
  
    return findBadge[0];
  };
  
  const groupOfThree = (arr) => {
    let tempGroup = [];
    let groups = [];
  
    arr.map((array) => {
      if (tempGroup.length >= 3) {
        groups.push(tempGroup);
        tempGroup = [];
      } else {
        tempGroup.push(array);
        if (tempGroup.length >= 3) {
          groups.push(tempGroup);
          tempGroup = [];
        }
      }
    });
  
    return groups;
  };

  

try {
  startTime = performance.now();
  const data = fs.readFileSync("./input.txt", "utf8");
  const rucksacks = data.split(/\r?\n/);
  const rucksackCompartments = rucksacks.map((rucksack) => {
    let compartMents = [];
    compartMents.push(rucksack.slice(0, rucksack.length / 2));
    compartMents.push(rucksack.slice(rucksack.length / 2));
    return compartMents;
  });
  const prioNumbers = rucksackCompartments.map((rucksack) =>
    sortCompartments(rucksack)
  );
  const prioNumArr = prioNumbers.map((prio) => prio[0]);
  const prioSum = prioNumArr.reduce((a, b) => a + b, 0);
  console.log("star 1 output:", prioSum);

  const groupsOfThreeElfs = groupOfThree(rucksackCompartments);

  const badges = groupsOfThreeElfs.map((group) => sortCompartmentsFromGroups(group));

  const sumOfBadges = badges.reduce((a, b) => a + b, 0);
  console.log("star 2 output:",sumOfBadges);

  let endTime = performance.now();
} catch (err) {
  console.error(err);
}
