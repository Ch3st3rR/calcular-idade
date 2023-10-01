const year = document.querySelector("#year");
const name = document.querySelector("#name");
const submitButton = document.querySelector("#submitButton");

let output = document.querySelector("#output");
let age;

submitButton.addEventListener("click", (e) => {
	if (year.value === '' || name.value === '') {
		output.innerText = "Por favor, digite os dados necessários.";
		return;
	}
	age = new Date().getFullYear() - year.value;
	output.innerText = `${name.value}, você tem ${age} anos!`;
	e.preventDefault();
})
