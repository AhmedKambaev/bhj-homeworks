const button = document.querySelector('.dropdown__value'),
	  value = document.querySelector('.dropdown__value'),
	  list = document.querySelector('.dropdown__list'),
	  items = document.querySelectorAll('.dropdown__item');

button.addEventListener('click', () => {
	list.classList.toggle('dropdown__list_active');
});

for(let i = 0; i < items.length; i++) {
	items[i].addEventListener('click', (e) => {
		e.preventDefault();
		const link = e.target.innerText;
		if(list.classList.contains('dropdown__list_active')) {
			value.innerText = link;
			list.classList.remove('dropdown__list_active');
		}
	});
}