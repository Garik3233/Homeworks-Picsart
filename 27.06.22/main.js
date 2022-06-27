function isSpecialArray(arr) {
  let i = 0;

  while (i < arr.length) {
    if (arr[i] % 2 !== i % 2) {
      return false;
    }
    i++;
  }
  return true;
}
console.log(isSpecialArray([10, 21, 2, 33, 40, 6]));
//   console.log(isSpecialArray([2, 1, 4]));

// function allTruthy(a, b, c){
//   return a && b && c == true;
// }

// console.log(allTruthy(true, true, false))

// function a(num){

//   let number = String(num);
//   let sum = 0;
//   let i = 0;

//   while(i < number.length){
//     sum += +number[i];
//      i++;
//   }
//   console.log(sum/i)

// }

// a(12345);
