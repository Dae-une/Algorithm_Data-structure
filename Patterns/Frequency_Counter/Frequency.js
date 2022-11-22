// function validAnagram(A, B) {
//   if (A.lenght !== B.lenght) return false;

//   const frequencyA = {};
//   const frequencyB = {};
//   for (let key of A) {
//     frequencyA[key] = (frequencyA[key] || 0) + 1;
//   }
//   for (let key of B) {
//     frequencyB[key] = (frequencyB[key] || 0) + 1;
//   }

//   for (let key in frequencyA) {
//     if (!key in frequencyB) return false;
//     if (frequencyA[key] !== frequencyB[key]) return false;
//   }
//   return true;
// }

function validAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  const lookup = {};

  for (let i = 0; i < str1.length; i++) {
    let letter = str1[i];
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }
  for (let i = 0; i < str2.length; i++) {
    let letter = str2[i];
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
  return true;
}

validAnagram("", ""); // true
validAnagram("aaz", "zza"); // false
validAnagram("anagram", "nagaram"); // true
validAnagram("rat", "car"); // false) // false
validAnagram("awesome", "awesom"); // false
validAnagram("amanaplanacanalpanama", "acanalmanplanpamana"); // false
validAnagram("qwerty", "qeywrt"); // true
validAnagram("texttwisttime", "timetwisttext"); // true
