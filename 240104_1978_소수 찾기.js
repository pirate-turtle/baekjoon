readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});


let input = [];
readline.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  let nums = input[1].split(' ').map(el => parseInt(el));
  
  let count = 0;
  for (const num of nums) {
    // 1보다 큰 경우 소수인지 판단하기
    if (num > 1) {
      for (let i = 2; i <= Math.sqrt(num); i++) {
        // 약수가 있는 경우 소수가 아님
        if (num % i === 0) {
          count--;
          break;
        }
      }
      count++;
    }
  }

  console.log(count);
});