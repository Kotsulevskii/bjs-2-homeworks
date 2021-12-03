function compareArrays(arr1, arr2) {
  return arr1.every((element, index, arr) => arr1.length === arr2.length && arr1[index] === arr2[index]);
}

function advancedFilter(arr) {
  return arr.filter((element) => element > 0 && element % 3 === 0).map((element) => element * 10);
}
