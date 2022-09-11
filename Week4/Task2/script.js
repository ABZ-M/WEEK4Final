

let result = game();
alert(result);



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
            winner = 'The winner is: Player';
        }
        else if(arg2=='SCISSORS')
        {
            winner = 'The winner is: Computer';
        }
        else
        {
            winner = 'It is a Draw';
        }
    }
    else if(arg1=='PAPER')
    {
        if(arg2=='PAPER')
        {
            winner = 'It is a Draw';
        }
        else if(arg2=='SCISSORS')
        {
            winner = 'The winner is: Player';
        }
        else
        {
            winner = 'The winner is: Computer';
        }
    }
    else
    {
        if(arg2=='PAPER')
        {
            winner = 'The winner is: Computer';
        }
        else if(arg2=='SCISSORS')
        {
            winner = 'It is a Draw';
        }
        else
        {
            winner = 'The winner is: Player';
        }
    }

    return winner;

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
        input = prompt("Select your weapon");
        playerSelection = input.toUpperCase();
        alert(`You selected ${playerSelection}`);
        computerSelection = computerPlay();
        console.log('Computer for round: ' + (i+1) + 'chose' + computerSelection);
        console.log('Player for round: ' + (i+1) + 'chose' + playerSelection);

        roundWinner = playRound(computerSelection, playerSelection);
        alert('Winner of round ' + (i+1) + ' ' + roundWinner);
        
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

