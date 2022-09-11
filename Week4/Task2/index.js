document.addEventListener("DOMContentLoaded", function(event) { 

var pScore = 0;
var cScore = 0;
var rounds = 0;

const mainDiv = document.querySelector(".main");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

const startDiv = document.querySelector(".start");
const myScore = document.createElement('Div');
const pcScore = document.createElement('Div');
const finalScore = document.createElement('Div');

const startTrigger = document.querySelector(".startText");
startTrigger.addEventListener("click", e =>{
    startTrigger.remove();
    myScore.setAttribute('class' , 'myScore');
    pcScore.setAttribute('class' , 'pcScore');
    myScore.style.backgroundColor = 'red';
    myScore.style.width = '200px';
    myScore.style.height = '200px';
    myScore.style.fontSize = '80px';
    pcScore.style.width = '200px';
    pcScore.style.height = '200px';
    pcScore.style.fontSize = '80px';
    pcScore.style.backgroundColor = 'blue';
    myScore.textContent = 'My score : ';
    pcScore.textContent = 'Pc Score : ';
    startDiv.appendChild(myScore);
    startDiv.appendChild(pcScore);

    playerSelect();

})




function playerSelect() {


    rock.addEventListener("click", e => {   
        
        let playerSelection;
        playerSelection = 'ROCK';
        let pc,
        winner;
        pc = computerPlay();
        winner = playRound(pc,playerSelection);
        if(winner=='player'){
            pScore++;
            myScore.textContent = pScore;
        }
        else if(winner='computer'){
            cScore++;
            pcScore.textContent = cScore;
        }
        else{
            cScore++;
            pScore++;
            myScore.textContent = pScore;
            pcScore.textContent = cScore;
        }
        rounds++;
        if(rounds==5){
            scoreBoard();
        }
        else{
        }
    })

    paper.addEventListener("click", e => {
          
        let playerSelection;
        playerSelection = 'PAPER';
        let pc,
        winner;
        pc = computerPlay();
        winner = playRound(pc,playerSelection);
        if(winner=='player'){
            pScore++;
            myScore.textContent = pScore;
        }
        else if(winner='computer'){
            cScore++;
            pcScore.textContent = cScore;
        }
        else{
            cScore++;
            pScore++;
            myScore.textContent = pScore;
            pcScore.textContent = cScore;
        }
        rounds++;
        if(rounds==5){
            scoreBoard();
        }
        else{
        }
    })

    scissors.addEventListener("click", e => {
            
        let playerSelection;
        playerSelection = 'SCISSORS';
        let pc,
        winner;
        pc = computerPlay();
        winner = playRound(pc,playerSelection);
        if(winner=='player'){
            pScore++;
            myScore.textContent = pScore;
        }
        else if(winner='computer'){
            cScore++;
            pcScore.textContent = cScore;
        }
        else{
            cScore++;
            pScore++;
            myScore.textContent = pScore;
            pcScore.textContent = cScore;
        }
        rounds++;
        if(rounds==5){
            scoreBoard();
        }
        else{
        }
    })
    
}





function computerPlay()
{

    let randNumber = Math.floor(Math.random() * 3);;
    let computerChoice;

    switch(randNumber)
    {
        case 0:
            computerChoice = 'ROCK';
            break;
        case 1:
            computerChoice = 'PAPER';
            break;
        case 2:
            computerChoice = 'SCISSORS';
            break;
    }

    return computerChoice;

}





function playRound(arg1, arg2)
{
    let winner;

    if (arg1=='ROCK')
    {
        if(arg2=='PAPER')
        {
            winner = 'player';
        }
        else if(arg2=='SCISSORS')
        {
            winner = 'computer';
        }
        else
        {
            winner = 'draw';
        }
    }
    else if(arg1=='PAPER')
    {
        if(arg2=='PAPER')
        {
            winner = 'draw';
        }
        else if(arg2=='SCISSORS')
        {
            winner = 'player';
        }
        else
        {
            winner = 'computer';
        }
    }
    else
    {
        if(arg2=='PAPER')
        {
            winner = 'computer';
        }
        else if(arg2=='SCISSORS')
        {
            winner = 'draw';
        }
        else
        {
            winner = 'player';
        }
    }

    return winner;

}

function scoreBoard(arg1,arg2)
{
    if(arg1>arg2) {
        finalScore.innerText = 'Computer WIns';
    }
    else if(arg1<arg2) {
        finalScore.innerText = 'Player WIns';
    }
    else {
        finalScore.innerText = 'DRAW';
    }

    mainDiv.appendChild(finalScore);

}

function game()
{
    let playerScore = 0,
    computerScore = 0,
    victor,
    playerSelection,
    computerSelection,
    roundWinner;

    for(let i=0;i<5;i++)
    {
        
        playerSelection = playerSelect();

        computerSelection = computerPlay();
        console.log('Computer for round: ' + (i+1) + 'chose' + computerSelection);
        console.log('Player for round: ' + (i+1) + 'chose' + playerSelection);

        roundWinner = playRound(computerSelection, playerSelection);
        //alert round winner
        
        if(roundWinner == 'The winner is: Player')
        {
            playerScore++;
        }
        else if(roundWinner == 'The winner is: Computer')
        {
            computerScore++;
        }
        else
        {
            playerScore++;
            computerScore++;
        }
    }

    if(computerScore>playerScore)
    {
        victor='COMPUTER WINS';
    }
    else if(playerScore>computerScore)
    {
        victor='PLAYER WINS';
    }
    else
    {
        victor='DRAW';
    }

    return victor;

}

});

