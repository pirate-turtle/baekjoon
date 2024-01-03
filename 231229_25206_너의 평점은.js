readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];
readline.on('line', (line) => {
    input.push(line);
}).on('close', () => {
    // 등급 별 점수 저장
    let gradeToScore = {
        'A+': 4.5,
        'A0': 4.0,
        'B+': 3.5,
        'B0': 3.0,
        'C+': 2.5,
        'C0': 2.0,
        'D+': 1.5,
        'D0': 1.0,
        'F': 0.0
    }

    // 학점 * 과목 평점을 저장할 변수
    let totalScore = 0;
    // 학점의 총합을 저장할 변수
    let totalCredit = 0;

    for (let i = 0; i < 20; i++) {
        // 20개의 입력. 과목명, 학점, 등급
        let [name, credit, grade] = input[i].split(' ');        

        // 등급이 P이면 다음 과목으로 넘어감
        if (grade === 'P') { continue }

        // 아니면 학점 * 과목평점을 누적
        credit = Number(credit);
        totalScore += credit * gradeToScore[grade];

        // 학점 누적
        totalCredit += credit;

    }

    // 누적된 점수 / 학점의 총합 출력
    console.log(totalScore / totalCredit);
});