function isPalindrome(word) {
  const splitString = word.split("");
  const reverseArray = splitString.reverse();
  const reverseString = reverseArray.join("");

  console.log(reverseArray)

  if (word === reverseString) {
    return true
  } else {
    return false
  };
}

/* 
  Takes word argument and splits into array of letters
  Reverse array
  If the reversed array matches the original array return true
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
