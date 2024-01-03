readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})

let input = [];
readline.on('line', (line) => {
    // t와 a, b를 입력받는다    
    input.push(line);
}).on('close', () => {
    // t를 숫자로 변환한다
    let t = parseInt(input[0]);

    // t번동안
    for (let i = 1; i < t+1; i++) {
        // a, b를 숫자로 변환한다
        let [a, b] = input[i].split(' ').map((el) => parseInt(el));
        // a와 b를 더한 값을 출력한다
        console.log(a + b);
    }
    
})

