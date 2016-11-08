const stringZipper = require("./string-zipper");
const readline = require("readline").createInterface(process.stdin, process.stdout);;

console.log("Enter string to be zipped:\t");
readline.on("line", inputString => {
  zippedString = stringZipper(inputString);
  console.log(zippedString);
  console.log("Enter string to be zipped:\t");
});

