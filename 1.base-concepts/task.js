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
 if (isNaN(percent)) {
   return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
} else if (isNaN(contribution)) {
   return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
} else if (isNaN(amount)) {
   return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
}

  let year = new Date().getFullYear();
  let month = new Date().getMonth();
  let numberOFyears = date.getFullYear() - year;
  let n = numberOFyears * 12  + date.getMonth() - month;
  let P = (percent / 100) / 12;
  let S = amount - contribution;
  let payment = S * (P + (P / (((1 + P) ** n) - 1)))
  let totalAmount = +(payment * n).toFixed(2);
  
  // код для задачи №2 писать здесь

  return totalAmount;
}
