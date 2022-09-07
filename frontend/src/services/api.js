import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001",
});

export const getList = async () => {
  try {
    const { data } = await api.get("/");
    return data;
  } catch (e) {
    console.error(e);
  }
};

export const createItem = async (item) => {
  try {
    const { data } = await api.post("/", item);
    return data;
  } catch (e) {
    console.error(e);
  }
};
