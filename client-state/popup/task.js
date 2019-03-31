window.onload = getWindow;

const modal = document.querySelector('.modal');
const close = document.querySelector('.modal__close');

close.addEventListener('click', closeWindow);

function getWindow() {
	const cokkie = getCookie('close');
	console.log(cokkie)
	if(!cokkie)
		modal.classList.add('modal_active');
}

function closeWindow() {
	modal.classList.remove('modal_active');
	document.cookie = 'close="true"';
}


const getCookie = (name) => {
	const value = "; " + document.cookie;
	let parts = value.split("; " + name + "=");
	if (parts.length === 2) {
	return parts
		.pop()
		.split(";")
		.shift();
	}
}

