const express = require("express");
const router = express.Router();
const leaderBoardController = require("../controllers/leaderBoard")


router.get('/', leaderBoardController.index)

router.get('/:leaderid', (req,res) => {
    res.send('handler for params ' + req.params.leaderid)
})

router.post('/', leaderBoardController.create)

module.exports = router