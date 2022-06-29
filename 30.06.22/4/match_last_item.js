function matchLastItem(arr) {
  let sumArr = "";
  let i = 0;

  while (i < arr.length - 1) {
    sumArr += String(arr[i]);
    i++;
  }

  return sumArr === arr[arr.length - 1]
    ? console.log(true)
    : console.log(false);
}

matchLastItem(["rsq", "6hi", "g", "rsq6hig"]);

matchLastItem([1, 1, 1, "11"]);

matchLastItem([8, "thunder", true, "8thundertrue"]);
