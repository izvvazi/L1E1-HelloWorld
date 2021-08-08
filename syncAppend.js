var fs = require('fs')

var data = fs.readFileSync("input.txt");
console.log("Begin reading");
console.log(data.toString());
console.log("End reading");

try {
	fs.appendFileSync('input.txt', "Adding new text here...");
	console.log('The "data to append" was appended to file!');
} catch (error) {
	console.log(error);
}