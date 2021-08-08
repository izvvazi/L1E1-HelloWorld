var fs = require('fs')

var data = fs.readFileSync("input.txt");
console.log("Begin reading");
console.log(data.toString());
console.log("End reading");

fs.appendFile('input.txt', 'Adding new text here...', (err) => {
  if (err) throw err;
  console.log('The "data to append" was appended to file!');
});