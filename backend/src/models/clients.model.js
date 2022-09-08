const connection = require("./connection");

const listAll = async () => {
  const SQL = "SELECT * FROM clients;";
  const [result] = await connection.execute(SQL);

  if (!result.length) return [];
  return result;
};

const createItem = async (name, treatment, date, value, portion) => {
  const SQL =
    "INSERT INTO clients (name, treatment, date, value, portion) VALUES (?, ?, ?, ?, ?);";
  const [result] = await connection.execute(SQL, [
    name,
    treatment,
    date,
    value,
    portion,
  ]);

  return {
    id: result.insertId,
    name,
    treatment,
    date,
    value,
    portion,
  };
};

const listById = async (id) => {
  const SQL = "SELECT * FROM clients WHERE id = ?;";
  const [result] = await connection.execute(SQL, [id]);

  if (!result) return null;
  return result[0];
};

module.exports = {
  listAll,
  createItem,
  listById,
};
