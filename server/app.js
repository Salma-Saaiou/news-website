const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const auth = require('./routes/auth');


require('dotenv').config();

const app = express();


app.use(cors());
app.use(express.json());

app.use('/', auth);

app.listen(process.env.PORT || 4000, ()=>{
    console.log('Server is running on port 4000');
})