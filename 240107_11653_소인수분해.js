readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.on('line', (line) => {
  let num = parseInt(line);
  let i = 2;
  
  // 나누는 수가 i보다 크거나 같은 동안
  while (num >= i) {
    if (num % i === 0) {
      // 나눌 수 있으면 현재 i를 출력하고 몫으로 숫자 갱신
      console.log(i);
      num /= i;
    } else {
      // 나눌 수 없으면 i 1증가
      i++;
    }
  
  }

  readline.close();
});