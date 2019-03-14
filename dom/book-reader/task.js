const buttons = document.querySelectorAll('.font-size');
const book = document.querySelector('.book');

for(let key = 0; key < buttons.length; key++) {
	buttons[key].addEventListener('click', (e) => {
		e.preventDefault();
		const but = e.target;
		for(let i = 0; i < buttons.length; i++) {
			buttons[i].classList.remove('font-size_active');
		}
		but.classList.add('font-size_active');
		const size = but.dataset.size;
		switch(size) {
			case 'small':
				book.classList.remove('book_fs-big');
				book.classList.add('book_fs-small');
				break;
			case 'big':
				book.classList.remove('book_fs-small');
				book.classList.add('book_fs-big');
				break;
			default:
				book.classList.remove('book_fs-small');
				book.classList.remove('book_fs-big');
				break;
		}
	});
}