function compareArrays(arr1, arr2) {
  let result = arr1.every((element, index, arr) => arr1[element] === arr2[element] && arr1[index] === arr2[index]);

  return result; // boolean
}

function advancedFilter(arr) {
  let resultArr = arr.filter((element) => element > 0 && element % 3 === 0).map((element) => element * 10);
  return resultArr; // array
}
