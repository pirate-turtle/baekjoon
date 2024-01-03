readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});


let input = [];
readline.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  // 흰색 도화지 생성
  let paper = []
  for (let i = 0; i < 101; i++) {
    paper[i] = new Array();
    for(let j = 0; j < 101; j++) {
      paper[i].push(0);
    }
  } 
  

  // 색종이 수만큼 도화지 채우기
  for (let count = 1; count < parseInt(input[0])+1; count++) {
    let [x, y] = input[count].split(' ').map(el => parseInt(el));
    
    // 색종이 영역을 1로 채우기
    for (let i = x; i < x + 10; i++) {
      for (let j = y; j < y + 10; j++) {
        paper[i][j] = 1;
      }
    }   
  }

  // 1로 채워진 영역 더해서 넓이 구하기
  let answer = 0;
  for (let i = 0; i < 101; i++) {
    for (let j = 0; j < 101; j++) {
      answer += paper[i][j];
    }
  }
  

  // 넓이 출력하기
  console.log(answer);
})