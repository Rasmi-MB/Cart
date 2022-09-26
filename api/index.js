const express = require('express') 
const cartRouter=require('./router/cartRouter')
const app = express()

//dbConfig()
const port=4500;
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api/', cartRouter)
app.listen(port, () => {
    console.log(`App listening at http://localhost:4500`)
})
module.exports = { app }
