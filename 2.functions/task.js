// Задание 1
function getArrayParams(arr) {
  let max = arr[0];
  let min = arr[0];
  let sum = 0;
  let avg;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (arr[i] > max) {
      max = arr[i];
    } else if (arr[i] < min) {
      min = arr[i];
     }
  }
  avg = sum / arr.length;
  avg = avg.toFixed(2);
  return { min: min, max: max, avg: +avg };
}

// Задание 2
function worker(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
    return sum;
}

function makeWork(arrOfArr, func) {
  let max = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
    let resultFunc = func(arrOfArr[i]);
    if (resultFunc > max) {
      max = resultFunc;
    }
 }
  return max;
}

// Задание 3
function worker2(arr) {
  let max = arr[0];
  let min = arr[0];
  let diff = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    } else if (arr[i] < min) {
      min = arr[i];
     }
  }
  if (max >= 0 && min >= 0) {
    diff = max - min;
  } else if (max < 0 && min < 0 || min <0 && max >= 0) {
    diff = -(min - max);
  }
  return  diff;
}

