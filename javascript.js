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

    function playRound(userChoice, computerChoice) {

    };

    function getComputerChoice();

    for (let i = 0; i < 5; i++) {

    };

    if (userScore > computerScore) {

    } else if (userScore < computerScore) {

    } else {

    };
};

playGame();