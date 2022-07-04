function itemsPurchased(store, wallet) {
  const walletNum = +wallet.slice(1);
  let arr = [];
  let items = [];
  let key = Object.keys(store);
  let values = Object.entries(store);
  for (let i of values) {
    let num = i[1].slice(1);
    let number = +num.replace(/,/g, "");
    arr.push(number);
  }
  //  !!! Չավարտված
  let sum = 0;
  let j = 0;

  while (j < arr.length) {
    if (sum <= walletNum) {
      sum += arr[j];
      items.push(key[j]);

      if (sum > walletNum) {
        sum -= arr[j];
        items.pop();
        continue;
      }
    }
    ++j;
  }
  console.log(items.sort(), sum);
}

console.log(
  itemsPurchased(
    {
      Water: "$1",
      Bread: "$3",
      TV: "$1,000",
      Fertilizer: "$20",
    },
    "$300"
  )
);
// ➞ ["Bread", "Fertilizer", "Water"]

// console.log(itemsPurchased({
//   Apple: "$4",
//   Honey: "$3",
//   Fan: "$14",
//   Bananas: "$4",
//   Pan: "$100",
//   Spoon: "$2"
// }, "$100"));
// // ➞ ["Apple", "Bananas", "Fan", "Honey", "Pan", "Spoon"]

// console.log(itemsPurchased({
//   Phone: "$999",
//   Speakers: "$300",
//   Laptop: "$5,000",
//   PC: "$1200"
// }, "$1"));
// // ➞ "Nothing"
