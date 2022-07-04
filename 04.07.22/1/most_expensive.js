function mostExpensive(obj) {
  let jeweleryArr = Object.entries(obj);
  jeweleryArr.sort((a, b) => b[1] - a[1]);
  console.log(`The most expensive one is the ${jeweleryArr[0][1]}`);
}

mostExpensive({
  "Diamond Earrings": 980,
  "Gold Watch": 250,
  "Pearl Necklace": 4650,
});

mostExpensive({
  "Silver Bracelet": 280,
  "Gemstone Earrings": 180,
  "Diamond Ring": 3500,
});
