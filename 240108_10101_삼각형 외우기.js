readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
readline.on('line', (line) => {
  input.push(parseInt(line));
}).on('close', () => {
  let sum = input[0] + input[1] + input[2];
  if (sum !== 180) {
    console.log("Error");
  } else if (input[0] === 60 && input[1] === 60 && input[2] === 60) {
    console.log('Equilateral');
  } else if (input[0] === input[1] || input[1] === input[2] || input[0] === input[2]) {
    console.log("Isosceles");
  } else {
    console.log("Scalene");
  }
  
});