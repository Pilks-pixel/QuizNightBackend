const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose =require('mongoose');
require('dotenv').config()



const app = express();
app.use(cors());
app.use(bodyParser.json( ));




app.get('/', (req, res) => {
    res.status(200).send('Hello World!')
  })


const leaderRoutes = require('./routes/leaderBoard');
app.use('/leaderBoard', leaderRoutes);



module.exports = app;