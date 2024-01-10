readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
})


readline.on("line", (line) => {
  let n = parseInt(line);
  console.log(`${BigInt(n) * BigInt(n-1) * BigInt(n-2) / BigInt(6)}`);
  console.log(3);
});