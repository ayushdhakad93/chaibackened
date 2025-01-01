require('dotenv').config()
const express = require('express')

const app = express();

const port =3000;

app.get('/', (req,res) => {
    res.send('hello world')
})

app.get('/twitter', (req,res) => {
      res.send('gfdsdfg')
})

app.get('/login',(req,res) => {
     res.send('<h1>plese login at chai</h1>')
})
app.listen(process.env.PORT, ()=>{
     console.log('exaple app listening non port 3000');
     
})