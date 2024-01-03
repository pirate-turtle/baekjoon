readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
})


let input = [];

readline.on('line', (line) => {
    input.push(parseInt(line));
}).on('close', () => {
    const x = input[0];
    const y = input[1];

    if (x > 0 && y > 0) {
        // 1사분면 - 두 정수가 모두 양수
        console.log(1);
    } else if (x < 0 && y > 0) {
        // 2사분면 - x값이 음수 y값이 양수
        console.log(2);
    } else if (x < 0 && y < 0) {
        // 3사분면 - 두 정수가 모두 음수
        console.log(3);
    } else {
        // 4사분면 - x값이 양수 y값이 음수
        console.log(4);
    }
});