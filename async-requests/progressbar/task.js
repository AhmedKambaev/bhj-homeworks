
const progress = document.getElementById( 'progress' );
const form = document.querySelector('#send');

form.addEventListener('click', ajax);

function ajax(e) {
	e.preventDefault();

	const file = document.querySelector('input[type="file"]').files[0];
	
	const formData = new FormData();
	const request = new XMLHttpRequest();
	formData.append('file', file);


	request.onprogress = function(e) {
		progress.value = e.loaded/10000000;

	  	console.log(e);
	}

	request.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php', true);
	request.setRequestHeader('Content-Type', 'multipart/form-data');

	request.send(formData);
}