function findBrokenKeys(correctStr, typedStr) {
  let correctArr = correctStr.split("");
  let typedArr = typedStr.split("");
  let arr = [];
  for (let i = 0; i < correctArr.length; i++) {
    if (correctArr[i] !== typedArr[i]) {
      arr.push(correctArr[i]);
    }
  }
  console.log(arr.filter((el, i, self) => self.indexOf(el) === i));
}

findBrokenKeys("happy birthday", "hawwy birthday");
// ➞ ["p"]

findBrokenKeys("starry night", "starrq light");
// ➞ ["y", "n"]

findBrokenKeys("beethoven", "affthoif5");
// ➞ ["b", "e", "v", "n"]
