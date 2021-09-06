function solveEquation(a, b, c) {
  let arr = [];
  let d = b * b - 4 * a * c;
  if (d === 0) {
    let x = -b / (2 * a);
    arr.push(x);
    console.log(arr);
  }
  else if (d > 0) {
    let x1 = (-b + Math.sqrt(d)) / (2 * a);
    let x2 = (-b - Math.sqrt(d)) / (2 * a);
    arr.push(x1);
    arr.push(x2);
    console.log(arr);
  } else {
    console.log(arr);
  }
  return arr; 
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
