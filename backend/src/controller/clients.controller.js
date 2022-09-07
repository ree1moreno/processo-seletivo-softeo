const clientsService = require("../services/clients.service");

const listAll = async (_req, res) => {
  const clientsList = await clientsService.listAll();

  res.status(200).json(clientsList);
};

const createItem = async (req, res) => {
  const item = req.body;
  console.log(req.body);
  const itemCreated = await clientsService.createItem(item);

  res.status(201).json(itemCreated);
};

module.exports = {
  listAll,
  createItem,
};
