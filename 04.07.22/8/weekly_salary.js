function weeklySalary(hours) {
  let salary = 0;

  for (let i = 0; i < hours.length; i++) {
    if (i < 5) {
      hours[i] > 8
        ? (salary += 8 * 10 + (hours[i] - 8) * 15)
        : (salary += hours[i] * 10);
    } else {
      hours[i] > 8
        ? (salary += 8 * 20 + (hours[i] - 8) * 30)
        : (salary += hours[i] * 20);
    }
  }
  console.log(salary);
}

weeklySalary([8, 8, 8, 8, 8, 0, 0]);
// ➞ 400

weeklySalary([10, 10, 10, 0, 8, 0, 0]);
// ➞ 410

weeklySalary([0, 0, 0, 0, 0, 12, 0]);
// ➞ 280
