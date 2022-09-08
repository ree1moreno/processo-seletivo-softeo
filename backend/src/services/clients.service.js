const clientsModel = require("../models/clients.model");

const listAll = async () => {
  const clientsList = await clientsModel.listAll();

  return clientsList;
};

const createItem = async ({ name, treatment, date, value, portion }) => {
  return await clientsModel.createItem(name, treatment, date, value, portion);
};

const listById = async (id) => {
  const client = await clientsModel.listById(id);
  return client;
};

const deleteById = async (id) => {
  const client = await clientsModel.deleteById(id);
  if (client.length === 0) return null;
  return client;
};

const update = async (item) => {
  const client = await clientsModel.update(item);
  if (client.length === 0) return null;

  return client;
};

module.exports = {
  listAll,
  createItem,
  listById,
  deleteById,
  update,
};
