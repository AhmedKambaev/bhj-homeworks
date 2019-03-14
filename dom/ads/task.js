const parags = document.querySelectorAll('.rotator__case');

function interval(parags) {
	let index = 1;
	setInterval(() => {
		for(let i = 0; i < parags.length; i++) {
			for(let key = 0; key < parags.length; key++) {
				parags[key].classList.remove('rotator__case_active');
			}
			parags[index].classList.add('rotator__case_active');
			const color = parags[i].dataset.color;
			parags[i].style.color = color;
		}
		index++;
		console.log(index);
		index >= parags.length ? index = 0 : void 0;
	}, 1000);
}

interval(parags);