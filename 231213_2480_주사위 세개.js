readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.on('line', (line)=> {
    const [a, b, c] = line.split(' ').map((el) => parseInt(el));

    if (a == b && b == c) {
        // 같은 눈이 3개가 나오는 경우
        // 10,000 + (같은 눈) * 1,000
        console.log(10000 + a * 1000);

    } else if (a == b || b == c || a == c) {
        // 같은 눈이 2개만 나오는 경우
        // 같은 눈 판단
        let same = 0;
        if (a == b || a == c) {
            same = a;
        } else{
            same = b;
        }

        // 1,000 + (같은 눈) * 100
        console.log(1000 + same * 100);

    } else {
        // 모두 다른 눈인 경우
        // 가장 큰 눈 판단
        let maxNum = Math.max(a, b, c);
        
        // (가장 큰 눈) * 100
        console.log(maxNum * 100);

    }

    readline.close();
});