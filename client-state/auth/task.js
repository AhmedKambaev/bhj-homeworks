window.onload = start;


const submit = document.getElementById('signin__btn');
const welcome = document.querySelector('.welcome');
const blockId = document.querySelector('#user_id');
const form = document.querySelector('.signin');

submit.addEventListener('click', (e) => {
	e.preventDefault();
	ajax();
});


function start() {
	if(localStorage.id) {
		welcome.classList.add('welcome_active');
		blockId.innerText = localStorage.getItem('id');
	} else {
		form.classList.add('signin_active');
	}
}

function ajax() {
	const xhr = new XMLHttpRequest();
	const formData = new FormData(window.signin__form);

	xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');

	xhr.onreadystatechange = function () {
		if(xhr.readyState === 4 && xhr.status === 200) {
			const message = JSON.parse(xhr.responseText);
			if(message.success === true) {
				localStorage.setItem('id', message.user_id);
				blockId.innerText = message.user_id;
				welcome.classList.add('welcome_active');
				form.classList.remove('signin_active');
			} else {
				alert('Неверный логин/пароль');
			}
		};
	};

	xhr.send(formData);
}