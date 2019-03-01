const blocksGame = document.querySelectorAll('.hole');
const blockScore = document.querySelector('#dead');
const blockLost = document.querySelector('#lost');

let lost = 0,
	score = 0;

for(let i = 0; i < blocksGame.length; i++) {
	blocksGame[i].addEventListener('click', (e) => {
		const blockClicked = e.target;
		if(blockClicked.classList.contains('hole_has-mole')) {
			score++;
			blockScore.innerText = score;
		} else {
			lost++;
			blockLost.innerText = lost;
		}

		score === 10 ? window.alert('Вы победили') : void 0;
		if(lost === 5) {
			window.alert('Вы проиграли');
			document.location.reload();
		}
	});
}