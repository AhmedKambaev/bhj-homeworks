const container = document.querySelector('.cart__products');
const decButton = document.querySelectorAll('.product__quantity-control_dec'),
	  incButton = document.querySelectorAll('.product__quantity-control_inc');

const addedCart = document.querySelectorAll('.product__add');

for(let button of addedCart) {
	button.addEventListener('click', (e) => {
		const parent = e.target.closest('.product');
		const id = parent.dataset.id;
		const src = parent.childNodes[3].src;
		const value = parent.children[2].children[0].children[1].children[1].textContent;
		// console.log(value)
		html(id, src, value);
	});
}

for(let but of decButton) {
	but.addEventListener('click', (e) => {
		const parent = but.parentNode;
		const val = parent.childNodes[3];
		let value = val.textContent;
		if(value > 1) val.textContent = --value;
	});
}

for(let but of incButton) {
	but.addEventListener('click', (e) => {
		const parent = but.parentNode;
		const val = parent.childNodes[3];
		let value = val.textContent;
		val.textContent = ++value;
	});
}


function html(id, src, counter) {
	const children = Array.from(container.children);
	const block = children.find((block) => block.dataset.id === id);
	if(block) {
		const value = parseInt(block.children[1].textContent);
		block.children[1].textContent = value + parseInt(counter);
		return 0;
	}
	container.innerHTML += `<div class="cart__product" data-id="${id}">
				                <img class="cart__product-image" src="${src}">
				                <div class="cart__product-count">${counter}</div>
				            </div>`;
}