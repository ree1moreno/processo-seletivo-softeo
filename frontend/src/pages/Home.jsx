import { useState } from "react";
import Footer from "../components/Footer";
import Form from "../components/Form";
import Header from "../components/Header";
import List from "../components/List";
import "./styles/Home.css";

export default function Home() {
  const [listItems, setListItems] = useState([
    {
      name: "Paciente",
      treatment: "Tratamento",
      date: "2022-09-01",
      value: "10000",
      portion: 1,
    },
    {
      name: "Paciente2",
      treatment: "Tratamento2",
      date: "2022-09-02",
      value: "20000",
      portion: 12,
    },
  ]);

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
