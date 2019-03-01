const cookie = document.querySelector('.clicker__cookie'),
	  counterBlock = document.querySelector('#clicker__counter');

let counter = 0;
let width = cookie.width;
let height = cookie.height;

cookie.addEventListener('click', () => {
	counter++;
	counterBlock.innerText = counter;
	cookie.style.width = 150 + 'px';
	cookie.style.height = 100 + 'px';
});

setInterval(() => {
	if(cookie.style.width != width)
		cookie.style.width = 200 + 'px';
	if(cookie.style.height != height)
		cookie.style.height = 128 + 'px';
}, 80);