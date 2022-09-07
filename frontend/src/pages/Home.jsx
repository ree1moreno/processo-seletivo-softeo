import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Form from "../components/Form";
import Header from "../components/Header";
import List from "../components/List";
import { getList } from "../services/api";
import "./styles/Home.css";

export default function Home() {
  const [listItems, setListItems] = useState([]);

  useEffect(() => {
    getList().then((result) => {
      setListItems(result);
    });
  }, []);

  const addItem = (new_item) => {
    setListItems([...listItems, new_item]);
  };

  return (
    <div className="home-container">
      <Header />
      <main className="main-container">
        <Form addItem={addItem} />
        <List list={listItems} />
      </main>
      <Footer />
    </div>
  );
}
