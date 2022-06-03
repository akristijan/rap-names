const express = require('express');
const app = express();
const PORT = 3000;

const rappers = {
    '21 savage': {
        'age': 29,
        'birthName': 'Shéyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England'
    },
    'chance the rapper': {
        'age': 28,
        'birthName': 'Chancelor Johnathan Bennett',
        'birthLocation': 'Chicago, Illinois, U.S.'
    },
    'eminem': {
        'age': 28,
        'birthName': 'Marshall Bruce Mathers III',
        'birthLocation': ' St. Joseph, Missouri, U.S.'
    },
    
}

//Listening for request on PORT
app.listen(PORT, ()=> {
    console.log(`The server is running on ${PORT}`)
})

//middleware
app.use(express.urlencoded());

//route handlers
app.get('/', (req, res) => {
    
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:rapperName', (req, res) => {
    let rapperName = req.params.rapperName.toLowerCase();
    if(rappers[rapperName]) {
        res.json(rappers[rapperName])
    }
    else {
        res.json(rappers['eminem'])
    }
})

