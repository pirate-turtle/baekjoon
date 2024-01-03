readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});


readline.on('line', (line) => {
  let count = 1;
  let room = 1;
  
  while (room < parseInt(line)) {
    room += count++ * 6;
  }
  
  console.log(count);
  readline.close();
});