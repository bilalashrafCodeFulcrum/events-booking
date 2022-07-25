const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())


app.get('/', (req, res)=>{
    res.json({
        name: 'bilal',
        email: 'bilalashraf@gmail.com'
    })
})

app.listen(8000, ()=>{
    console.log('Server is runing on port 8000')
})