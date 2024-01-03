readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});


readline.on('line', (line) => {
  let [n, b] = line.split(' ').map(el => parseInt(el));
  let answer = '';  

  while (n > 0) {
    // n을 b로 나눈 나머지를 구한다
    let num = n % b;

    // 나머지가 10 이상이면
    if (num >= 10) {
      // 문자로 변환해서 결과에 더한다 (나머지 + 55)
      answer = String.fromCharCode(num + 55) + answer;
    } else {
      // 10보다 작으면 그냥 결과에 더한다
      answer = num + answer;
    }  

    // n을 b로 나눈 몫을 n에 저장한다
    n = parseInt(n / b);
  }

  // 변환한 결과를 출력한다
  console.log(answer);
  readline.close();
});