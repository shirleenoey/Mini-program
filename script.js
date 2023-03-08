var database = [
	{
		username: "Ottie",
		password: "123"
	},
	{
		username: "Val",
		password: "456"
	},
	{
		username: "Nyx",
		password: "789"
	},
	{
		username: "Sally",
		password: "234"
	}
];

var newsFeed = [
	{
		username:"Val",
		timeline: "is learning Javascript"
	},
	{
		username:"Lee",
		timeline: "building a website"
	}
];

var userNamePrompt = prompt("What is your username?");
var passwordPrompt = prompt("What is your password?");


function isUserValid(username, password) {
	for (var i=0; i < database.length; i++) {
		if (database[i].username === username &&
			database[i].password === password) {
			return true;
		}
			
	}
	return false;
}


function signIn(username, password) {
	if (isUserValid(username,password)) {
		console.log(newsFeed);
	} else {
		alert("Sorry, wrong username and password!");
	}
}

signIn(userNamePrompt,passwordPrompt);