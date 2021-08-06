// Iteration #1: Find the maximum
function maxOfTwoNumbers(a, b) {
  if (a > b) {
    return a;
  }
  if (a < b) {
    return b;
  } else {
    return a;
  }
}

// Iteration #2: Find longest word
//const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findLongestWord(words) {
  if (words == '') {
    return null;
  }
  for (let o = 0; o < words.length; o++) {
    for (let i = 0; i < words.length - 1; i++) {
      if (words[i].length < words[i + 1].length) {
        let zz = words[i];
        let yy = words[i + 1];
        words[i] = yy;
        words[i + 1] = zz;
      }
    }
  }
  return words[0];
}

// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
  let totalsum = 0;
  switch (numbers.length > 0) {
    case true:
      for (let i = 0; i < numbers.length; i++) {
        totalsum = totalsum + numbers[i];
      }
      return totalsum;
      break;
    case false:
      return 0;
      break;
  }
}

// Iteration #3.1 Bonus:
function sum(numbers) {
  let totalsum = 0;
  switch (numbers.length > 0) {
    case true:
      for (let i = 0; i < numbers.length; i++) {
        switch (typeof numbers[i] == 'string') {
          case true:
            totalsum = totalsum + numbers[i].length;
            break;
          case false:
            switch (typeof numbers[i] == 'boolean') {
              case true:
                switch (numbers[i]) {
                  case true:
                    totalsum = totalsum + 1;
                    break;
                  case false:
                    break;
                }
                break;
              case false:
                switch (typeof numbers[i] == 'number') {
                  case true:
                    totalsum = totalsum + numbers[i];
                    break;
                  case false:
                    throw new Error(`Unsupported data type sir or ma'am`);
                    break;
                }
                break;
            }
            break;
        }
      }
      return totalsum;
      break;
    case false:
      return 0;
      break;
  }
}

// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers) {
  let totalsum = 0;
  switch (numbers.length > 0) {
    case true:
      for (let i = 0; i < numbers.length; i++) {
        totalsum = totalsum + numbers[i];
      }
      let finalaverage = totalsum / numbers.length;
      return finalaverage;
      break;
    case false:
      return null;
      break;
  }
}

// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(numbers) {
  let totalsum = 0;
  switch (numbers.length > 0) {
    case true:
      for (let i = 0; i < numbers.length; i++) {
        switch (typeof numbers[i] == 'string') {
          case true:
            totalsum = totalsum + numbers[i].length;
            break;
          case false:
            switch (typeof numbers[i] == 'boolean') {
              case true:
                switch (numbers[i]) {
                  case true:
                    totalsum = totalsum + 1;
                    break;
                  case false:
                    break;
                }
                break;
              case false:
                switch (typeof numbers[i] == 'number') {
                  case true:
                    totalsum = totalsum + numbers[i];
                    break;
                  case false:
                    throw new Error(`Unsupported data type sir or ma'am`);
                    break;
                }
                break;
            }
            break;
        }
      }
      let finalaverage = totalsum / numbers.length;
      return finalaverage;
      break;
    case false:
      return null;
      break;
  }
}

// Bonus - Iteration #4.1
function avg(numbers) {
  let totalsum = 0;
  switch (numbers.length > 0) {
    case true:
      for (let i = 0; i < numbers.length; i++) {
        switch (typeof numbers[i] == 'string') {
          case true:
            totalsum = totalsum + numbers[i].length;
            break;
          case false:
            switch (typeof numbers[i] == 'boolean') {
              case true:
                switch (numbers[i]) {
                  case true:
                    totalsum = totalsum + 1;
                    break;
                  case false:
                    break;
                }
                break;
              case false:
                switch (typeof numbers[i] == 'number') {
                  case true:
                    totalsum = totalsum + numbers[i];
                    break;
                  case false:
                    throw new Error(`Unsupported data type sir or ma'am`);
                    break;
                }
                break;
            }
            break;
        }
      }
      let finalaverage = Math.round((totalsum / numbers.length) * 100) / 100;
      return finalaverage;
      break;
    case false:
      return null;
      break;
  }
}

// Iteration #5: Unique arrays
const wordsUnique = [
  'crab',
  'contagious',
  'simple',
  'poison',
  'bring',
  'sharp',
  'playground',
  'poison',
  'communion',
  'simple',
  'bring'
];

