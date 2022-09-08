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

module.exports = {
  listAll,
  createItem,
  listById,
};
