const tabs = document.querySelectorAll('.tab'),
	  content = document.querySelectorAll('.tab__content');


for(let i = 0; i < tabs.length; i++) {
	tabs[i].addEventListener('click', (e) => {
		if(tabs[i].classList.contains('tab__content_active')) {
			return;
		}
		for(let key = 0; key < content.length; key++) {
			if(content[key].classList.contains('tab__content_active')) {
				content[key].classList.remove('tab__content_active');
			}
		}
		for(let key = 0; key < tabs.length; key++) {
			if(tabs[key].classList.contains('tab_active')) {
				tabs[key].classList.remove('tab_active');
			}
		}
		content[i].classList.add('tab__content_active');
		tabs[i].classList.add('tab_active');
	});
}