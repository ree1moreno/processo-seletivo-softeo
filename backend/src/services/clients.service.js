const clientsModel = require("../models/clients.model");

const listAll = async () => {
  const clientsList = await clientsModel.listAll();

  return clientsList;
};

module.exports = {
  listAll,
};
