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

const listById = async (req, res) => {
  const { id } = req.params;
  const client = await clientsService.listById(id);

  if (!client) return res.status(404).json({ message: "Item not found." });
  return res.status(200).json(client);
};

const deleteById = async (req, res) => {
  const { id } = req.params;
  const client = await clientsService.deleteById(id);

  if (!client) return res.status(404).json({ message: "Item not found." });
  return res.status(204).end();
};

const update = async (req, res) => {
  const { id } = req.params;
  const { name, treatment, date, value, portion } = req.body;
  const client = await clientsService.update({
    id,
    name,
    treatment,
    date,
    value,
    portion,
  });

  if (!client) return res.status(404).json({ message: "Item not found." });
  return res.status(200).send(client);
};

module.exports = {
  listAll,
  createItem,
  listById,
  deleteById,
  update,
};
