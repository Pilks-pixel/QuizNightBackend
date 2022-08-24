const express = require("express");
const router = express.Router();
const leaderBoardController = require("../controllers/leaderBoard")


router.get('/', leaderBoardController.index)
router.post('/', leaderBoardController.create)

module.exports = router