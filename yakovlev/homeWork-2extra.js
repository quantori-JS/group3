function counter(arr) {
	return arr.reduce(function (obj, b) {
		obj[b] = ++obj[b] || 1;
		return obj;
	}, {});
}

function getRandomIndex(length) {
	const min = 0;
	return Math.floor(Math.random() * (length - min + 1) + min);
}

function getRandomWord(arr){
	return arr[getRandomIndex(arr.length-1)]
}

function checker(limit, rulettes) {
	let i = 0;
	for (const arr of rulettes) {
		i++;
		const obj = counter(arr);
		const word = Object.keys(obj).find(key => obj[key] === limit);
		if (word !== undefined) {
			return [false, i, word];
		}
	}
	return [true]
}

function newGame(limit = 10) {
	const words = createDictionary();
	const roulette_1 = [];
	const roulette_2 = [];
	const roulette_3 = [];
	let round = 0;
	let result;
	game();

	function game() {
		do {
			round++;
			roulette_1.push(getRandomWord(words));
			roulette_2.push(getRandomWord(words));
			roulette_3.push(getRandomWord(words));

			result = checker(limit, [roulette_1, roulette_2, roulette_3]);
		} while (result[0])
	}
	console.log(`Winner: roulette ${result[1]}, round: ${round}, word: ${result[2]}`)
}


function createDictionary(){
	const fs = require('fs');
	let fileContent = fs.readFileSync("shortStory.txt", "utf8");
	fileContent = fileContent.replace(/[.,!?;":-]/g, '');
	fileContent = fileContent.toLowerCase();
	fileContent = fileContent.split(' ');
	return [...new Set(fileContent)]
}

newGame();