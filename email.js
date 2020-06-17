// const dotenv = require('dotenv');
// const nodemailer = require('nodemailer');
// const log = console.log;
// const fs = require("fs");
// var text = fs.readFileSync('./text.txt').toString('utf-8');
// var textByLine = text.split("\n");
// console.log(textByLine);
// console.log(textByLine[0]);
// console.log(textByLine.length);
// var web = require('web3')
export default lol()
function lol(){
	console.log('')
}
// console.log(Math.ceil(Math.random() * 100000000000000))
// // ///Step 1
// let transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//        			 pass: process.env.PASSWORD, 
//         		 user: process.env.EMAIL 
//           }
// });

// var from_ = 'sharrynagar1@gmail.com'
// //var to_ = 'preetisnagarkar@gmail.com'
// var key;
// var password;
// //var str;  'Your key is: '+ key+'\nYour password is: '+pass 
// //console.log(str)

// const Web3 = require('web3');
// var web3 = new Web3('http://localhost:8545');
// console.log(web3);
// const net = require('net');
// var web3 = new Web3('http://127.0.0.1:8545/',net);
// console.log(web3);
// //var acc;
// //var pass;
// //console.log(acc);


// for(var i=0;i<textByLine.length;i++)
// {	

// 		password = Math.ceil(Math.random() * 100000000000000);

// 		key = web3.eth.personal.newAccount(toString(password));

// 		str = 'Your key is: '+ key+'\nYour password is: '+password;

// 		let mailOptions = {
// 		    from: from_, // TODO: email sender
// 		    to: textByLine[i], // TODO: email receiver
// 		    subject: 'Nodemailer - Test',
// 		    text: str
// 		};
// 		//Step 3
// 		transporter.sendMail(mailOptions, (err, data) => {
// 		    if (err) {
// 		        console.log(err)
// 		        return log('errror ocurrs..',err);
// 		    }
// 		    return log('Email sent!!!');
// 		});
// }