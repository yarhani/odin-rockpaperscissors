/* 
FUNCTION playGame()
    CREATE userScore and computerScore and SET to 

    FUNCTION playRound(userChoice, computerChoice)
        IF userChoice beats computerChoice
            Display win message
            Add 1 to userScore
        ELSE IF computerChoice beats userChoice
            Display lose message
            Add 1 to computerScore
        ELSE
            Display draw message
        END IF
    END FUNCTION

    FUNCTION getComputerChoice()
        GET random number a and multiply by 3
        IF a >= 0 || a < 1
            RETURN 'ROCK'
        ELSE IF a >= 1 || a < 2
            RETURN 'PAPER'
        ELSE
            RETURN 'SCISSORS'
    END FUNCTION

    FOR i = 0 to 4      
        SET computerChoice TO getComputerChoice()

        PROMPT for userChoice
        MODIFY userChoice to uppercase
        
        WHILE userChoice != 'ROCK' AND
              userChoice != 'PAPER' AND
              userChoice != 'SCISSORS'
            DISPLAY invalid input message
            PROMPT for userChoice
            MODIFY userChoice to uppercase
        END WHILE

        playRound(userChoice, computerChoice)
    END FOR

    IF userScore > computerScore
        Display win message
    ELSE IF userScore < computerScore
        Display lose message
    ELSE
        Display draw message
    END IF
END FUNCTION


playGame()
*/

function playGame() {
    let userScore = 0;
    let computerScore = 0;
    let userChoice;
    let computerChoice;

    // FUNCTION to decide who wins the round
    function playRound(userChoice, computerChoice) {
        function beatenBy(choiceA, choiceB) {
            return (
                (choiceA === 'ROCK' && choiceB === 'PAPER') || 
                (choiceA === 'PAPER' && choiceB === 'SCISSORS') || 
                (choiceA === 'SCISSORS' && choiceB === 'ROCK') 
            );
        };

        if (beatenBy(userChoice,computerChoice)) {
            console.log('You win this round!')
            userScore++;
        } else if (beatenBy(computerChoice,userChoice)) {
            console.log('You lose this round!')
            computerScore++;
        } else {
            console.log('This round is a draw!')
        };
    };

    // FUNCTION to decide the computer's choice
    function getComputerChoice() {
        let randomNum = Math.random() * 3;
        if (randomNum >= 0 && randomNum < 1) {
            return 'ROCK';
        } else if (randomNum >= 1 && randomNum < 2) {
            return 'PAPER';
        } else {
            return 'SCISSORS';
        };
    };

    // Play five rounds
    for (let i = 0; i < 5; i++) {
        // Get the computer's choice
        computerChoice = getComputerChoice();

        // Ask for the user's choice
        userChoice = prompt('Rock, Paper, Scissors...').toUpperCase.trim();

        // Make sure the user's input is valid before comparing with the computer's input
        while (
            userChoice !== 'ROCK' &&
            userChoice !== 'PAPER' &&
            userChoice !== 'SCISSORS'
        ) {
            console.log('Invalid input, please type ROCK, PAPER, or SCISSORS')
            userChoice = prompt('Rock, Paper, Scissors...').toUpperCase.trim();
        };

        // Get the result of the round
        playRound(userChoice, computerChoice);
    };

    // Decide who wins the game
    if (userScore > computerScore) {

    } else if (userScore < computerScore) {

    } else {

    };
};

playGame();