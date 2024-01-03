readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})

let input = [];
readline.on('line', (line) => {
    input.push(line);
}).on('close', () => {
    // input[0] = 테스트 케이스 수
    let t = parseInt(input[0])
    
    for (let i = 1; i < t+1; i++) {
        // input[1] ~ input[t] = 반복횟수, 문자열S
        let [r, s] = input[i].split(' ');
        r = parseInt(r);

        // 반복횟수만큼 문자열의 문자들을 반복한다
        let answer = [...s].reduce((acc, cur) => acc + cur.repeat(r) ,'');

        // 결과를 출력한다
        console.log(answer);
    }
});