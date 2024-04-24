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
    return choices[choice];
}

// プレイヤーに入力をしてもらい結果を表示する
function getHumanChoice () {

    // プレイヤーに文字を入力してもらう
    let humanChoice = prompt("Please enter Rock, Paper, or Scissors:", "");

    // 入力された文字の最初を大文字に、それ以外を小文字に変換
    humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1).toLowerCase();

    // もし入力された値がRock, Paper, or Scissorsと一致した場合はコンソールに表示
    if (humanChoice === "Rock" || humanChoice === "Paper" || humanChoice === "Scissors") {
        return humanChoice;
    
    // それ以外の場合は"Invalid input. Please enter Rock, Paper, or Scissors."とコンソールに表示
    } else {
        console.log("Invalid input. Please enter Rock, Paper, or Scissors.")
        return getHumanChoice()
    };
}

// ラウンドをプレイし結果を表示
function playRound(humanChoice, computerChoice) {
    // ここに勝敗判定のロジックを追加する

    if (humanChoice === computerChoice) {
        console.log("It's a tie game!!")
    } else if (
        (humanChoice === "Rock" && computerChoice === "Scissors") ||
        (humanChoice === "Scissors" && computerChoice === "Paper") ||
        (humanChoice === "Paper" && computerChoice === "Rock") 
    ) {
        console.log("You win!!");
        humanScore = humanScore + 1;
    } else {
        console.log("You lose!!");
        computerScore = computerScore + 1;
    };

    console.log(`Human Choice: ${humanChoice}`);
    console.log(`Computer Choice: ${computerChoice}`);
    console.log(humanScore);
    console.log(computerScore);
    
}

// 実際にゲームを実行する関数
function playGame() {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
}

// ゲーム開始
playGame();  






