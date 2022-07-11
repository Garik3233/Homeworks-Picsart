function threeDaysAgo(date) {
  let ms = new Date(date);
  let daysAgo = ms - 1000 * 60 * 60 * 24 * 3;
  daysAgo = new Date(daysAgo);
  let year = daysAgo.getFullYear();
  let month = daysAgo.getMonth() + 1;
  month = month < 10 ? "0" + month : month;
  let day = daysAgo.getDate();
  day = day < 10 ? "0" + day : day;
  return `${year}-${month}-${day}`;
}

threeDaysAgo(new Date(2018, 0, 1));
// ➞ "2017-12-29"

threeDaysAgo(new Date(2015, 5, 17));
// ➞ "2015-06-14"

threeDaysAgo(new Date(1965, 3, 15));
// ➞ "1965-04-12"
