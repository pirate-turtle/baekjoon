readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})


let input = [];
readline.on('line', (line) => {
    input.push(line);
}).on('close', () => {
    // 9행 9열의 격자판 생성
    let board = [];
    for (let i = 0; i < 9; i++){
        board.push(input[i].split(' ').map(el => parseInt(el)));
    }

    // 행마다 최댓값을 판단합니다
    // 최댓값을 저장할 변수
    let max = 0;
    // 좌표를 저장할 배열
    let index = [0, 0];
    for (let i = 0; i < 9; i++) {
        // 현재 행의 최댓값을 구한다
        let rowMax = Math.max(...board[i]);

        // 이전 행의 최댓값보다 크면
        if (rowMax > max) {
            // 최댓값을 교체한다
            max = rowMax;
            
            // 행과 열을 저장합니다
            index[0] = i;
            index[1] = board[i].indexOf(rowMax);
        }
    }

    // 최댓값을 출력합니다
    console.log(max);
    // 최댓값의 위치를 출력합니다
    console.log(index.map(el => el + 1).join(' '));
})