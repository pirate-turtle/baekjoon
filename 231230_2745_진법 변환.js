readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});


readline.on('line', (line) => {
  let [n, b] = line.split(' '); // 수, 진법
  b = parseInt(b);
  
  let idx = 1;  // 자리수
  let answer = 0;

  // 뒷자리부터 한자리씩 정수로 변환
  for (let i = n.length - 1 ; i > -1; i--) {    
    // 현재 자리수가 문자이면
    if (n[i] >= 'A' && n[i] <= 'Z') {      
      // 알파벳에 해당하는 수는 알파벳.charCodeAt() - 55
      answer += idx * (n[i].charCodeAt() - 55);
    } else {        
      answer += idx * parseInt(n[i]);
    }
    
    
    
    // 자리수 * 진법
    idx *= b;
  }

  // 변환한 수 출력
  console.log(answer);
  readline.close();
})