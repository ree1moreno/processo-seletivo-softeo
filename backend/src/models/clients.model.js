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

const deleteById = async (id) => {
  const SQL = "DELETE FROM clients WHERE id = ?;";
  const [result] = await connection.execute(SQL, [id]);

  if (!result.affectedRows) return [];
  return true;
};

const update = async ({ name, treatment, date, value, portion, id }) => {
  const SQL =
    "UPDATE clients SET name = ?, treatment = ?, date = ?, value = ?, portion = ? WHERE id = ?;";
  const [result] = await connection.execute(SQL, [
    name,
    treatment,
    date,
    value,
    portion,
    id,
  ]);

  if (!result.affectedRows) return [];

  return {
    id,
    name,
    treatment,
    date,
    value,
    portion,
  };
};

module.exports = {
  listAll,
  createItem,
  listById,
  deleteById,
  update,
};
