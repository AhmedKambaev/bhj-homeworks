window.onload = getItem;

const editor = document.querySelector('#editor');

editor.addEventListener('change', (e) => {
	setItem(e.target.value);
});


function setItem(text) {
	localStorage.setItem('text', text);
}


function getItem() {
	const text = localStorage.getItem('text');
	if(text) {
		editor.textContent = text;
	}
}