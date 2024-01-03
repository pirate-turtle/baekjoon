readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];
readline.on('line', (line) => {
    input.push(line);
}).on('close', () => {
    // 행렬의 크기 n과 m이 주어짐
    let [n, m] = input[0].split(' ').map(el => parseInt(el));

    // 행렬 A 1 ~ n
    let A = [];
    for (let i = 1; i < n+1; i++) {
        A.push(input[i].split(' ').map(el => parseInt(el)));
    }

    // 행렬 B n+1 ~ 2n
    let B = [];
    for (let i = n + 1; i < 2 * n + 1; i++) {
        B.push(input[i].split(' ').map(el => parseInt(el)));
    }

    
    // 행렬 A와 B 더하기
    for (let i = 0; i < n; i++) {
        // 더한 행을 저장할 변수
        let row = [];
        
        for (let j = 0; j < m; j++) {
            row.push(A[i][j] + B[i][j]);
        }

        // 더한 행 출력
        console.log(row.join(' '));
    }

})