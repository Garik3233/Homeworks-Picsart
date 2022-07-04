function uncensor(str, vowels) {
  const x = str.split("");
  let j = 0;
  for (let i = 0; i < x.length; i++) {
    if (x[i] === "*") {
      x[i] = vowels[j];
      j++;
    }
  }

  console.log(x.join(""));
}

uncensor("Wh*r* d*d my v*w*ls g*?", "eeioeo");
// ➞ "Where did my vowels go?"

uncensor("abcd", "");
// ➞ "abcd"

uncensor("*PP*RC*S*", "UEAE");
// ➞ "UPPERCASE"
