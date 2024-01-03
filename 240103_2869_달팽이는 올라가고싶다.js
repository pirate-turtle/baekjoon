readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.on('line', (line) => {
  let [a, b, v] = line.split(' ').map(el => parseInt(el));

  let answer = Math.ceil((v - a) / (a - b)) + 1

  console.log(answer);

  readline.close();
});