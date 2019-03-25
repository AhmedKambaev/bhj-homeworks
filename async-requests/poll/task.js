window.onload = ajax;
const title = document.querySelector('.poll__title');
const blockButton = document.querySelector('.poll__answers');


function clickButtons() {
	const buttons = document.querySelectorAll('.poll__answer');
	for(let button of buttons) {
		button.addEventListener('click', () => {
			alert('Спасибо, ваш голос засчитан!');
		});
	}
}

function ajax() {
	const xhr = new XMLHttpRequest();

	xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
	xhr.setRequestHeader('Content-Type', 'application/json');

	xhr.onreadystatechange = function () {
		if(xhr.readyState === 4 && xhr.status === 200) {
			html(JSON.parse(xhr.responseText));
		};
	};

	xhr.send();
}


function html(obj) {
	title.innerText = obj.data.title;
	for(let i in obj.data.answers) {
		blockButton.innerHTML += `
			<button class="poll__answer">
              ${obj.data.answers[i]}
            </button>
		`;
	}
	clickButtons();
}