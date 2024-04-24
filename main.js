// Proceedure（自分が最初に浮かんだもの）
// math.randomを使用し、0,1,2のどれかを吐き出させる
// 0,1,2に対してそれぞれRock, Paper, Scissorsを割り振ってそれを表示させる


// let getComputerChoice01 = Math.floor(Math.random()*3 + 1);
// console.log(getComputerChoice);



// コンピューター側でランダムのパターンを吐き出す
// まずはそれぞれのパターンを配列に入れる
const choices = ['Rock', 'Paper', 'Scissors'];
let humanScore = 0;
let computerScore = 0;

// 大本の関数の作成
function getComputerChoice() {

    // 配列の個数に対応する数字をランダムで吐き出し結果をchoiceにいれる（0-3を取得）
    let choice = Math.floor(Math.random()*choices.length);

    // 配列の中から関数で吐き出された数字の物だけを表示
    console.log(choices[choice]);
}

getComputerChoice();

// プレイヤーに入力をしてもらい結果を表示する
function getHumanChoice () {

    // プレイヤーに文字を入力してもらう
    let playerChoice = prompt("Please enter Rock, Paper, or Scissors:", "");

    // もし入力された値がRock, Paper, or Scissorsと一致した場合はコンソールに表示
    if (playerChoice === "Rock" || playerChoice === "Paper" || playerChoice === "Scissors") {
        console.log(playerChoice);
    
    // それ以外の場合は"Invalid input. Please enter Rock, Paper, or Scissors."とコンソールに表示
    } else {
        console.log("Invalid input. Please enter Rock, Paper, or Scissors.")
    };
}

getHumanChoice();

function playRound() {
    console.log(playerChoice);

}

playRound();






