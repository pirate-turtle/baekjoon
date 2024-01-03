// 입출력 참고
// https://velog.io/@ovzip/JavaScript-readline-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0
// https://lakelouise.tistory.com/140
readline = require('readline').createInterface(
    {
        input: process.stdin,
        output: process.stdout,
    }
)

let input = [];

readline.on('line', function(line) {
    input = line.split(' ').map(el => parseInt(el));
    readline.close();
}).on('close', function() {
    console.log(input[0]+input[1]);
    process.exit();
});