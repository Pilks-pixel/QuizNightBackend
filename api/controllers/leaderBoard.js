const express = require('express');
const router = express.Router();

const LeaderBoard = require('../models/leaderBoard');


async function index(req, res) {
    try {
        const leaderData =  await LeaderBoard.all;
        res.status(200).json(leaderData);
    }
    catch(err) {
        res.status(500).json({err})
    }
};
        

async function create(req, res) {
    try {
        const nLeader = {name:req.body.name, score: parseInt(req.body.score)};
        LeaderBoard.create(nLeader);
        res.status(201).json({message: `${nLeader.name} successfully added to our collection.`});
    }
    catch(err) {
        res.status(500).json({err})
    }
};


// router.delete('/', (req, res) => {
//     leaderData.filter((l) => l.name !== req.query.name);
//     res.status(204);
// })

module.exports = {index, create}
