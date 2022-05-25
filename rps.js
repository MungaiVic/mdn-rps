const PLAY_MOVES = {
	0: "rock",
	1: "paper",
	2: "scissors",
};

function computerPlay() {
	return PLAY_MOVES[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
	playerSelection = playerSelection.toLowerCase();
	if (playerSelection === computerSelection) {
		console.log(`Computer: ${computerSelection}  Player: ${playerSelection}`);
		return 0;
	}
	if (computerSelection === "rock" && playerSelection === "scissors") {
		console.log(`Computer: ${computerSelection}  Player: ${playerSelection}`);
		return 2;
	} else if (computerSelection === "scissors" && playerSelection === "rock") {
		console.log(`Computer: ${computerSelection}  Player: ${playerSelection}`);
		return 1;
	} else if (computerSelection === "paper" && playerSelection === "scissors") {
		console.log(`Computer: ${computerSelection}  Player: ${playerSelection}`);
		return 1;
	} else if (computerSelection === "scissors" && playerSelection === "paper") {
		console.log(`Computer: ${computerSelection}  Player: ${playerSelection}`);
		return 2;
	} else if (computerSelection === "paper" && playerSelection === "rock") {
		console.log(`Computer: ${computerSelection}  Player: ${playerSelection}`);
		return 2;
	} else if (computerSelection === "rock" && playerSelection === "paper") {
		console.log(`Computer: ${computerSelection}  Player: ${playerSelection}`);
		return 1;
	}
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));

function game() {
	let SCORES = {
		player: 0,
		computer: 0,
	};
	for (let i = 0; i < 5; i++) {
		let playerAnswer = prompt(`Round ${i + 1}\nPlayer: ${SCORES["player"]} | Computer: ${SCORES["computer"]}\nRock Paper Scissors. CHOOSE:`);
		let result = playRound(playerAnswer, computerPlay());
		if (result === 0) {
			continue;
		} else if (result === 1) {
			SCORES["player"] += 1;
			console.log(SCORES);
		} else if (result === 2) {
			console.log(SCORES);
			SCORES["computer"] += 1;
		}
	}

    alert(`Computer: ${SCORES["computer"]} | Player: ${SCORES["player"]}`)
}

game();
