const textBlocks = document.querySelectorAll('div'),
	  modalMain = document.querySelector('#modal_main'),
	  modalSuccess = document.querySelector('#modal_success');

const showSuccessBtn = document.querySelector('.show-success'),
	  closeButton = document.querySelectorAll('.modal__close');


for(let i = 0; i < textBlocks.length; i++) {
	textBlocks[i].addEventListener('click', (e) => {
		if(!e.target.classList.contains('modal') && 
			!e.target.classList.contains('modal__close') && 
			!modalSuccess.classList.contains('modal_active')) {
			modalMain.classList.add('modal_active');
		}
	});
}

showSuccessBtn.addEventListener('click', () => {
	modalMain.classList.remove('modal_active');
	modalSuccess.classList.add('modal_active');
});

for(let i = 0; i < closeButton.length; i++) {
	closeButton[i].addEventListener('click', (e) => {
		const modalClose = e.target.parentElement.parentElement;
		console.log(modalClose);
		modalClose.classList.remove('modal_active');
	});
}

