readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
readline.on('line', (line) => {
  input.push(parseInt(line));
}).on('close', () => {
  console.log(input[0] * input[1]);
})