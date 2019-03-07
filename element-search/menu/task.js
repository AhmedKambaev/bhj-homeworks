const menuLinks = document.querySelectorAll('.menu__link');

for(let i = 0; i < menuLinks.length; i++) {
	menuLinks[i].addEventListener('click', (e) => {
		const link = e.target;
		const ul = link.parentNode.childNodes[3];
		if(ul) {
			e.preventDefault();
			let uls = document.querySelectorAll('.menu_active');
			if(uls) {
				for(let i = 0; i < uls.length; i++) {
					uls[i].classList.remove('menu_active');
				}
			}
			ul.classList.add('menu_active');
		}
	});
}