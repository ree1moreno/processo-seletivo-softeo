const clientsModel = require("../models/clients.model");

const listAll = async () => {
  const clientsList = await clientsModel.listAll();

  return clientsList;
};

const createItem = async ({ name, treatment, date, value, portion }) => {
  return await clientsModel.createItem(name, treatment, date, value, portion);
};

module.exports = {
  listAll,
  createItem,
};
