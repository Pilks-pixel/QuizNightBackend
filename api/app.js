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

// Server
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Express listening on http://localhost:${port}!`)
});

module.exports = app;