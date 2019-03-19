const button = document.querySelector('.chat-widget__side');
const chat = document.querySelector('.chat-widget');
const containerMess = document.querySelector('.chat-widget__messages');

const message = [
	'Добрый день!',
	'Кто тут?',
	'К сожалению все операторы сейчас заняты',
	'Добрый день! До свидания!',
	'Где ваша совесть?'
];

button.addEventListener('click', (e) => {
	chat.classList.toggle('chat-widget_active');
});

document.addEventListener('keypress', (e) => {
	console.log(e.keyCode)
	if(e.keyCode === 13) {
		e.preventDefault();
		const input = document.querySelector('.chat-widget__input');
		const value = input.value;
		if(value != '') {
			const date = new Date().getHours() + ':' + new Date().getMinutes();
			containerMess.innerHTML += `
				<div class="message message_client">
				    <div class="message__time">${date}</div>
				    <div class="message__text">
				      ${value}
				    </div>
			    </div>
			`;
			input.value = '';
			const random = Math.floor(Math.random()*message.length);
			const mess = message[random];
			containerMess.innerHTML += `
				<div class="message">
				    <div class="message__time">${date}</div>
				    <div class="message__text">
				      ${mess}
				    </div>
			    </div>
			`;
		}
	}
});