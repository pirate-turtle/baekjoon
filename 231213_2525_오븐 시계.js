readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})

let input = [];

readline.on('line', (line) => {
    input.push(line);
}).on('close', ()=> {
    let [h, m] = input[0].split(' ').map((el) => parseInt(el));
    let time = parseInt(input[1]);

    // m에 time을 더한다
    m += time;

    // m을 60으로 나눈 몫을 h에 더한다 Math.floor 필요
    h += Math.floor(m / 60);
    
    // m을 60으로 나눴을때 나머지를 m에 저장한다
    m %= 60;

    // h가 24 이상이 되면 24를 뺀다
    if (h >= 24) {
        h -= 24;
    }

    console.log(`${h} ${m}`);
});