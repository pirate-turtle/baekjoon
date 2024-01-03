readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});


readline.on('line', (line) => {
  let dot = 2;
  for (let i = 0; i < parseInt(line); i++) {
    dot = 2 * dot - 1
  }

  console.log(dot * dot);
  readline.close();
});