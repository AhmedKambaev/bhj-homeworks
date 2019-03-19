const inputs = document.querySelectorAll('label .interest__check');

for(let input of inputs) {
	input.addEventListener('click', () => {
		const parent = input.closest('li');
		const check1 = parent.childNodes[3].childNodes[1].childNodes[1].childNodes[1];
		const check2 = parent.childNodes[3].childNodes[3].childNodes[1].childNodes[1];
		check1.checked = input.checked;
		check2.checked = input.checked;
	});
}