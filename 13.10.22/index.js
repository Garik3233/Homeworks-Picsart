// 1) insertion sort

function insertionSort(arr) {
  const length = arr.length;

  for (let i = 1; i < length; i++) {
    let current = arr[i];
    let j;

    for (j = i - 1; j >= 0 && arr[j] > current; j--) {
      arr[j + 1] = arr[j];
    }

    arr[j + 1] = current;
  }
  return arr;
}

// 2) substring

function findSubstr(str, substr) {
  if (substr === "") return 0;
  for (let i = 0; i <= str.length - substr.length; i++) {
    let j = 0;
    for (; j < substr.length; j++) {
      if (substr[j] !== str[i + j]) break;
    }

    if (j === substr.length) return i;
  }
  return -1;
}

// 3) check unique characters

function chechUniqueChar(str) {
  var hashtable = {};
  for (var i = 0; i < str.length; i++) {
    if (hashtable[str[i]] != null) {
      hashtable[str[i]] = 1;
      return false;
    } else {
      hashtable[str[i]] = 0;
    }
  }
  return true;
}
