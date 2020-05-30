function getUsers(){
	fetch('https://jsonplaceholder.typicode.com/users')
	.then(response => {
		return response.json();
	})
	.then(users => {
		var len = Object.keys(users).length;
		var divCode = "<table border=\"1\"><tr><th>ID</th><th>NAME</th><th>E-MAIL</th><th>PHONE</th></tr>"
		for (i = 0 ; i < len ; i++){
			var user = JSON.parse(JSON.stringify(users[i]));
			console.log(user);
			divCode = divCode + "<tr><td>"+user.id+"</td><td>"+user.name+"</td><td>"+user.email+"</td><td>"+user.phone+"</td></tr>"
		}
		divCode = divCode+"</table>";
		document.getElementById('result').innerHTML = divCode;
		
		console.log(users);
//		console.log(Object.keys(users).length)
//		console.log(divCode);
	})
}