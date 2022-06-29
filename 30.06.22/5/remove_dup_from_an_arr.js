function removeDups(arr) {
  let newArr = [];
  let i = 0;

  while (i < arr.length) {
    if (!newArr.includes(arr[i])) {
      newArr.push(arr[i]);
    }
    i++;
  }
  console.log(newArr);
}

removeDups([1, 0, 1, 0]);

removeDups(["The", "big", "cat"]);

removeDups(["John", "Taylor", "John"]);
