window.onload = ajax;

const loader = document.querySelector('.loader');
const item = document.querySelector('.items');
let loading = true;


setInterval(() => {
	if(loading === false && loader.classList.contains('loader_active')) {
		loader.classList.remove('loader_active');
	} else if(loading === true && !loader.classList.contains('loader_active')) {
		loader.classList.add('loader_active');
	}
}, 1000);

function ajax() {
	const xhr = new XMLHttpRequest();

	xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/');
	xhr.setRequestHeader('Content-Type', 'application/json');

	xhr.onreadystatechange = function () {
		if(xhr.readyState === 4 && xhr.status === 200) {
			const response = JSON.parse(xhr.responseText);
			const valute = response.response.Valute;
			html(valute);
		};
	};

	xhr.send();
}

function html(obj) {
	loading = false;
	for(let i in obj) {
		items.innerHTML += `
		<div class="item">
			<div class="item__code">
	            ${obj[i].CharCode}
	        </div>
	        <div class="item__value">
	            ${obj[i].Value}
	        </div>
	        <div class="item__currency">
	            руб.
	        </div>
        </div>`;
	}
}