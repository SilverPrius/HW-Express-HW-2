//Require modules
const express = require('express')

// Create the Express app
const app = express()

//Set the port
let port = 3000

// Mount routes
app.get('/greeting/:name', (req, res) => {
	console.log(req.params)
	res.send(`Hey! How ya been, ` + req.params.name + '?');
})

app.get('/tip/:total/:tipPercentage', (req, res) => {
	console.log(req.params)
	let result = (req.params.total * (req.params.tipPercentage / 100))
	res.send(`${result}`)
})


//Tell the app to listen to port 3000
app.listen(port, function () {
    console.log(`Listening to port ${port}` )
})