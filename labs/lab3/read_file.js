const fs = require('fs');

console.log('** Start reading a file...');
// Read file synchronously
const data = fs.readFileSync('data.txt', 'utf8');
console.log(data);
console.log('** End of the file');

function readFileAsync(){
    console.log('** Start reading a asynchronously file...');
    // Read file asynchronously
    fs.readFile('data.txt', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(data);
    });
}
    console.log('** End of the asynchronously file');
// readFileAsync();

console.log('** Start writing a file...');
// Write file synchronously
const dataToWrite = 'Hello, Node.js';
fs.writeFileSync('output.txt', dataToWrite , 'utf8');
console.log('** End of the write file');