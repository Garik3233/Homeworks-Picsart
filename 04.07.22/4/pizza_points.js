function pizzaPoints(customers, minOrders, minPrice) {
  let arr = [];
  for (let customer in customers) {
    let filtered =
      customers[customer].filter((price) => price >= minPrice).length >=
      minOrders;
    if (filtered) arr.push(customer);
  }
  console.log(arr.sort());
}

let customersObj = {
  Batman: [22, 30, 11, 17, 15, 52, 27, 12],
  "Spider-Man": [5, 17, 30, 33, 40, 22, 26, 10, 11, 45],
};

pizzaPoints(customersObj, 5, 20);
// ➞ ["Spider-Man"]

pizzaPoints(customersObj, 3, 10);
// ➞ ["Batman", "Spider-Man"]

pizzaPoints(customersObj, 5, 100);
// ➞ []
