const clientsService = require("../services/clients.service");

const listAll = async (_req, res) => {
  const clientsList = await clientsService.listAll();

  res.status(200).json(clientsList);
};

module.exports = {
  listAll,
};
