const Game = require("../models/Game");

module.exports = {
  create,
  index,
  detail,
  delete: deleteGame,
};

async function create(req, res) {
  //Create Method thru mongoose
  //saves to database
  const game = await Game.create(req.body);
  //responds to request made client-side
  res.json(game);
}

async function index(req, res) {
  // Sort most recent orders first
  const games = await Game.find({}).sort("-createdAt").exec();
  res.json(games);
}

async function detail(req, res) {
  const game = await Game.findById(req.params.id);
  res.json(game);
}

async function deleteGame(req, res) {
  const game = await Game.findOneAndDelete(req.params.id);
  console.log(game);
  game.remove();

  res.json(game);
}
