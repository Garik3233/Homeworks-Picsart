function numLeapYears(str) {
  const arr = str.split("-");

  let sum = 0;

  for (let i = +arr[0]; i <= +arr[1]; i++) {
    const leapYear = new Date(i, 1, 29).getDate();

    if (leapYear == 29) {
      sum++;
    } else {
      sum = sum;
    }
  }

  return sum;
}

numLeapYears("1980-1984");
// ➞ 2

numLeapYears("2000-2020");
// ➞ 6

numLeapYears("1600-2000");
// ➞ 98
