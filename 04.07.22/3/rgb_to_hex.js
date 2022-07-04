function rgbToHex(str) {
  let arr = str
    .slice(4, str.length - 1)
    .split(",")
    .map((i) => +i);
  return (
    "#" +
    arr
      .map((i) => {
        let hex = i.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
      })
      .join("")
  );
}

console.log(rgbToHex("rgb(0, 128, 192)"));

console.log(rgbToHex("rgb(45, 255, 192)")); //➞ "#2dffc0"

console.log(rgbToHex("rgb(0, 0, 0)")); //➞ "#000000"
