function clone(arr) {
  const cloneArr = [...arr];
  cloneArr.push(arr);
  console.log(cloneArr);
}

clone([1, 1]);

clone([1, 2, 3]);

clone(["x", "y"]);
