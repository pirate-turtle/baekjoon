readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});


let input = [];
readline.on('line', (line) => {
    input.push(line);
}).on('close', () => {
    // input[0] = 시험 본 과목 개수 n
    let n = parseInt(input[0]);

    // input[1] = 시험 본 과목
    let scores = input[1].split(' ').map(el => parseInt(el));

    // 시험 본 과목 중 최댓값 M을 구한다
    let M = Math.max(...scores);

    // 시험 본 과목의 점수를 점수 / M * 100으로 고친다
    scores = scores.map(el => el / M * 100);

    
    // 시험 본 과목의 합을 구하고 n으로 나눈다    
    let average = scores.reduce((prev, cur, i, arr) => prev + cur, 0) / n

    // 평균을 출력한다
    console.log(average);
})