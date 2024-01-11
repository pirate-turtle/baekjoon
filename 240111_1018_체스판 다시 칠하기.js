readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});


// 보드를 다시 칠하는 함수
const paint = (startY, startX, board) => {  
  let answer = 64;
  let count = 0;

  // 첫번째 칸을 'W'로 시작하는 경우
  let paint = 'W';
  // startY부터 8칸동안
  for (let i = startY; i < startY + 8; i++) {
    // startX부터 8칸동안
    for (let j = startX; j < startX + 8; j++) {
      // 칠해야하는 색과 다르면 count + 1
      if (board[i][j] !== paint) {
        count++;
      }
      
      if (j < startX + 7) {
        // 칠해야 하는 색 전환
        // 가로줄 마지막 칸이면 색 전환X
        paint = paint === 'W' ? 'B' : 'W';
      }
    }
  }

  answer = Math.min(answer, count);
  count = 0;

  // 첫번째 칸을 'B'로 시작하는 경우
  paint = 'B';
  // startY부터 8칸동안
  for (let i = startY; i < startY + 8; i++) {
    // startX부터 8칸동안
    for (let j = startX; j < startX + 8; j++) {
      // 칠해야하는 색과 다르면 count + 1
      if (board[i][j] !== paint) {
        count++;
      }
      
      if (j < startX + 7) {
        // 칠해야 하는 색 전환
        // 가로줄 마지막 칸이면 색 전환X
        paint = paint === 'W' ? 'B' : 'W';
      }
    }
  }

  answer = Math.min(answer, count);

  return answer;
}


let input = [];
readline.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  let [n, m] = input[0].split(" ").map(el => parseInt(el));
  
  let board = [];
  for (let i = 1; i < n+1; i++) {
    board.push(input[i].split(""));
  }
  
  let answer = 64;
  // 보드의 시작부터 끝까지 8x8보드를 옮겨가며 최솟값 탐색하기
  for (let i = 0; i < n - 7; i++) {
    for (let j = 0; j < m - 7; j++) {
      answer = Math.min(answer, paint(i, j, board));
    }
  }

  console.log(answer);
});