const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')
const dotenv = require('dotenv')
const db = require('./models')


//config
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use(express.static(__dirname + '/static/assets'));


dotenv.config();
global.__basedir = __dirname;

app.get('/', (req, res)=>{
    res.send('Welcome To Server')
})

app.listen(process.env.PORT || 3000, ()=>{
    console.log(`Listening at port ${process.env.PORT}`)
})