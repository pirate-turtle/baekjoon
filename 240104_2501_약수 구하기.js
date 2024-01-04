readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.on('line', (line) => {
  let [n, k] = line.split(' ').map(el => parseInt(el));
  let count = 0;
  
  let i = 0;
  for (; i < n+1; i++) {
    if (n % i === 0) {
      count++;
      if (count === k) {
        break;
      }
    }
  }

  // 약수의 개수가 k개보다 적은 경우 0 출력
  // 아니면 k번째 약수 출력
  console.log(count < k ? 0 : i);
  readline.close();
});