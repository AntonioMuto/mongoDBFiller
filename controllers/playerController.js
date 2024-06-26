const playerService = require('../services/playerService');

exports.getPlayerById = async (req, res, next) => {
    try {
        const playerId = req.params.id;
        const player = await playerService.getPlayerById(playerId);
        res.json(player);
    } catch (error) {
        next(error);
    }
};

exports.getPlayerByTeam = async (req, res, next) => {
    try {
        const teamId = req.params.team;
        const player = await playerService.getPlayerByTeam(teamId);
        res.json(player);
    } catch (error) {
        next(error);
    }
};

exports.getPlayers = async (req, res, next) => {
    try {
        const players = await playerService.getPlayers();
        res.json(players);
    } catch (error) {
        next(error);
    }
};
