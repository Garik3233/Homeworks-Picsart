function countTrue(arr) {
  let numOfTrue = 0;
  let i = 0;

  while (i <= arr.length) {
    if (arr[i] === true) {
      numOfTrue++;
    }
    ++i;
  }
  console.log(numOfTrue);
}

countTrue([true, false, false, true, false]);

countTrue([false, false, false, false]);

countTrue([]);
