function zipString(originalString) {
  zippedString = [];
  lastCharacter = null;
  count = 0;
  for (var i = 0; i < originalString.length; i++) {
    if(!lastCharacter) {
      lastCharacter = originalString[i];
      count = 1;
    } else if(lastCharacter !== originalString[i]) {
      zippedString.push(lastCharacter + count);
      lastCharacter = originalString[i];
      count = 1;
    } else {
      count++;
    }

    // Wrap up if it come to the last character
    if(i == originalString.length - 1) {
      zippedString.push(lastCharacter + count);
    }
  }

  return zippedString.join("");
}

module.exports = zipString;