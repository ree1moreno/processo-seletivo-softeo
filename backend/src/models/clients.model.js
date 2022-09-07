const connection = require("./connection");

const listAll = async () => {
  const SQL = "SELECT * FROM clients;";
  const [result] = await connection.execute(SQL);

  if (!result.length) return null;
  return result;
};

module.exports = {
  listAll,
};
