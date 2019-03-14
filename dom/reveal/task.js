
document.addEventListener('scroll', (e) => {
	const windowHeight = window.innerHeight;
	const block = document.querySelector('.reveal');
	const top = block.getBoundingClientRect().top;
	if(top < windowHeight) {
		block.classList.add('reveal_active');
	} else {
		block.classList.remove('reveal_active');
	}
});