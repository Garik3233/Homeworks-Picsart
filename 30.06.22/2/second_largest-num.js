function secondLargest(arr) {
  let temp;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr.length >= 2 && arr[i] < arr[j]) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  console.log(arr[1]);

  //sort method
  //   let sortedArr = arr.sort((a, b) => b - a);
  //   console.log(sortedArr[1]);
}

secondLargest([10, 40, 30, 20, 50]);

secondLargest([25, 143, 89, 13, 105]);

secondLargest([54, 23, 11, 17, 10]);
