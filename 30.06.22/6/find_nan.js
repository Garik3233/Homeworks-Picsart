function findNaN(arr) {
  console.log(arr.findIndex(isNaN));

  //   let i = 0;
  //   while (i < arr.length) {
  //     if (Number.isNaN(arr[i])) {
  //         console.log(i);
  //       }
  //     i++;
  //   } console.log(-1);  ???
}

findNaN([1, 2, NaN]);

findNaN([NaN, 1, 2, 3, 4]);

findNaN([0, 1, 2, 3, 4]);
