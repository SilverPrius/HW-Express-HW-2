//Require modules
const express = require('express')

// Create the Express app
const app = express()

//Set the port
let port = 3000

// Mount routes
app.get('/greeting/:name', (req, res) => {
	console.log(req.params)
	res.send(`Hey! How ya been, ` + req.params.name + '?')
})

app.get('/tip/:total/:tipPercentage', (req, res) => {
	console.log(req.params)
	let result = (req.params.total * (req.params.tipPercentage / 100))
	res.send(`${result}`)
})

app.get('/magic/:question', (req, res) => {
	console.log(req.params)

	const myArray = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it", "As I see it yes", "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy try again", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"]

	let answer = myArray[Math.floor(Math.random() * myArray.length)]
	res.send(`<h1>${answer}</h1>`)
})


//Tell the app to listen to port 3000
app.listen(port, function () {
	console.log(`Listening to port ${port}`)
})