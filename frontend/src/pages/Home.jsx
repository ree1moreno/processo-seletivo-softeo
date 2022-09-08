import { useContext } from "react";
import Footer from "../components/Footer";
import Form from "../components/Form";
import Header from "../components/Header";
import List from "../components/List";
import MyContext from "../context/MyContext";
import "./styles/Home.css";

export default function Home() {
  const { list, setList } = useContext(MyContext);

  return (
    <div className="home-container">
      <Header />
      <main className="main-container">
        <Form />
        <List />
      </main>
      <Footer />
    </div>
  );
}
