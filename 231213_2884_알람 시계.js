readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.on('line', (line) => {
    let [h, m] = line.split(' ').map((el) => parseInt(el));

    // m에서 45를 뺀다
    m -= 45;

    if (m < 0) {
        // m이 음수가 된다면,
        // h에서 1을 빼고 m에 60을 더한다
        h -= 1;
        m += 60;

        // h가 음수가 된다면 24를 더한다
        if (h < 0) {
            h += 24;
        }
    }

    console.log(`${h} ${m}`);

    readline.close();
});