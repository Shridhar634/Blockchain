import Web3 from 'web3';
//const Web3 = require('web3');
function sendEmail() {
		//	const fs = require("fs");
			var id = document.getElementById("email").value;
			console.log(id);
			console.log(Web3);	
			// Email.send({
			// 	Host: "smtp.gmail.com",
			// 	Username : "sharrynagar1@gmail.com",
			// 	Password : "Project@123",
			// 	To : 'sharrynagar1@gmail.com,preetisnagarkar@gmail.com',
			// 	From : "shridharnagarkar@gmail.com",
			// 	Subject : "<email subject>",
			// 	Body : "<email body>",
			// })
			// .then(function(message){
			// 	alert("mail sent successfully")
			// });
		}