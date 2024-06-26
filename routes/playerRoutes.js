const express = require('express');
const router = express.Router();
const playerController = require('../controllers/playerController');

router.get('/retrieve/playersByTeam/:team', playerController.getPlayerByTeam)
router.get('/retrieve/:id', playerController.getPlayerById);
router.get('/', playerController.getPlayers);


module.exports = router;