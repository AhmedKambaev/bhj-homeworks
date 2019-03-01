let hours = 4,
	minuts = 59,
	seconds = 59;

const blockTimer = document.querySelector('#timer');

function timerFunc() {
	seconds--;
	if(seconds <= 0) {
		minuts--;
		seconds = 59;
	} else if(minuts <= 0) {
		hours--;
		minuts = 59;
	}

	blockTimer.innerText = `${hours}:${minuts}:${seconds}`

	if(hours <= 0 && minuts <= 0 && seconds <= 0) {
		clearInterval(timer);
		window.alert('Вы победили в конкурсе!');
	}
};

let timer = setInterval(timerFunc, 1000);