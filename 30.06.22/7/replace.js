function hackerSpeak(str) {
  console.log(
    str
      .replace(/a/g, "4")
      .replace(/e/g, "3")
      .replace(/i/g, "1")
      .replace(/o/g, "0")
      .replace(/s/g, "5")
  );
}

hackerSpeak("javascript is cool");

hackerSpeak("programming is fun");

hackerSpeak("become a coder");
