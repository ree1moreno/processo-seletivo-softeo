import { useEffect, useState } from "react";
import { getList } from "../services/api";
import MyContext from "./MyContext";

export default function ContextProvider({ children }) {
  const [list, setList] = useState([]);

  useEffect(() => {
    getList().then((result) => {
      setList(result);
    });
  }, []);

  useEffect(() => {
    getList().then((result) => {
      setList(result);
    });
  }, [list]);

  const context = { list, setList };

  return <MyContext.Provider value={context}>{children}</MyContext.Provider>;
}
