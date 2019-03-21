const textClick = document.querySelectorAll('.has-tooltip');
const block = document.querySelector('.tooltip');

function clickFunc(e) {
	e.preventDefault();
	const title = e.target.getAttribute('title');
	const dY = e.target.getBoundingClientRect().top;
	const dX = e.target.getBoundingClientRect().left;
	block.textContent = title;
	block.style.display = 'block';
	block.style.top = `${dY + 20}px`;
	block.style.left = `${dX}px`;
}

for(let text of textClick) {
	text.addEventListener('click', clickFunc);
}

document.addEventListener('scroll', () => {
	block.style.display = 'none';
});