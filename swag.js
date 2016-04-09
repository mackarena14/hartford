var people = [];

function submitTo() {
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var depart = document.getElementById("department").value;
	var input = document.getElementById("idea").value;
	var person = new Array(name, email, depart, input);
	people.push(person);
	
	console.log(people);
	console.log(person);
}


