function sumTwoSmallestNums(arr) {
  let sorted = arr.sort((a, b) => a - b);
  //   console.log(sorted);
  let i = 0;
  while (i < sorted.length) {
    if (sorted[i] >= 0 && sorted[i + 1] >= 0) {
      console.log(sorted[i] + sorted[i + 1]);
      break;
    }
    i++;
  }
}

sumTwoSmallestNums([19, 5, 42, 2, 77]);

sumTwoSmallestNums([10, 343445353, 3453445, 3453545353453]);

sumTwoSmallestNums([2, 9, 6, -1]);

sumTwoSmallestNums([879, 953, 694, -847, 342, 221, -91, -723, 791, -587]);

sumTwoSmallestNums([3683, 2902, 3951, -475, 1617, -2385]);
