//Load express
const express = require('express')

//Create express app
const app = express()

//Set the port
port = 3000

// Mount routes
app.get('/', function (req, res) {
    res.send('99 Bottles of formula on the wall<br/><a href="http://localhost:3000/98">Take one down, pass it around</a>')
})

app.get('/:number_of_formulas', (req, res) => {
    console.log(req.params)
    let remaining = req.params.number_of_formulas
    let minusOne = (`${remaining}` - 1)
    let response = (`${remaining} Bottles of formula on the wall,<br/> ${remaining} Bottles of formula,<br/> <a href="http://localhost:3000/${minusOne}">Take one down, pass it around,</a> <br/> ${minusOne} babies still crying down the hall! `)
    let startOver = ('There are no bottles of formula left.<br /> <a href="http://localhost:3000/">Time for a Target run</a>')
    
    if (`${remaining}` > 0) {
        res.send(`${response}`)
    }else {
        res.send(startOver)
    }
})




//Tell the app to listen on port 3000
//for HTTP requests from the clients
app.listen(port, function () {
    console.log(`Listening to port ${port}`)
})