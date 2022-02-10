const Game = require("../models/Game");

module.exports = {
  create,
};

function create(req, res) {
  const game = new Game(req.body);

  game.save(function (err) {
    if (err) {
      console.log(err);
    }
  });
}
