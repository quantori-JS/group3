//****************
// race emulator
//****************

function getRandomTwoToNine() {
	const min = 2;
	const max = 8;
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function checker(limit, winCondition, sumFirst, sumSecond) {
	const isWinner = ((sumFirst >= winCondition) || (sumSecond >= winCondition));
	const isOutLimit = !((limit > sumFirst) || (limit > sumSecond));

	if (isOutLimit) {
		return false
	}
	return !isWinner;
}

function newGame(limit = 105, winCondition = 100) {
	const reducer = (accumulator, currentValue) => accumulator + currentValue;
	const arrayFirst = [];
	const arraySecond = [];
	let round = 0;
	let sumFirst = 0;
	let sumSecond = 0;
	do {
		round++;
		arrayFirst.push(getRandomTwoToNine());
		arraySecond.push(getRandomTwoToNine());
		sumFirst = arrayFirst.reduce(reducer);
		sumSecond = arraySecond.reduce(reducer);
	} while (checker(limit, winCondition, sumFirst, sumSecond))

	return [round, sumFirst, sumSecond]
}

function manager() {
	let [round, sumFirst, sunSecond, gameCycle] = [0, 0, 0, 0];
	game();

	function game() {
		if ((round === 0) || gameCycle !== 0) {
			gameCycle++;
			[round, sumFirst, sunSecond] = newGame(105, 100);
		}
		if ((sumFirst >= 105) || (sunSecond >= 105)){
			gameCycle++;
			game();
		}
	}

	if (sumFirst > sunSecond) {
		console.log(`winner: first: game cycle:${gameCycle}, round: ${round}, score: ${sumFirst}`);
	} else if (sunSecond > sumFirst) {
		console.log(`winner: second: game cycle:${gameCycle}, round: ${round}, score: ${sunSecond}`);
	} else {
		console.log("no winner");
	}
}

let i = 0
while (i < 20) {
	i++;
	manager();
}
