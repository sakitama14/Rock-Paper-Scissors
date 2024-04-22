// Proceedure（自分が最初に浮かんだもの）
// math.randomを使用し、0,1,2のどれかを吐き出させる
// 0,1,2に対してそれぞれRock, Paper, Scissorsを割り振ってそれを表示させる


// let getComputerChoice01 = Math.floor(Math.random()*3 + 1);
// console.log(getComputerChoice);


// まずはそれぞれのパターンを配列に入れる
const choices = ['Rock', 'Paper', 'Scissors'];

// 大本の関数の作成
function getComputerChoice() {

    // 配列の個数に対応する数字をランダムで吐き出し結果をchoiceにいれる（0-3を取得）
    let choice = Math.floor(Math.random()*choices.length);

    // 配列の中から関数で吐き出された数字の物だけを表示
    console.log(choices[choice])
}

getComputerChoice();






