readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.on("line", (line) => {
  let [a, b, c, d, e, f] = line.split(" ").map(el => parseInt(el));
  
  for (let x = -999; x < 1000; x++) {
    for (let y = -999; y < 1000; y++) {
      if (a * x + b * y === c && d * x + e * y === f) {
        console.log(`${x} ${y}`);
        x = 1000;
        break;
      }
    }
  }
});