function uniquifyArray(arrayWithDuplicates) {
  switch (arrayWithDuplicates.length > 0) {
    case true:
      for (let i = 0; i < arrayWithDuplicates.length; i++) {
        console.log(`i = ${i}`);
        for (let o = 0; o < arrayWithDuplicates.length; o++) {
          console.log(`o = ${o}`);
          if (i != o && arrayWithDuplicates[i] == arrayWithDuplicates[o]) {
            console.log(`arrayWithDuplicates[i] = ${arrayWithDuplicates[i]}`);
            console.log(`arrayWithDuplicates[o] = ${arrayWithDuplicates[o]}`);
            arrayWithDuplicates.splice(o, 1);
          }
        }
      }
      return arrayWithDuplicates;
      break;
    case false:
      return null;
      break;
  }
}

// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function doesWordExist(arrayFind, wordToCheck) {
  switch (arrayFind.length > 0) {
    case true:
      for (let i = 0; i < arrayFind.length; i++) {
        if (arrayFind[i] == wordToCheck) {
          return true;
        }
      }
      return false;
      break;
    case false:
      return null;
      break;
  }
}

// Iteration #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];

function howManyTimes(arrayForCount, wordToCheck) {
  let counter = 0;
  for (let i = 0; i < arrayForCount.length; i++) {
    if (arrayForCount[i] == wordToCheck) {
      counter++;
    }
  }
  return counter;
}

// Iteration #8: Bonus
const matrix = [
  [8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 4, 56, 62, 0],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 3, 49, 13, 36, 65],
  [52, 70, 95, 23, 4, 60, 11, 42, 69, 24, 68, 56, 1, 32, 56, 71, 37, 2, 36, 91],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13, 80],
  [24, 47, 32, 60, 99, 3, 45, 2, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12, 50],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64, 70],
  [67, 26, 20, 68, 2, 62, 12, 20, 95, 63, 94, 39, 63, 8, 40, 91, 66, 49, 94, 21],
  [24, 55, 58, 5, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63, 72],
  [21, 36, 23, 9, 75, 0, 76, 44, 20, 45, 35, 14, 0, 61, 33, 97, 34, 31, 33, 95],
  [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 3, 80, 4, 62, 16, 14, 9, 53, 56, 92],
  [16, 39, 5, 42, 96, 35, 31, 47, 55, 58, 88, 24, 0, 17, 54, 24, 36, 29, 85, 57],
  [86, 56, 0, 48, 35, 71, 89, 7, 5, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
  [19, 80, 81, 68, 5, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 4, 89, 55, 40],
  [4, 52, 8, 83, 97, 35, 99, 16, 7, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
  [88, 36, 68, 87, 57, 62, 20, 72, 3, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53, 69],
  [4, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 8, 46, 29, 32, 40, 62, 76, 36],
  [20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 4, 36, 16],
  [20, 73, 35, 29, 78, 31, 90, 1, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 5, 54],
  [1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67, 48]
];

function greatestProduct(matrixToCheck) {
  let productToCompare = 0;
  let maximunFound = 0;
  for (let i = 0; i < matrixToCheck.length; i++) {
    for (let o = 0; o < matrixToCheck[i].length; o++) {
      if (o < matrixToCheck[i].length - 3) {
        productToCompare =
          matrixToCheck[i][o] * matrixToCheck[i][o + 1] * matrixToCheck[i][o + 2] * matrixToCheck[o + 3];
        if (productToCompare > maximunFound) {
          maximunFound = productToCompare;
        }
      }
      if (i < matrixToCheck.length - 3) {
        productToCompare =
          matrixToCheck[i][o] * matrixToCheck[i + 1][o] * matrixToCheck[i + 2][o] * matrixToCheck[i + 3][o];
        if (productToCompare > maximunFound) {
          maximunFound = productToCompare;
        }
      }
    }
  }
  return maximunFound;
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    maxOfTwoNumbers,
    findLongestWord,
    sumNumbers,
    sum,
    averageNumbers,
    averageWordLength,
    avg,
    uniquifyArray,
    doesWordExist,
    howManyTimes,
    greatestProduct
  };
}
