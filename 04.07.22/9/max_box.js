function makeBox(n) {
  let arr = [];
  if (n === 1) {
    arr.push("#");
    return arr;
  }

  let x = Array(n).fill("#", 0);
  let y = Array(n - 2).fill(" ");
  y.unshift("#");
  y.push("#");

  for (let i = 0; i < n; i++) {
    i == 0 || i == n - 1 ? arr.push(x) : arr.push(y);
  }

  console.log(arr);
}

makeBox(5);
//  ➞ [
//     "#####",
//     "#   #",
//     "#   #",
//     "#   #",
//     "#####"
//   ]

makeBox(3);
//    ➞ [
//     "###",
//     "# #",
//     "###"
//   ]

makeBox(2);
//    ➞ [
//     "##",
//     "##"
//   ]

makeBox(1);
//    ➞ [
//     "#"
//   ]
